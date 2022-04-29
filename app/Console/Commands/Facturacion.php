<?php

namespace App\Console\Commands;
use App\Models\AsignacionModel;
use App\Models\FacturadoModel;
use App\Models\RegistroModel;
use Illuminate\Console\Command;

class Facturacion extends Command
{
    protected $signature = 'send:facturado';

    protected $description = 'Cambia el estado de registros en estado reservado a facturado';

    public function handle()
    {
        $asignaciones = AsignacionModel::select(
            'packing_list.vin',
            'packing_list.fecha_ingreso',
            'asignaciones.id',
            'asignaciones.fecha_facturado',
            'asignaciones.fecha_sap_facturado',
            'asignaciones.codigo_sap_cliente',
            'asignaciones.ingreso_id',
            'asignaciones.situacion'
        )
        ->Join('packing_list', 'asignaciones.ingreso_id', 'packing_list.id')
        ->where('asignaciones.situacion', 'EMPLAZADO')->get();

        foreach ($asignaciones as $asignacion) {
            $row = AsignacionModel::find($asignacion->id);
            $facturado = FacturadoModel::where('vin', $asignacion->vin)->first();

            $registro = RegistroModel::where('id', $asignacion->registro_id)->first();

            if ($facturado && $registro) {
                $registro->situacion = 'EMPLAZADO';
                $registro->save();

                $row->situacion = 'FACTURADO';
                $row->fecha_facturado = date('Y-m-d');
                $row->fecha_sap_facturado = $facturado->fecha_facturacion;
                $row->codigo_sap_cliente = $facturado->codigo_sap_cliente;
                $row->save();

                $facturado->situacion = 'FACTURADO';
                $facturado->save();
            }
        }
    }
}

<?php

namespace App\Console\Commands;
use App\Models\AsignacionModel;
use App\Models\FacturadoModel;
use Illuminate\Console\Command;

class Facturacion extends Command
{
    protected $signature = 'send:facturado';

    protected $description = 'Cambia el estado de registros en estado reservado a facturado';

    public function handle()
    {
        $asignaciones = AsignacionModel::select(
            'packing_list.vin',
            'packing_list.codigo_sap_cliente',
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
            $facturado = FacturadoModel::where('vin', $asignacion->vin)->first();
            if ($facturado) {
                $asignacion->situacion = 'FACTURADO';
                $asignacion->fecha_facturado = date('Y-m-d'); 
                $asignacion->fecha_sap_facturado = $facturado->fecha_facturacion;
                $asignacion->codigo_sap_cliente = $facturado->codigo_sap_cliente;
                $asignacion->save();

                $facturado->situacion = 'FACTURADO';
                $facturado->save();
            }
        }
    }
}

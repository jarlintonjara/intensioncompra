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
        $registros = AsignacionModel::select(
            'packing_list.vin',
            'packing_list.marca',
            'packing_list.modelo',
            'packing_list.version',
            'packing_list.color',
            'packing_list.anio_modelo',
            'packing_list.codigo_sap',
            'packing_list.fecha_ingreso',
            'asignaciones.id',
            'asignaciones.fecha_distribucion',
            'asignaciones.codigo_reserva',
            'asignaciones.monto_reserva',
            'asignaciones.fecha_reserva',
            'asignaciones.situacion'
        )
        ->Join('packing_list', 'asignaciones.ingreso_id', 'packing_list.id')
        ->where('asignaciones.situacion', 'EMPLAZADO')->get();

        foreach ($registros as $registro) {
            $row = FacturadoModel::where('vin', $registro->vin)->first();
            if ($row) {
                $registro->situacion = 'FACTURADO';
                $registro->fecha_facturacion = $row->fecha_facturacion;
                $registro->codigo_sap_cliente = $row->codigo_sap_cliente;
                $registro->save();
                $row->situacion = 'FACTURADO';
                $row->save();
            }
        }
    }
}

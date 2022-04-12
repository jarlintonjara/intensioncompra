<?php

namespace App\Console\Commands;
use App\Models\AsignacionModel;
use App\Models\EmplazadoModel;
use Illuminate\Console\Command;

class Emplazado extends Command
{
    protected $signature = 'send:emplazado';

    protected $description = 'Cambia el estado de registros en estado reservado a emplazado';

    public function handle()
    {
        //$registros = AsignacionModel::where('situacion', 'RESERVADO')->get();
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
            ->where('situacion', 'RESERVADO')->get();
        
        dd($registros);
        foreach ($registros as $registro) {
            $row = EmplazadoModel::where('vin', $registro->vin)->where('situacion', '!=', 'EMPLAZADO')->first();
            if($row){
                $row->situacion = 'EMPLAZADO';
                $row->save();

                $registro->situacion = 'EMPLAZADO';
                $registro->fecha_emplazado = $row->fecha_emplazamiento;
                $registro->save();
            } 
        }
    }
}

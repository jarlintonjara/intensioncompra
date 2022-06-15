<?php

namespace App\Console\Commands;
use App\Models\AsignacionModel;
use App\Models\EmplazadoModel;
use App\Models\RegistroModel;
use Illuminate\Console\Command;

class Emplazado extends Command
{
    protected $signature = 'send:emplazado';

    protected $description = 'Cambia el estado de registros en estado reservado a emplazado';

    public function handle()
    {
        $asignaciones = AsignacionModel::select(
            'registros.id',
            'packing_list.vin',
            'asignaciones.id',
            'asignaciones.registro_id',
            'asignaciones.fecha_sap_emplazado',
            'asignaciones.fecha_emplazado',
            'asignaciones.situacion'
        )
        ->join('packing_list', 'packing_list.id', 'asignaciones.ingreso_id')
        ->join('registros', 'registros.id', 'asignaciones.registro_id')
        ->where('asignaciones.situacion', 'RESERVADO')
        ->where('registros.estado', 1)
        ->get();

        foreach ($asignaciones as $asignacion) {
            $row = AsignacionModel::find($asignacion->id);
            $emplazado = EmplazadoModel::find($asignacion->vin);
            $registro = RegistroModel::find($row->registro_id);

            if ($emplazado && $registro) {
                $row->fecha_emplazado = date('Y-m-d H:i:s');
                $row->fecha_sap_emplazado = $emplazado->fecha_emplazamiento;
                $row->situacion = 'EMPLAZADO';
                $row->save();

                $registro->situacion = 'EMPLAZADO';
                $registro->save();

                $emplazado->situacion = 'EMPLAZADO';
                $emplazado->save();
            }
        }
    }
}

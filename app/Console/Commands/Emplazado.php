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
            'packing_list.vin',
            'asignaciones.fecha_sap_emplazado',
            'asignaciones.fecha_emplazado',
            'asignaciones.situacion'
        )
        ->Join('packing_list', 'asignaciones.ingreso_id', 'packing_list.id')
        ->where('asignaciones.situacion', 'RESERVADO')
        ->get();

        foreach ($asignaciones as $asignacion) {
            $emplazado = EmplazadoModel::where('vin', $asignacion->vin)->first();

            $registro = RegistroModel::where('id', $asignacion->registro_id)->first();

            if ($registro) {
                $registro->situacion = 'EMPLAZADO';
                $registro->save();
            }

            if ($emplazado) {
                $asignacion->fecha_emplazado = date('Y-m-d');
                $asignacion->fecha_sap_emplazado = $emplazado->fecha_emplazamiento;
                $asignacion->situacion = 'EMPLAZADO';
                $asignacion->save();
                
                $emplazado->situacion = 'EMPLAZADO';
                $emplazado->save();
            }
        }
    }
}

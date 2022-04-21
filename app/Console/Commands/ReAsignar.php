<?php

namespace App\Console\Commands;
use App\Models\RegistroModel;
use App\Models\IngresoModel;
use App\Models\AsignacionModel;

use Illuminate\Console\Command;

class ReAsignar extends Command
{
    protected $signature = 'send:reAsignar';

    protected $description = 'Despues de 24h de reservarse pasan a cola de registros';

    public function handle()
    {
        $asignaciones = AsignacionModel::where('situacion', 'ASIGNADO')->get();

        foreach ($asignaciones as $asignacion) {

            $registro = RegistroModel::where('id', $asignacion->registro_id)
                        ->where('situacion', 'ASIGNADO')
                        ->first();
    
            if($registro){
                $registro->situacion = 'SINASIGNAR';
                $registro->fecha = date('Y-m-d');
                $registro->save();
                $asignacion->situacion = 'SINASIGNAR';
                $asignacion->save();
            } 
        }
    }
}

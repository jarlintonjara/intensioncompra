<?php

namespace App\Console\Commands;
use App\Models\RegistroModel;
use App\Models\IngresoModel;
use App\Models\AsignacionModel;

use Illuminate\Console\Command;

class Asignacion extends Command
{
    protected $signature = 'send:asignacion';

    protected $description = 'Asigna registros';

    public function handle()
    {
        $registros = RegistroModel::select('id', 'marca', 'modelo', 'version', 'anio_modelo', 'color1', 'situacion')
        ->where('situacion', 'SINASIGNAR')->where('estado', 1)->orderBy('fecha', 'asc')
        ->get();

        foreach ($registros as $registro) {

            $ingresos = IngresoModel::where('marca', $registro->marca)
            ->where('modelo', $registro->modelo)
            ->where('version', $registro->version)
            ->where('anio_modelo', $registro->anio_modelo)
            ->where('color', $registro->color1)
            ->where('situacion', 'LIBRE')
            ->where('bloqueado', 0)
            ->first();
    
            if($ingresos){
                $ingresos->situacion = 'ASIGNADO';
                $ingresos->save();
                $registro->situacion = 'ASIGNADO';
                $registro->save();
                
                AsignacionModel::create(['registro_id' => $registro->id, 'ingreso_id' => $ingresos->id, 'situacion' => 'ASIGNADO', 'fecha_distribucion' => date('Y-m-d')]);
            } 
        }

        //segundo
        $registros2 = RegistroModel::select('id','marca','modelo','version','anio_modelo','color2','situacion')
        ->where('situacion', 'SINASIGNAR')->where('estado', 1)->orderBy('fecha', 'asc')
        ->get();
        
        foreach ($registros2 as $registro2) {

            $ingresos2 = IngresoModel::where('marca', $registro2->marca)
            ->where('modelo', $registro2->modelo)
            ->where('version', $registro2->version)
            ->where('anio_modelo', $registro2->anio_modelo)
            ->where('color', $registro2->color2)
            ->where('situacion', 'LIBRE')
            ->where('bloqueado', 0)
            ->first();
    
            if($ingresos2){
                $ingresos2->situacion = 'ASIGNADO';
                $ingresos2->save();

                $registro2->situacion = 'ASIGNADO';
                $registro2->save();

                AsignacionModel::create(['registro_id' => $registro2->id, 'ingreso_id' => $ingresos2->id, 'situacion' => 'ASIGNADO', 'fecha_distribucion' => date('Y-m-d')]);
            } 
        }
        
        //tercero
        $registros3 = RegistroModel::select('id','marca','modelo','version','anio_modelo','color3','situacion')
        ->where('situacion', 'SINASIGNAR')->where('estado', 1)->orderBy('fecha', 'asc')
        ->get();

        foreach ($registros3 as $registro3) {

            $ingresos3 = IngresoModel::where('marca', $registro3->marca)
            ->where('modelo', $registro3->modelo)
            ->where('version', $registro3->version)
            ->where('anio_modelo', $registro3->anio_modelo)
            ->where('color', $registro3->color3)
            ->where('situacion', 'LIBRE')
            ->where('bloqueado', 0)
            ->first();
    
            if($ingresos3){
                $ingresos3->situacion = 'ASIGNADO';
                $ingresos3->save();

                $registro3->situacion = 'ASIGNADO';
                $registro3->save();

                AsignacionModel::create(['registro_id' => $registro3->id, 'ingreso_id' => $ingresos3->id, 'situacion' => 'ASIGNADO', 'fecha_distribucion' => date('Y-m-d')]);
            } 
        }
    }
}

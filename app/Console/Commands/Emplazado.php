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
        $registros = AsignacionModel::where('situacion', 'RESERVADO')->get();

        foreach ($registros as $registro) {
            $row = EmplazadoModel::where('vin', $registro->vin)->where('situacion', '!=', 'EMPLAZADO')->first();
            if($row){
                $row->situacion = 'EMPLAZADO';
                $row->update();

                $registro->situacion = 'EMPLAZADO';
                $registro->update();
            } 
        }
    }
}

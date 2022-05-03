<?php

namespace App\Console\Commands;
use App\Models\IngresoModel;
use App\Models\FacturadoModel;
use Illuminate\Console\Command;

class BloquearFacturados extends Command
{
    protected $signature = 'send:bloquear';

    protected $description = 'Bloquear facturados';

    public function handle()
    {
        $facturados = FacturadoModel::select('vin')->get();

        foreach ($facturados as $facturado) {

            $ingreso = IngresoModel::where('vin', $facturado->vin)->where('situacion', 'LIBRE')->where('bloqueado', 0)->first();
    
            if($ingreso){
                $ingreso->user_bloqueo = 1751;
                $ingreso->situacion = 'BLOQUEADO';
                $ingreso->fecha_bloqueo = date('Y-m-d');
                $ingreso->bloqueado = 1;
                $ingreso->motivo = 'JOB: unidad ya facturado';
                $ingreso->save();
            } 
        }
    }
}

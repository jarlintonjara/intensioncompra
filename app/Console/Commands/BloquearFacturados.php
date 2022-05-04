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
        $facturados = IngresoModel::select(
            'packing_list.*'
        )
        ->Join('proceso_facturacion_si', 'proceso_facturacion_si.vin', 'packing_list.vin')
        ->where('packing_list.bloqueado', 0)->get();
        foreach ($facturados as $facturado) {

            $ingreso = IngresoModel::where('vin', $facturado->vin)->where('situacion', 'LIBRE')->where('bloqueado', 0)->first();

            if ($ingreso) {
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

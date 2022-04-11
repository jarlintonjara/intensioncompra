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
        $registros = AsignacionModel::where('situacion', 'RESERVADO')->get();

        foreach ($registros as $registro) {
            $row = FacturadoModel::where('vin', $registro->vin)->where('situacion', '!=', 'FACTURADO')->first();
            if($row){
                $row->situacion = 'FACTURADO';
                $row->update();

                $registro->situacion = 'FACTURADO';
                $registro->fecha_facturacion = $row->fecha_facturacion;
                $registro->codigo_sap_cliente = $row->codigo_sap_cliente;
                $registro->update();
            } 
        }
    }
}

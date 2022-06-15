<?php

namespace App\Console\Commands;
use App\Models\RegistroModel;
use App\Models\IngresoModel;
use App\Models\AsignacionModel;

use Illuminate\Console\Command;

class ReAsignarEmplazados extends Command
{
    protected $signature = 'send:reAsignarEmplazados';

    protected $description = 'Despues de 48h de emplazados pasan a cola de registros';

    public function handle()
    {
        // No se factura en 48 horas pasa a la cola de registros
        $asignaciones = AsignacionModel::select(
            'packing_list.vin',
            'asignaciones.id',
            'asignaciones.registro_id',
            'asignaciones.fecha_sap_emplazado',
            'asignaciones.fecha_emplazado',
            'asignaciones.situacion'
        )
            ->join('packing_list', 'packing_list.id', 'asignaciones.ingreso_id')
            ->join('registros', 'registros.id', 'asignaciones.registro_id')
            ->where('asignaciones.situacion', 'EMPLAZADO')
            ->where('registros.estado', 1)
            ->orderBy('asignaciones.fecha_emplazado', 'asc')
            ->get();

        $fecha = date('Y-m-d H:i:s');
        
        foreach ($asignaciones as $asignacion) {

            $nuevafecha = strtotime('+2 day', strtotime($asignacion->fecha_emplazado));
            $nuevafecha = date('Y-m-d H:i:s', $nuevafecha);

            if ($fecha >= $nuevafecha) {
                $row = AsignacionModel::find($asignacion->id);
                $registro = RegistroModel::where('id', $row->registro_id)->first();

                $packing = IngresoModel::where('id', $row->ingreso_id)->first();
                if ($packing) {
                    $packing->situacion = 'LIBRE';
                    $packing->save();
                }

                if ($registro) {
                    $registro->situacion = 'SINASIGNAR';
                    $registro->fecha = date('Y-m-d');
                    $registro->save();

                    $row->situacion = 'SINASIGNAR';
                    $row->save();
                }
            }
        } 
    }
}

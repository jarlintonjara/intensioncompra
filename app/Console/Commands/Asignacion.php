<?php

namespace App\Console\Commands;
use App\Models\RegistroModel;
use App\Models\IngresoModel;
use App\Models\AsignacionModel;
use App\Models\FacturadoModel;
use Illuminate\Console\Command;

class Asignacion extends Command
{
    protected $signature = 'send:asignacion';

    protected $description = 'Asigna registros';

    public function handle()
    {
        $totalFacturados = [];
        $totalAsignados = [];
        $registros = RegistroModel::select('id', 'marca', 'modelo', 'version', 'anio_modelo', 'color1', 'color2', 'color3', 'situacion', 'fecha')
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
            
            $facturado = FacturadoModel::where('vin', $ingresos->vin)->first();
            if($facturado){
                array_push($totalFacturados, $facturado->vin);
            }

            if ($ingresos && !$facturado) {
                $asignado = AsignacionModel::where('ingreso_id', $ingresos->id)->whereIn('situacion', ['ASIGNADO', 'RESERVADO', 'EMPLAZADO', 'FACTURADO'])->first();
                if ($asignado) {
                    array_push($totalAsignados, $asignado->id);
                }
                if (!$asignado) {
                    $ingresos->situacion = 'ASIGNADO';
                    $ingresos->save();

                    $registro->situacion = 'ASIGNADO';
                    $registro->save();

                    AsignacionModel::create(['registro_id' => $registro->id, 'ingreso_id' => $ingresos->id, 'situacion' => 'ASIGNADO', 'fecha_distribucion' => date('Y-m-d')]);
                    continue;
                }
            }

            $ingresos2 = IngresoModel::where('marca', $registro->marca)
                ->where('modelo', $registro->modelo)
                ->where('version', $registro->version)
                ->where('anio_modelo', $registro->anio_modelo)
                ->where('color', $registro->color2)
                ->where('situacion', 'LIBRE')
                ->where('bloqueado', 0)
                ->first();

            $facturado = FacturadoModel::where('vin', $ingresos->vin)->first();
            if ($facturado) {
                array_push($totalFacturados, $facturado->vin);
            }

            if ($ingresos2 && !$facturado) {
                $asignado2 = AsignacionModel::where('ingreso_id', $ingresos2->id)->whereIn('situacion', ['ASIGNADO', 'RESERVADO', 'EMPLAZADO', 'FACTURADO'])->first();
                if ($asignado2) {
                    array_push($totalAsignados, $asignado2->id);
                }
                if (!$asignado2) {
                    $ingresos2->situacion = 'ASIGNADO';
                    $ingresos2->save();

                    $registro->situacion = 'ASIGNADO';
                    $registro->save();

                    AsignacionModel::create(['registro_id' => $registro->id, 'ingreso_id' => $ingresos2->id, 'situacion' => 'ASIGNADO', 'fecha_distribucion' => date('Y-m-d')]);
                    continue;
                }
            }

            $ingresos3 = IngresoModel::where('marca', $registro->marca)
                ->where('modelo', $registro->modelo)
                ->where('version', $registro->version)
                ->where('anio_modelo', $registro->anio_modelo)
                ->where('color', $registro->color3)
                ->where('situacion', 'LIBRE')
                ->where('bloqueado', 0)
                ->first();

            $facturado = FacturadoModel::where('vin', $ingresos->vin)->first();
            if ($facturado) {
                array_push($totalFacturados, $facturado->vin);
            }

            if ($ingresos3 && !$facturado ) {
                $asignado3 = AsignacionModel::where('ingreso_id', $ingresos3->id)->whereIn('situacion', ['ASIGNADO', 'RESERVADO', 'EMPLAZADO', 'FACTURADO'])->first();
                if ($asignado3) {
                    array_push($totalAsignados, $asignado3->id);
                }
                if (!$asignado3) {
                    $ingresos3->situacion = 'ASIGNADO';
                    $ingresos3->save();

                    $registro->situacion = 'ASIGNADO';
                    $registro->save();

                    AsignacionModel::create(['registro_id' => $registro->id, 'ingreso_id' => $ingresos3->id, 'situacion' => 'ASIGNADO', 'fecha_distribucion' => date('Y-m-d')]);
                }
            }
        }
    }
}

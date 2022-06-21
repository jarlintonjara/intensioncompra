<?php

use App\Http\Controllers\FileController;
use App\Models\AsignacionModel;
use App\Models\EmplazadoModel;
use App\Models\FacturadoModel;
use App\Models\IngresoModel;
use App\Models\RegistroModel;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('test', function(){
    $data = ['a', 'b', 'c', 'd'];
    foreach ($data as $e) {
        if($e == 'c') continue;
        echo $e;
    }
});

/* Route::get('emplazado', function () {

}); */

/* Route::get('asignaciontest', function () {
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

        if ($ingresos) {
            $asignado = AsignacionModel::where('ingreso_id', $ingresos->id)->whereIn('situacion', ['ASIGNADO', 'RESERVADO', 'EMPLAZADO', 'FACTURADO'])->first();
            $facturado = FacturadoModel::where('vin', $ingresos->vin)->first();
            print_r($facturado);
            if (!$asignado && !$facturado) {
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

        if ($ingresos2) {
            $asignado2 = AsignacionModel::where('ingreso_id', $ingresos2->id)->whereIn('situacion', ['ASIGNADO', 'RESERVADO', 'EMPLAZADO', 'FACTURADO'])->first();
            $facturado2 = FacturadoModel::where('vin', $ingresos2->vin)->first();
            print_r($facturado2);
            if (!$asignado2 && !$facturado2) {
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

        if ($ingresos3) {
            $asignado3 = AsignacionModel::where('ingreso_id', $ingresos3->id)->whereIn('situacion', ['ASIGNADO', 'RESERVADO', 'EMPLAZADO', 'FACTURADO'])->first();
            $facturado3 = FacturadoModel::where('vin', $ingresos3->vin)->first();
            print_r($facturado3);
            if (!$asignado3 && !$facturado3) {
                $ingresos3->situacion = 'ASIGNADO';
                $ingresos3->save();

                $registro->situacion = 'ASIGNADO';
                $registro->save();

                AsignacionModel::create(['registro_id' => $registro->id, 'ingreso_id' => $ingresos3->id, 'situacion' => 'ASIGNADO', 'fecha_distribucion' => date('Y-m-d')]);
            }
        }
    }
}); */

Route::get('displayImage/{asignacion}/{filename}', [FileController::class, 'displayImage']);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


 
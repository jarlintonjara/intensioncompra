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

Route::get('asignacion', function () {

   /*  $noAsignados = RegistroModel::where('estado', 1)
    ->whereIn('situacion', ['ASIGNADO', 'RESERVADO', 'EMPLAZADO', 'FACTURADO'])
    ->whereNotIn('id', AsignacionModel::join('registros', 'asignaciones.registro_id', 'registros.id')
    ->whereIn('asignaciones.situacion', ['ASIGNADO', 'RESERVADO', 'EMPLAZADO', 'FACTURADO'])
    ->where('registros.estado', 1)->pluck('registros.id'))
    ->get();
    return response()->json($noAsignados); */

    $asignaciones = AsignacionModel::join('packing_list', 'packing_list.id', 'asignaciones.ingreso_id')
    ->Join('registros', 'asignaciones.registro_id', 'registros.id')
    ->where('registros.estado', 1)
    ->where('asignaciones.situacion', 'EMPLAZADO')->orderBy('asignaciones.fecha_emplazado', 'asc')->get();
    $fecha = date('Y-m-d');
    //return count($asignaciones);
    foreach ($asignaciones as $row) {
        
        $nuevafecha = strtotime( '+2 day', strtotime($row->fecha_emplazado));
        $nuevafecha = date('Y-m-d', $nuevafecha);

        if($fecha >= $nuevafecha ){
            $asignacion = AsignacionModel::where('id', $row->id)->first();
            echo $row;
            $registro = RegistroModel::where('id', $asignacion->registro_id)->first();

            $packing = IngresoModel::where('id', $asignacion->ingreso_id)->first();
            if ($packing) {
                $packing->situacion = 'LIBRE';
                $packing->save();
            }
            
            
            if ($registro) {
                /* echo $registro;
                $registro->situacion = 'SINASIGNAR';
                $registro->fecha = date('Y-m-d');
                $registro->save(); */

                $asignacion->situacion = 'SINASIGNAR';
                $asignacion->save();
            }
        }
        break;
    } 
});

Route::get('displayImage/{asignacion}/{filename}', [FileController::class, 'displayImage']);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


 
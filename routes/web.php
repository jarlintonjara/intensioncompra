<?php

use App\Http\Controllers\FileController;
use App\Models\AsignacionModel;
use App\Models\EmplazadoModel;
use App\Models\FacturadoModel;
use App\Models\RegistroModel;
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
    $asignaciones = AsignacionModel::select(
        'packing_list.vin',
        'packing_list.fecha_ingreso',
        'asignaciones.id',
        'asignaciones.fecha_facturado',
        'asignaciones.fecha_sap_facturado',
        'asignaciones.codigo_sap_cliente',
        'asignaciones.ingreso_id',
        'asignaciones.situacion'
    )
        ->Join('packing_list', 'asignaciones.ingreso_id', 'packing_list.id')
        ->where('asignaciones.situacion', 'EMPLAZADO')->get();

       

    foreach ($asignaciones as $asignacion) {
        $row = AsignacionModel::find($asignacion->id);
        $facturado = FacturadoModel::where('vin', $asignacion->vin)->first();
        $registro = RegistroModel::find($row->registro_id);

        if ($facturado && $registro) {
            $registro->situacion = 'FACTURADO';
            $registro->save();

            $row->situacion = 'FACTURADO';
            $row->fecha_facturado = date('Y-m-d');
            $row->fecha_sap_facturado = $facturado->fecha_facturacion;
            $row->codigo_sap_cliente = $facturado->codigo_sap_cliente;
            $row->save();

            $facturado->situacion = 'FACTURADO';
            $facturado->save();
        }
    }
});

Route::get('displayImage/{asignacion}/{filename}', [FileController::class, 'displayImage']);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


 
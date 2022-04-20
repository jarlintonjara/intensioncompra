<?php

use App\Mail\SchedulesForTomorrow;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use \Illuminate\Support\Facades\Mail;
use App\Http\Controllers\UserExportController;
use App\Models\RegistroModel;
use App\Models\IngresoModel;
use App\Models\AsignacionModel;
use App\Models\EmplazadoModel;
use App\Models\FacturadoModel;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\pruebaController;
use App\Http\Controllers\prueba2Controller;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Routing\Router;

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
Route::get('/test', function () {
    $registros = AsignacionModel::select(
        'packing_list.vin',
        'packing_list.marca',
        'packing_list.modelo',
        'packing_list.version',
        'packing_list.color',
        'packing_list.anio_modelo',
        'packing_list.codigo_sap',
        'packing_list.fecha_ingreso',
        'asignaciones.id',
        'asignaciones.fecha_distribucion',
        'asignaciones.codigo_reserva',
        'asignaciones.monto_reserva',
        'asignaciones.fecha_reserva',
        'asignaciones.situacion'
    )
        ->Join('packing_list', 'asignaciones.ingreso_id', 'packing_list.id')
        ->where('asignaciones.situacion', 'EMPLAZADO')->get();
    
    foreach ($registros as $registro) {
        print_r($registro);
        $row = FacturadoModel::where('vin', $registro->vin)->first();
        if ($row) {
            print_r($row);
            $registro->situacion = 'FACTURADO';
       
            $registro->codigo_sap_cliente = $row->codigo_sap_cliente;
            $registro->save();

            $row->situacion = 'FACTURADO';
            $row->save();
        }
    }
});


Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


  
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


 
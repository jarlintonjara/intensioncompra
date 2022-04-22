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
use Illuminate\Support\Facades\DB;
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

    $registros = RegistroModel::select('id', 'marca', 'modelo', 'version', 'anio_modelo', 'color1', 'situacion', 'fecha')
    ->where('situacion', 'SINASIGNAR')->where('estado', '1')->orderBy('fecha', 'asc')
    ->get();
    return $registros;
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


 
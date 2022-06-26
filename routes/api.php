<?php

use App\Exports\ScheduleExport;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RegistroController;
use App\Http\Controllers\IngresoController;
use App\Http\Controllers\AsignacionController;
use App\Http\Controllers\CaracteristicaController;
use App\Http\Controllers\ConcesinarioController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\TiendaController;
use App\Http\Controllers\UtilsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout']);
Route::get('getSession/{token}', [AuthController::class, 'getSession']);

Route::get('dashboard', [HomeController::class, 'index']);
Route::resource('usuario', UserController::class);

Route::resource('registro', RegistroController::class);
Route::get('asignados', [RegistroController::class, 'asignados']);
Route::resource('ingreso', IngresoController::class);

Route::group(['middleware' => 'validateToken'],function () {
    Route::post('ingreso/bloquear', [IngresoController::class, 'bloquear']);
    Route::post('ingreso/desbloquear', [IngresoController::class, 'desbloquear']);
    Route::post('asignacion/cancelarAsignacion', [AsignacionController::class, 'cancelarAsignacion']);
    
});

Route::resource('asignacion', AsignacionController::class);
Route::get('reservado', [AsignacionController::class, 'reservado']);
Route::get('facturado', [AsignacionController::class, 'facturado']);
Route::get('emplazado', [AsignacionController::class, 'emplazado']);

//Mantenimiento
Route::resource('tienda', TiendaController::class);
Route::resource('caracteristica', CaracteristicaController::class);
Route::resource('concesionario', ConcesinarioController::class);

//Utils
Route::post('exportExcel', [UtilsController::class, 'exportExcel']);
Route::get('exportExcel', [UtilsController::class, 'exportExcel']);
Route::get('home', [HomeController::class, 'index']);

//Files
Route::resource('gallery', FileController::class);
Route::get('getimages/{id}', [FileController::class, 'getImages']);
Route::post('image/delete', [FileController::class, 'destroy']);

Route::post('importPacking', [IngresoController::class, 'import']);
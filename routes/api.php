<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RegistroController;
use App\Http\Controllers\IngresoController;
use App\Http\Controllers\AsignacionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SettingController;
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
Route::resource('ingreso', IngresoController::class);
Route::resource('asignacion', AsignacionController::class);

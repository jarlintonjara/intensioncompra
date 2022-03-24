<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\EstacionamientoController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProgramacionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ScheduleExportController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SettingController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    //print_r($request->user()->role()->nombre);
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/athenticated', function () {
    return true;
});

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [LoginController::class, 'login']);
Route::post('logout', [LoginController::class, 'logout']);

//Route::resource('estacionamiento', EstacionamientoController::class)->only(['index']);
Route::get('dashboard', [HomeController::class, 'index']);
Route::get('sendEmail', [HomeController::class, 'index']);
Route::resource('programacion', ProgramacionController::class);
Route::resource('estacionamiento', EstacionamientoController::class);
Route::resource('usuario', UserController::class);
Route::match(['put', 'patch'], 'updateProfile/{usuario}', [UserController::class, 'updateProfile']);
Route::resource('rol', RoleController::class);

Route::resource('setting', SettingController::class);

// Route::get('export', [UserExportController::class, 'export']);
Route::get('export/', [ScheduleExportController::class, 'export']);
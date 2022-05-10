<?php

use App\Http\Controllers\FileController;
use App\Models\AsignacionModel;
use App\Models\EmplazadoModel;
use App\Models\FacturadoModel;
use App\Models\IngresoModel;
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
/*     return RegistroModel::select('id', 'documento', 'marca', 'modelo', 'version', 'anio_modelo', 'color1', 'situacion', 'fecha')
    ->where('situacion', 'SINASIGNAR')->where('estado', '1')->where('version', 'GRAND VAN TURISMO 1.5L 11 PASAJEROS')->orderBy('fecha', 'asc')
        ->get(); */
});

Route::get('displayImage/{asignacion}/{filename}', [FileController::class, 'displayImage']);


Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


 
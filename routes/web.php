<?php

use App\Http\Controllers\FileController;
use App\Http\Controllers\HomeController;
use App\Models\AsignacionModel;
use App\Models\EmplazadoModel;
use App\Models\FacturadoModel;
use App\Models\IngresoModel;
use App\Models\RegistroModel;
use Illuminate\Support\Facades\DB;
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
    $data = IngresoModel::whereNull('vin_e')->get();
    foreach ($data as $e) {
        $vin = Hash::make($e["vin"]);
        $row = substr($vin, 0, 30);
        $e->vin_e = $row;
        $e->save();
    }
});

Route::get('displayImage/{asignacion}/{filename}', [FileController::class, 'displayImage']);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


 
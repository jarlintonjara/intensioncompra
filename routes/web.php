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
    
    $array = [
        'dercocenter.2022',
        'autobacs$',
        'autoland$',
        'pakatnamu$',
        'cristoblanco$',
        'motormass$',
        'granprix$',
        'bmotors$',
        'cam$',
        'sanpedro$',
        'corsa$',
        'erimassa$',
        'gacsa$',
        'klm$',
        'maqgama$',
        'motorgas$',
        'motorshow$',
        'peñaranda$',
        'resersur$',
        'pacifico$'
    ];
    //$data = RegistroModel::where('estado',1)->get();
    foreach($array as $row){
        echo Hash::make($row)."<br>";
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


 
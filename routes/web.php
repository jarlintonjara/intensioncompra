<?php

use App\Mail\SchedulesForTomorrow;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use \Illuminate\Support\Facades\Mail;
use App\Http\Controllers\UserExportController;
use App\Models\RegistroModel;
use App\Models\IngresoModel;
use App\Models\AsignacionModel;
use App\Models\ConcesionarioModel;
use App\Models\TiendaModel;
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
    $data = IngresoModel::all();
    foreach( $data as $row){
        $con = DB::table('packing_list_copy1')->where('vin', $row->vin)->first();
        if($con ){
            $row->bloqueado = 1;
            $row->user_bloqueo = $con->user_bloqueo;
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


 
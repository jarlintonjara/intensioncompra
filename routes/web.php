<?php

use App\Mail\SchedulesForTomorrow;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use \Illuminate\Support\Facades\Mail;
use App\Http\Controllers\UserExportController;

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

/* Route::get('/', function () {
    return view('app');
});*/

//Auth::routes(); 
Route::get('sendEmail', function () {
    $correo = new SchedulesForTomorrow;
    print_r($correo);
    Mail::to('fredy.acp25@gmail.com ')->send($correo);
    return "Mensaje enviado";
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
 
// Route::controller(UserExportController::class)->group(function(){
//     Route::get('users', 'index');
//     Route::get('users-export', 'export')->name('users.export');
//     Route::post('users-import', 'import')->name('users.import');
// });

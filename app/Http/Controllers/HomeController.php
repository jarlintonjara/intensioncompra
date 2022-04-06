<?php

namespace App\Http\Controllers;

use App\Mail\SchedulesForTomorrow;
use App\Models\EstacionamientoModel;
use App\Models\ProgramacionModel;
use App\Models\User;
use Illuminate\Http\Request;
use \Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{

    public function __construct()
    {
        //$this->middleware('auth');
    }

    public function index()
    {
        
       
    }

    function sendEmail(){

        Mail::send('mail.schedulesTomorrow', [], function ($message) {
            $message->to('admin@gmail.com')->subject('Prueba !');
        }); 
        return response()->json(["message" => "exitoso"]);
    }
}

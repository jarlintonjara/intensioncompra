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
        /* $validator = \Validator::make(
            $request->all(),
            [
                'name' => 'required|max:255',
                'email' => 'required|email|max:255',
                'subject' => 'required',
                'bodymessage' => 'required'
            ]
        );

        if ($validator->fails()) {
            return redirect('contact')->withInput()->withErrors($validator);
        } */


        /*   $name = $request->name;
        $email = $request->email;
        $title = $request->subject;
        $content = $request->bodymessage; */

        //Mail::to("fredy.acp25@gmail.com")->send(new SchedulesForTomorrow);

        Mail::send('mail.schedulesTomorrow', [], function ($message) {
            $message->to('fredy.acp25@gmail.com')->subject('Prueba !');
        }); 
        return response()->json(["message" => "exitoso"]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\EstacionamientoModel;
use App\Models\ProgramacionModel;
use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $schedules = ProgramacionModel::all();
        $users = User::all()->count();
        $parkings = EstacionamientoModel::all()->count();

        date_default_timezone_set("America/Lima");
        $fecha = date('Y-m-d');
        $nuevafecha = strtotime ( '+1 day' , strtotime ( $fecha ) ) ;
        $nuevafecha = date ( 'Y-m-d' , $nuevafecha );

        $programacionManana = ProgramacionModel::whereDate("fecha",$nuevafecha)->get()->count();
        $programacionMananalist = ProgramacionModel::whereDate("fecha",$nuevafecha)->get();

        foreach ($schedules as $schedule) {
            $schedule["user"] = $schedule->user;
            $schedule["parking"] = $schedule->parking;
        }

        foreach ($programacionMananalist as $pml) {
            $pml["user"] = $pml->user;
            $pml["parking"] = $pml->parking;
        }

        return response()->json([
            "parkingsTotal" => $parkings,
            "usersTotal" => $users,
            "schedulesTotal" => count($schedules),
            "schedules" => $schedules,
            "programacionManana" => $programacionManana,
            "programacionMananalist" => $programacionMananalist
        ]);
    }
}

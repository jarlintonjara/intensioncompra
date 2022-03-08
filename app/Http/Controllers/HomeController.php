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
        $nuevafechad = strtotime ( '+1 day' , strtotime ( $fecha ) ) ;
        $nuevafechad = date ( 'Y-m-d' , $nuevafechad );

        $programacionManana = ProgramacionModel::whereDate("fecha",$nuevafecha)->get()->count();

        $programacionma = ProgramacionModel::whereDate("fecha",$nuevafecha)->get();

        $programacionhoy = ProgramacionModel::whereDate("fecha",$fecha)->get();
        $ids2= [];
        foreach ($programacionhoy as $pml) {
             
            array_push($ids2,$pml->id);

            $pml["user"] = $pml->user;
            $pml["parking"] = $pml->parking;
        }
        $estacioneshoy = User::select('estacionamiento.id','estacionamiento.numero','users.nombre','estacionamiento.sede','estacionamiento.ubicacion')
                ->join('estacionamiento', 'users.parking_id', '=', 'estacionamiento.id')
                ->whereNotIn('estacionamiento.id', $ids2)
                ->get();

        
        $ids = [];
        foreach ($programacionma as $pml) {
             
            array_push($ids,$pml->id);

            $pml["user"] = $pml->user;
            $pml["parking"] = $pml->parking;
        }
        $estacionesma = User::select('estacionamiento.id','estacionamiento.numero','users.nombre','estacionamiento.sede','estacionamiento.ubicacion')
        ->join('estacionamiento', 'users.parking_id', '=', 'estacionamiento.id')
        ->whereNotIn('estacionamiento.id', $ids)
        ->get();

        

        //$estacioneslibres = EstacionamientoModel::whereNotIn('id', $ids)->get();

        foreach ($schedules as $schedule) {
            $schedule["user"] = $schedule->user;
            $schedule["parking"] = $schedule->parking;
        }

        foreach ($schedules as $schedule) {
            $schedule["user"] = $schedule->user;
            $schedule["parking"] = $schedule->parking;
        }

        return response()->json([
            "parkingsTotal" => $parkings,
            "usersTotal" => $users,
            "schedulesTotal" => count($schedules),
            "schedules" => $schedules,
            "programacionManana" => $programacionManana,
            
            "programacionma" => $programacionma,
            "estacionesma" => $estacionesma,
            "programacionhoy" => $programacionhoy,
            "estacioneshoy" => $estacioneshoy
        ]);
    }
}

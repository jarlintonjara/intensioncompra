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
        foreach ($schedules as $schedule) {
            $schedule["user"] = $schedule->user;
            $schedule["parking"] = $schedule->parking;
        }
        return response()->json([
            "parkingsTotal" => $parkings,
            "usersTotal" => $users,
            "schedulesTotal" => count($schedules),
            "schedules" => $schedules,
        ]);
    }
}

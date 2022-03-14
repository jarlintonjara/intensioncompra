<?php

namespace App\Http\Controllers;

use App\Models\EstacionamientoModel;
use App\Models\ProgramacionModel;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ProgramacionController extends Controller
{
    protected const DAYS = [
        '',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
        'Domingo'
    ];

    protected const MONTHS = [
        '',
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Setiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

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
        $users = User::all();
        $parkings = EstacionamientoModel::all();
        $schedules = ProgramacionModel::select('*')
            ->get()
            ->groupBy(function ($date) {
                return Carbon::parse($date->fecha)->format('W');
            });
        $week = Carbon::now()->weekOfYear;
        $schedulesFilter = isset($schedules[$week])? $schedules[$week] : [] ;
        
        foreach ($schedulesFilter as $schedule) {
            $newDate = Carbon::parse($schedule->fecha);
            $schedule["dia"] = self::DAYS[$newDate->dayOfWeekIso]." ". $newDate->day." de ". self::MONTHS[$newDate->month];
            $schedule["user"] = $schedule->user;
            $schedule["parking"] = $schedule->parking;
        }
        return response()->json([
            "parkings" => $parkings,
            "users" => $users,
            "schedules" => $schedulesFilter
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //$estacionamiento = ProgramacionModel::create($request->post());
        $schedule = ProgramacionModel::create($request->post());
        $weekSchedule = Carbon::parse($schedule->fecha)->format('W');
        if ($weekSchedule == Carbon::now()->weekOfYear) {
            $schedule["user"] = $schedule->user;
            $schedule["parking"] = $schedule->parking;
        }else{
             $schedule = null;
        }
        return response()->json($schedule);
    }

    public function show(ProgramacionModel $estacionamiento)
    {
        return response()->json($estacionamiento);
    }

    public function edit(ProgramacionModel $estacionamiento)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $updateSchedule = ProgramacionModel::findOrFail($id);
        $updateSchedule->update($request->all());
        $schedules = ProgramacionModel::select('*')
            ->get()
            ->groupBy(function ($date) {
                return Carbon::parse($date->fecha)->format('W');
            });
        $week = Carbon::now()->weekOfYear;
        $schedulesFilter = isset($schedules[$week]) ? $schedules[$week] : [];
        foreach ($schedulesFilter as $schedule) {
            $schedule["user"] = $schedule->user;
            $schedule["parking"] = $schedule->parking;
        }
        return response()->json($schedulesFilter);
    }

    public function destroy($id)
    {
        $estacionamiento = ProgramacionModel::findOrFail($id);
        $estacionamiento->delete();
        $data = ProgramacionModel::all();
        return response()->json($data);
    }
}

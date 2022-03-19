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

        //Programaciones de la semana actual
        $week = Carbon::now()->weekOfYear;
        $schedulesFilter = isset($schedules[$week])? $schedules[$week] : [] ;
        
        foreach ($schedulesFilter as $schedule) {
            $newDate = Carbon::parse($schedule->fecha);
            $schedule["dia"] = self::DAYS[$newDate->dayOfWeekIso]." ". $newDate->day." de ". self::MONTHS[$newDate->month];
            $schedule["user"] = $schedule->user;
            $schedule["parking"] = $schedule->parking;
        }
        //Programaciones de la semana siguiente
        $week = Carbon::now()->weekOfYear + 1;
        $nextSchedules = isset($schedules[$week]) ? $schedules[$week] : [];

        foreach ($nextSchedules as $schedule) {
            $newDate = Carbon::parse($schedule->fecha);
            $schedule["dia"] = self::DAYS[$newDate->dayOfWeekIso] . " " . $newDate->day . " de " . self::MONTHS[$newDate->month];
            $schedule["user"] = $schedule->user;
            $schedule["parking"] = $schedule->parking;
        }
        return response()->json([
            "parkings" => $parkings,
            "users" => $users,
            "schedules" => $schedulesFilter,
            "nextSchedules" => $nextSchedules,
            "schedulesW" => $schedules
        ]);
    }

    public function create()
    {
        //
    }
    public function validateSchedule($request)
    {
        $register = ProgramacionModel::where("user_id", $request->user_id)
            ->whereDate("fecha", $request->fecha)->first();
        if ($register) {
            switch ($register->turno) {
                case "D":
                    $message = "El usuario ya tiene una programación todo el día";
                    break;
                case "M":
                    $message = "El usuario ya tiene una programación en la mañana";
                    break;
                case "T":
                    $message = "El usuario ya tiene una programación en la tarde";
                    break;
                default:
                    $message = "El usuario ya tiene una programación";
            }
            return response()->json([
                "message" => $message,
                "isSuccess" => false
            ]);
        }
    }
    public function store(Request $request)
    {
        //Validacion por fecha y estacionamiento
        $register = ProgramacionModel::where("estacionamiento_id", $request->estacionamiento_id)
            ->whereDate("fecha", $request->fecha)
            ->first();
        if ($register) {
            if( ($request->turno == "M" || $request->turno == "D" ) && $register->turno == "M"){
                return response()->json([
                    "message" => "Estacionamiento ocupado",
                    "isSuccess" => false
                ]);
            } else if( ($request->turno == "T" || $request->turno == "D" ) && $register->turno == "T"){
                return response()->json([
                    "message" => "Estacionamiento ocupado",
                    "isSuccess" => false
                ]);
            } else if ($register->turno == "D") {
                return response()->json([
                    "message" => "Estacionamiento ocupado",
                    "isSuccess" => false
                ]);
            }
        }

        //validacion por usuario y fecha
        $register2 = ProgramacionModel::where("user_id", $request->user_id)
        ->whereDate("fecha", $request->fecha)
            ->first();
        if ($register2) {
            if (($request->turno == "M" || $request->turno == "D") && $register2->turno == "M") {
                return response()->json([
                    "message" => "Estacionamiento ocupado",
                    "isSuccess" => false
                ]);
            } else if (($request->turno == "T" || $request->turno == "D") && $register2->turno == "T") {
                return response()->json([
                    "message" => "Estacionamiento ocupado",
                    "isSuccess" => false
                ]);
            } else if ($register2->turno == "D") {
                return response()->json([
                    "message" => "Estacionamiento ocupado",
                    "isSuccess" => false
                ]);
            }
        }
        $schedule = ProgramacionModel::create($request->post());
        $schedules = ProgramacionModel::select('*')
            ->get()
            ->groupBy(function ($date) {
                return Carbon::parse($date->fecha)->format('W');
            });
        //Programaciones de la semana actual
        $week = Carbon::now()->weekOfYear;
        $schedulesFilter = isset($schedules[$week]) ? $schedules[$week] : [];

        foreach ($schedulesFilter as $schedule) {
            $newDate = Carbon::parse($schedule->fecha);
            $schedule["dia"] = self::DAYS[$newDate->dayOfWeekIso] . " " . $newDate->day . " de " . self::MONTHS[$newDate->month];
            $schedule["user"] = $schedule->user;
            $schedule["parking"] = $schedule->parking;
        }
        //Programaciones de la semana siguiente
        $week = Carbon::now()->weekOfYear + 1;
        $nextSchedules = isset($schedules[$week]) ? $schedules[$week] : [];

        foreach ($nextSchedules as $schedule) {
            $newDate = Carbon::parse($schedule->fecha);
            $schedule["dia"] = self::DAYS[$newDate->dayOfWeekIso] . " " . $newDate->day . " de " . self::MONTHS[$newDate->month];
            $schedule["user"] = $schedule->user;
            $schedule["parking"] = $schedule->parking;
        }
        return response()->json([
            "isSuccess" => true,
            "schedules" => $schedulesFilter,
            "nextSchedules" => $nextSchedules,
            "register" => $register
        ]);
    }

    public function update(Request $request, $id)
    {
        $register = ProgramacionModel::where("user_id", $request->user_id)
            ->where("id", "!=", $id)
            ->where("estacionamiento_id", $request->estacionamiento_id)
            ->whereDate("fecha", $request->fecha)->first();

        if ($register) {
            switch ($register->turno) {
                case "D":
                    $message = "Estacionamiento ocupado";
                    break;
                case "M":
                    $message = "Estacionamiento ocupado";
                    break;
                case "T":
                    $message = "Estacionamiento ocupado";
                    break;
                default:
                    $message = "Estacionamiento ocupado";
            }
            return response()->json([
                "message" => $message,
                "isSuccess" => false,
                "regis" => $register
            ]);
        }
        $updateSchedule = ProgramacionModel::findOrFail($id);
        $updateSchedule->update($request->all());
        $schedules = ProgramacionModel::select('*')
            ->get()
            ->groupBy(function ($date) {
                return Carbon::parse($date->fecha)->format('W');
            });
        //Programaciones de la semana actual
        $week = Carbon::now()->weekOfYear;
        $schedulesFilter = isset($schedules[$week]) ? $schedules[$week] : [];

        foreach ($schedulesFilter as $schedule) {
            $newDate = Carbon::parse($schedule->fecha);
            $schedule["dia"] = self::DAYS[$newDate->dayOfWeekIso] . " " . $newDate->day . " de " . self::MONTHS[$newDate->month];
            $schedule["user"] = $schedule->user;
            $schedule["parking"] = $schedule->parking;
        }
        //Programaciones de la semana siguiente
        $week = Carbon::now()->weekOfYear + 1;
        $nextSchedules = isset($schedules[$week]) ? $schedules[$week] : [];

        foreach ($nextSchedules as $schedule) {
            $newDate = Carbon::parse($schedule->fecha);
            $schedule["dia"] = self::DAYS[$newDate->dayOfWeekIso] . " " . $newDate->day . " de " . self::MONTHS[$newDate->month];
            $schedule["user"] = $schedule->user;
            $schedule["parking"] = $schedule->parking;
        }
        return response()->json([
            "isSuccess" => true,
            "schedules" => $schedulesFilter,
            "nextSchedules" => $nextSchedules
        ]);
    }

    public function destroy($id)
    {
        $estacionamiento = ProgramacionModel::findOrFail($id);
        $estacionamiento->delete();
        return response()->json($estacionamiento);
    }
}

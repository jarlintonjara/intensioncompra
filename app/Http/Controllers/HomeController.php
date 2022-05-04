<?php

namespace App\Http\Controllers;

use App\Mail\SchedulesForTomorrow;
use App\Models\AsignacionModel;
use App\Models\EstacionamientoModel;
use App\Models\ProgramacionModel;
use App\Models\RegistroModel;
use App\Models\User;
use Illuminate\Http\Request;
use \Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }

    public function index(Request $request)
    {
        $auth = new AuthController();
        $user = $auth->getUser($request->bearerToken());
        $query = RegistroModel::where('estado', 1);
        $query2 = AsignacionModel::select(
            'registros.user_id',
            'asignaciones.registro_id',
            'asignaciones.situacion',
            'registros.id',
            'registros.tienda_id',
            'registros.concesionario_id',
            'packing_list.marca'
        )
        ->Join('packing_list', 'packing_list.id', 'asignaciones.ingreso_id')
        ->Join('registros', 'asignaciones.registro_id', 'registros.id')
        ->where('asignaciones.situacion','ASIGNADO');
        $query3 = AsignacionModel::select(
            'registros.user_id',
            'asignaciones.situacion',
            'registros.tienda_id',
            'registros.concesionario_id',
            'packing_list.marca'
        )
        ->Join('packing_list', 'packing_list.id', 'asignaciones.ingreso_id')
        ->Join('registros', 'asignaciones.registro_id', 'registros.id')
        ->where('asignaciones.situacion','EMPLAZADO');
        $query4 = AsignacionModel::select(
            'registros.user_id',
            'asignaciones.situacion',
            'registros.tienda_id',
            'registros.concesionario_id',
            'packing_list.marca'
        )
        ->Join('packing_list', 'packing_list.id', 'asignaciones.ingreso_id')
        ->Join('registros', 'asignaciones.registro_id', 'registros.id')
        ->where('asignaciones.situacion','RESERVADO');
        $query5 = AsignacionModel::select(
            'registros.user_id',
            'asignaciones.situacion',
            'registros.tienda_id',
            'registros.concesionario_id',
            'packing_list.marca'
        )
        ->Join('packing_list', 'packing_list.id', 'asignaciones.ingreso_id')
        ->Join('registros', 'asignaciones.registro_id', 'registros.id')
        ->where('asignaciones.situacion','FACTURADO');
        switch ($user->role_id) {
            case 1:
                $totalRegistros = $query->where('registros.user_id', $user->id)->count();
                $totalAsignados = $query2->where('registros.user_id', $user->id)->count();
                $totalEmplazados = $query3->where('registros.user_id', $user->id)->count();
                $totalReservados = $query4->where('registros.user_id', $user->id)->count();
                $totalFacturados = $query5->where('registros.user_id', $user->id)->count();
                break;
            case 2:
                $totalRegistros = $query->where('registros.tienda_id', $user->tienda_id)->count();
                $totalAsignados = $query2->where('registros.tienda_id', $user->tienda_id)->count();
                $totalEmplazados = $query3->where('registros.tienda_id', $user->tienda_id)->count();
                $totalReservados = $query4->where('registros.tienda_id', $user->tienda_id)->count();
                $totalFacturados = $query5->where('registros.tienda_id', $user->tienda_id)->count();
                break;
            case 3:
                $totalRegistros = $query->where('registros.concesionario_id', $user->concesionario_id)->count();
                $totalAsignados = $query2->where('registros.concesionario_id', $user->concesionario_id)->count();
                $totalEmplazados = $query3->where('registros.concesionario_id', $user->concesionario_id)->count();
                $totalReservados = $query4->where('registros.concesionario_id', $user->concesionario_id)->count();
                $totalFacturados = $query5->where('registros.concesionario_id', $user->concesionario_id)->count();
                break;
            case 4:
            case 5:
                $totalRegistros = $query->where('registros.marca', $user->marca)->count();
                $totalAsignados = $query2->where('packing_list.marca', $user->marca)->count();
                $totalEmplazados = $query3->where('packing_list.marca', $user->marca)->count();
                $totalReservados = $query4->where('packing_list.marca', $user->marca)->count();
                $totalFacturados = $query5->where('packing_list.marca', $user->marca)->count();
                break;
            case 6:
                 $totalRegistros = $query->count();
                 $totalAsignados = $query2->count();
                 $totalEmplazados = $query3->count();
                 $totalReservados = $query4->count();
                 $totalFacturados = $query5->count();
                break;   
            default:
                $totalRegistros = $query->count();
                $totalAsignados = $query2->count();
                $totalEmplazados = $query3->count();
                $totalReservados = $query4->count();
                $totalFacturados = $query5->count();
                
        }

        return response()->json([
            "totalRegistros" => $totalRegistros,
            "totalAsigandos" => $totalAsignados,
            "totalEmplazados" => $totalEmplazados,
            "totalReservados" => $totalReservados,
            "totalFacturados" => $totalFacturados
        ]);
    }
    function sendEmail(){

        Mail::send('mail.schedulesTomorrow', [], function ($message) {
            $message->to('admin@gmail.com')->subject('Prueba !');
        }); 
        return response()->json(["message" => "exitoso"]);
    }
    //
}

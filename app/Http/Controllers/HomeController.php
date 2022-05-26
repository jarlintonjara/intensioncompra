<?php

namespace App\Http\Controllers;

use App\Mail\SchedulesForTomorrow;
use App\Models\AsignacionModel;
use App\Models\EstacionamientoModel;
use App\Models\ProgramacionModel;
use App\Models\RegistroModel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
        $query1 = RegistroModel::join('concesionarios', 'concesionarios.id', 'registros.concesionario_id')
            ->join('tiendas', 'tiendas.id', 'registros.tienda_id')
            ->join('users', 'users.id', 'registros.user_id')
            ->where('registros.situacion', 'SINASIGNAR')
            ->where('registros.estado', 1);
        $query2 = AsignacionModel::join('packing_list', 'packing_list.id', 'asignaciones.ingreso_id')
        ->Join('registros', 'asignaciones.registro_id', 'registros.id')
        ->where('asignaciones.situacion','ASIGNADO')
        ->where('registros.estado', 1);

        $query3 = AsignacionModel::join('packing_list', 'packing_list.id', 'asignaciones.ingreso_id')
        ->Join('registros', 'asignaciones.registro_id', 'registros.id')
        ->where('registros.estado', 1)
        ->where('asignaciones.situacion','EMPLAZADO');
        $query4 = AsignacionModel::join('packing_list', 'packing_list.id', 'asignaciones.ingreso_id')
        ->join('registros', 'asignaciones.registro_id', 'registros.id')
        ->where('registros.estado', 1)
        ->where('asignaciones.situacion','RESERVADO');
        $query5 = AsignacionModel::join('packing_list', 'packing_list.id', 'asignaciones.ingreso_id')
        ->Join('registros', 'asignaciones.registro_id', 'registros.id')
        ->where('registros.estado', 1)
        ->where('asignaciones.situacion','FACTURADO');
        switch ($user->role_id) {
            case 1:
                $totalRegistros = $query->where('registros.user_id', $user->id)->count();
                $totalNoAsignados = $query1->where('registros.user_id', $user->id)->count();
                $totalAsignados = $query2->where('registros.user_id', $user->id)->count();
                $totalEmplazados = $query3->where('registros.user_id', $user->id)->count();
                $totalReservados = $query4->where('registros.user_id', $user->id)->count();
                $totalFacturados = $query5->where('registros.user_id', $user->id)->count();
                break;
            case 2:
                $totalRegistros = $query->where('registros.tienda_id', $user->tienda_id)->count();
                $totalNoAsignados = $query1->where('registros.tienda_id', $user->tienda_id)->count();
                $totalAsignados = $query2->where('registros.tienda_id', $user->tienda_id)->count();
                $totalEmplazados = $query3->where('registros.tienda_id', $user->tienda_id)->count();
                $totalReservados = $query4->where('registros.tienda_id', $user->tienda_id)->count();
                $totalFacturados = $query5->where('registros.tienda_id', $user->tienda_id)->count();
                break;
            case 3:
                $totalRegistros = $query->where('registros.concesionario_id', $user->concesionario_id)->count();
                $totalNoAsignados = $query1->where('registros.concesionario_id', $user->concesionario_id)->count();
                $totalAsignados = $query2->where('registros.concesionario_id', $user->concesionario_id)->count();
                $totalEmplazados = $query3->where('registros.concesionario_id', $user->concesionario_id)->count();
                $totalReservados = $query4->where('registros.concesionario_id', $user->concesionario_id)->count();
                $totalFacturados = $query5->where('registros.concesionario_id', $user->concesionario_id)->count();
                break;
            case 4:
            case 5:
                $totalRegistros = $query->where('registros.marca', $user->marca)->count();
                $totalNoAsignados = $query1->where('packing_list.marca', $user->marca)->count();
                $totalAsignados = $query2->where('packing_list.marca', $user->marca)->count();
                $totalEmplazados = $query3->where('packing_list.marca', $user->marca)->count();
                $totalReservados = $query4->where('packing_list.marca', $user->marca)->count();
                $totalFacturados = $query5->where('packing_list.marca', $user->marca)->count();
                break;
            case 6:
                $totalRegistros = $query->count();
                $totalNoAsignados = $query1->count();
                $totalAsignados = $query2->count();
                $totalEmplazados = $query3->count();
                $totalReservados = $query4->count();
                $totalFacturados = $query5->count();
                break;   
            default:
                $totalRegistros = $query->count();
                $totalNoAsignados = $query1->count();
                $totalAsignados = $query2->count();
                $totalEmplazados = $query3->count();
                $totalReservados = $query4->count();
                $totalFacturados = $query5->count();
        }

        $packingDuplicado = AsignacionModel::select(DB::raw('count(*) as total'), 'ingreso_id')
                        ->whereIn('situacion', ['ASIGNADO', 'RESERVADO', 'EMPLAZADO', 'FACTURADO'])
                        ->groupBy('ingreso_id')
                        ->having('total', '>', 1)
                        ->get();

        $noAsignados =RegistroModel::where('estado', 1)
                        -> whereIn('situacion', ['ASIGNADO', 'RESERVADO', 'EMPLAZADO', 'FACTURADO'])
                        -> whereNotIn('id', AsignacionModel::join('registros', 'asignaciones.registro_id', 'registros.id')
                                        ->whereIn('asignaciones.situacion',['ASIGNADO', 'RESERVADO', 'EMPLAZADO', 'FACTURADO'])
                                        ->where('registros.estado', 1)->pluck('registros.id'))
                    ->get();

               
        return response()->json([
            "packingDuplicado" => $packingDuplicado,
            "noAsignados" => $noAsignados,
            "totalRegistros" => $totalRegistros,
            "totalNoAsignados" => $totalNoAsignados,
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

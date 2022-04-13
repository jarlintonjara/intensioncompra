<?php

namespace App\Http\Controllers;

use App\Models\AsignacionModel;
use App\Models\RegistroModel;
use Illuminate\Http\Request;
use App\Models\CaracteristicaModel;
use App\Models\IngresoModel;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class RegistroController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }

    public function index(Request $request)
    {
        $auth = new AuthController();
        $user = $auth->getUser($request->bearerToken());
        $data = CaracteristicaModel::all();
        $noasignado = [];

        $query = RegistroModel::select('registros.created_at', 'registros.nombre_completo','users.email', 'registros.documento', 'registros.celular', 'registros.correo', 'registros.marca', 'registros.modelo', 'registros.version', 'registros.color1', 'registros.color2', 'registros.color3', 'registros.anio_modelo', 'registros.situacion', 'registros.user_id', 'users.nombre', 'users.apellido', 'tiendas.nombre as tienda', 'concesionarios.nombre as concesionario', 'users.id', 'registros.tienda_id', 'registros.concesionario_id')
        ->join('users', 'users.id', 'registros.user_id')
        ->join('tiendas', 'tiendas.id', 'registros.tienda_id')
        ->join('concesionarios', 'concesionarios.id', 'registros.concesionario_id')
        ->where('registros.situacion', 'SINASIGNAR')->where('registros.estado', 1);
        switch ($user->role_id){
            case 1:
                $noasignado = $query->where('registros.user_id', $user->id)->get();
                break;
            case 2:
                $noasignado = $query->where('registros.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                $noasignado = $query->where('registros.concesionario_id', $user->concesionario_id)->get();
                break;
            case 4:
            case 5:
                $noasignado = $query->where('registros.marca', $user->marca)->get();
                break;
            default:
                $noasignado = $query->get();
        }

        return response()->json([
            'caracteristicas'=>$data,
            'noasignados'=> $noasignado, 
            'user' => $user
        ]);
    }

    public function asignados(Request $request)
    {
        $auth = new AuthController();
        $user = $auth->getUser($request->bearerToken());

        $asignado = [];
        $query = RegistroModel::select(
            'registros.created_at',
            'registros.nombre_completo',
            'registros.documento',
            'registros.celular',
            'registros.correo',
            'registros.marca',
            'registros.modelo',
            'registros.version',
            'registros.color1',
            'registros.color2',
            'registros.color3',
            'registros.anio_modelo',
            'registros.situacion',
            'registros.user_id',
            'users.nombre',
            'users.apellido',
            'users.email',
            'tiendas.nombre as tienda',
            'concesionarios.nombre as concesionario',
            'users.id',
            'registros.tienda_id',
            'registros.concesionario_id'
        )
        ->join('users', 'users.id', '=', 'registros.user_id')
        ->join('tiendas', 'tiendas.id', '=', 'registros.tienda_id')
        ->join('concesionarios', 'concesionarios.id', '=', 'registros.concesionario_id')
        ->where('registros.situacion', 'ASIGNADO')->where('registros.estado', 1);
        switch ($user->role_id) {
            case 1:
                $asignado = $query->where('registros.user_id', $user->id)->get();
                break;
            case 2:
                $asignado = $query->where('registros.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                $asignado = $query->where('registros.concesionario_id', $user->concesionario_id)->get();
                break;
            case 4:
            case 5:
                $asignado = $query->where('registros.marca', $user->marca)->get();
                break;
            default:
                $asignado = $query->get();
        }

        return response()->json([
            'asignados' => $asignado,
            'user' => $user
        ]);
    }

    public function jobAsignar()
    {
        $registros = RegistroModel::select('id', 'marca', 'modelo', 'version', 'anio_modelo', 'color1', 'situacion')
        ->where('situacion', 'SINASIGNAR')
        ->get();

        foreach ($registros as $registro) {

            $ingresos = IngresoModel::where('marca', $registro->marca)
                ->where('modelo', $registro->modelo)
                ->where('version', $registro->version)
                ->where('anio_modelo', $registro->anio_modelo)
                ->where('color', $registro->color1)
                ->where('situacion', 'LIBRE')
                ->where('bloqueado', 0)
                ->first();

            if ($ingresos) {
                $ingresos->situacion = 'ASIGNADO';
                $ingresos->save();

                $registro->situacion = 'ASIGNADO';
                $registro->save();

                AsignacionModel::create(['registro_id' => $registro->id, 'ingreso_id' => $ingresos->id, 'situacion' => 'ASIGNADO', 'fecha_distribucion' => now()]);
            }
        }
        // dd($ingresos);

        //segundo
        $registros2 = RegistroModel::select('id', 'marca', 'modelo', 'version', 'anio_modelo', 'color2', 'situacion')
        ->where('situacion', 'SINASIGNAR')
        ->get();

        foreach ($registros2 as $registro2) {

            $ingresos2 = IngresoModel::where('marca', $registro2->marca)
                ->where('modelo', $registro2->modelo)
                ->where('version', $registro2->version)
                ->where('anio_modelo', $registro2->anio_modelo)
                ->where('color', $registro2->color2)
                ->where('situacion', 'LIBRE')
                ->where('bloqueado', 0)
                ->first();

            if ($ingresos2) {
                $ingresos2->situacion = 'ASIGNADO';
                $ingresos2->save();

                $registro2->situacion = 'ASIGNADO';
                $registro2->save();

                AsignacionModel::create(['registro_id' => $registro2->id, 'ingreso_id' => $ingresos2->id, 'situacion' => 'ASIGNADO', 'fecha_distribucion' => now()]);
            }
        }

        //tercero
        $registros3 = RegistroModel::select('id', 'marca', 'modelo', 'version', 'anio_modelo', 'color3', 'situacion')
        ->where('situacion', 'SINASIGNAR')
        ->get();

        foreach ($registros3 as $registro3) {

            $ingresos3 = IngresoModel::where('marca', $registro3->marca)
                ->where('modelo', $registro3->modelo)
                ->where('version', $registro3->version)
                ->where('anio_modelo', $registro3->anio_modelo)
                ->where('color', $registro3->color3)
                ->where('situacion', 'LIBRE')
                ->where('bloqueado', 0)
                ->first();

            if ($ingresos3) {
                $ingresos3->situacion = 'ASIGNADO';
                $ingresos3->save();

                $registro3->situacion = 'ASIGNADO';
                $registro3->save();

                AsignacionModel::create(['registro_id' => $registro3->id, 'ingreso_id' => $ingresos3->id, 'situacion' => 'ASIGNADO', 'fecha_distribucion' => date('Y-m-d')]);
            }
        }
        return response()->json([]);
    }
    
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $registro = RegistroModel::create($request->post());
        return response()->json($registro);
    }

    public function show(RegistroModel $registro)
    {
        return response()->json($registro);
    }

    public function edit(RegistroModel $registro)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $registro = RegistroModel::findOrFail($id);
        $registro->update($request->all());
        return response()->json($registro); 
    }

    public function destroy($id)
    {
        $registro = RegistroModel::findOrFail($id);
        $registro->update(['estado' => 0]);
        return response()->json($registro); 
    }
}
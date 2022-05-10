<?php

namespace App\Http\Controllers;

use App\Models\RegistroModel;
use Illuminate\Http\Request;
use App\Models\CaracteristicaModel;
use Carbon\Carbon;

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
        $data = CaracteristicaModel::where('estado', 1)->get();
        $noasignado = [];

        $query = RegistroModel::select(
            'registros.created_at', 
            'registros.fecha', 
            'registros.nombre_completo',
            'users.email', 
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
            'tiendas.nombre as tienda', 
            'concesionarios.nombre as concesionario', 
            'registros.id', 
            'registros.tienda_id',
            'registros.concesionario_id')
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
    
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $data = $request->post();
        $data['fecha'] = Carbon::now();
        $registro = RegistroModel::create($data);
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
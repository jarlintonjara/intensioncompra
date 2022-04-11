<?php

namespace App\Http\Controllers;

use App\Models\RegistroModel;
use Illuminate\Http\Request;
use App\Models\CaracteristicaModel;
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

        $noasignado = RegistroModel::select('registros.created_at', 'registros.nombre_completo', 'registros.documento', 'registros.celular', 'registros.correo', 'registros.marca', 'registros.modelo', 'registros.version', 'registros.color1', 'registros.color2', 'registros.color3', 'registros.anio_modelo', 'registros.situacion', 'registros.user_id', 'users.nombre', 'users.apellido', 'tiendas.nombre as tienda', 'concesionarios.nombre as concesionario', 'users.id', 'registros.tienda_id', 'registros.concesionario_id')
        ->join('users', 'users.id', '=', 'registros.user_id')
        ->join('tiendas', 'tiendas.id', '=', 'registros.tienda_id')
        ->join('concesionarios', 'concesionarios.id', '=', 'registros.concesionario_id')
        ->where('registros.situacion', 'SINASIGNAR');
        switch ($user->role_id){
            case 1:
                $noasignado = RegistroModel::select('registros.created_at', 'registros.nombre_completo', 'registros.documento', 'registros.celular', 'registros.correo', 'registros.marca', 'registros.modelo', 'registros.version', 'registros.color1', 'registros.color2', 'registros.color3', 'registros.anio_modelo', 'registros.situacion', 'registros.user_id', 'users.nombre', 'users.apellido', 'tiendas.nombre as tienda', 'concesionarios.nombre as concesionario', 'users.id', 'registros.tienda_id', 'registros.concesionario_id')
                ->join('users', 'users.id', '=', 'registros.user_id')
                ->join('tiendas', 'tiendas.id', '=', 'registros.tienda_id')
                ->join('concesionarios', 'concesionarios.id', '=', 'registros.concesionario_id')
                ->where('registros.situacion', 'SINASIGNAR')->where('registros.user_id', $user->id)->get();
                break;
            case 2:
                $noasignado = RegistroModel::select('registros.created_at', 'registros.nombre_completo', 'registros.documento', 'registros.celular', 'registros.correo', 'registros.marca', 'registros.modelo', 'registros.version', 'registros.color1', 'registros.color2', 'registros.color3', 'registros.anio_modelo', 'registros.situacion', 'registros.user_id', 'users.nombre', 'users.apellido', 'tiendas.nombre as tienda', 'concesionarios.nombre as concesionario', 'users.id', 'registros.tienda_id', 'registros.concesionario_id')
                ->join('users', 'users.id', '=', 'registros.user_id')
                ->join('tiendas', 'tiendas.id', '=', 'registros.tienda_id')
                ->join('concesionarios', 'concesionarios.id', '=', 'registros.concesionario_id')
                ->where('registros.situacion', 'SINASIGNAR')->where('registros.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                $noasignado = RegistroModel::select('registros.created_at', 'registros.nombre_completo', 'registros.documento', 'registros.celular', 'registros.correo', 'registros.marca', 'registros.modelo', 'registros.version', 'registros.color1', 'registros.color2', 'registros.color3', 'registros.anio_modelo', 'registros.situacion', 'registros.user_id', 'users.nombre', 'users.apellido', 'tiendas.nombre as tienda', 'concesionarios.nombre as concesionario', 'users.id', 'registros.tienda_id', 'registros.concesionario_id')
                ->join('users', 'users.id', '=', 'registros.user_id')
                ->join('tiendas', 'tiendas.id', '=', 'registros.tienda_id')
                ->join('concesionarios', 'concesionarios.id', '=', 'registros.concesionario_id')
                ->where('registros.situacion', 'SINASIGNAR')->where('registros.concesionario_id', $user->concesionario_id)->get();
                break;
            case 4:
            case 5:
                $noasignado = RegistroModel::select('registros.created_at', 'registros.nombre_completo', 'registros.documento', 'registros.celular', 'registros.correo', 'registros.marca', 'registros.modelo', 'registros.version', 'registros.color1', 'registros.color2', 'registros.color3', 'registros.anio_modelo', 'registros.situacion', 'registros.user_id', 'users.nombre', 'users.apellido', 'tiendas.nombre as tienda', 'concesionarios.nombre as concesionario', 'users.id', 'registros.tienda_id', 'registros.concesionario_id')
                ->join('users', 'users.id', '=', 'registros.user_id')
                ->join('tiendas', 'tiendas.id', '=', 'registros.tienda_id')
                ->join('concesionarios', 'concesionarios.id', '=', 'registros.concesionario_id')
                ->where('registros.situacion', 'SINASIGNAR')->where('registros.marca', $user->marca)->get();
                break;
            case 6:
                $noasignado = RegistroModel::select('registros.created_at', 'registros.nombre_completo', 'registros.documento', 'registros.celular', 'registros.correo', 'registros.marca', 'registros.modelo', 'registros.version', 'registros.color1', 'registros.color2', 'registros.color3', 'registros.anio_modelo', 'registros.situacion', 'registros.user_id', 'users.nombre', 'users.apellido', 'tiendas.nombre as tienda', 'concesionarios.nombre as concesionario', 'users.id', 'registros.tienda_id', 'registros.concesionario_id')
                ->join('users', 'users.id', '=', 'registros.user_id')
                ->join('tiendas', 'tiendas.id', '=', 'registros.tienda_id')
                ->join('concesionarios', 'concesionarios.id', '=', 'registros.concesionario_id')
                ->where('registros.situacion', 'SINASIGNAR')->where('registros.situacion', 'SINASIGNAR')->get();
                break;
        }

        $asignado = [];
        switch ($user->role_id){
            case 1:
                $asignado = RegistroModel::select('registros.created_at', 'registros.nombre_completo', 'registros.documento', 'registros.celular', 'registros.correo', 'registros.marca', 'registros.modelo', 'registros.version', 'registros.color1', 'registros.color2', 'registros.color3', 'registros.anio_modelo', 'registros.situacion', 'registros.user_id', 'users.nombre', 'users.apellido', 'tiendas.nombre as tienda', 'concesionarios.nombre as concesionario', 'users.id', 'registros.tienda_id', 'registros.concesionario_id')
                ->join('users', 'users.id', '=', 'registros.user_id')
                ->join('tiendas', 'tiendas.id', '=', 'registros.tienda_id')
                ->join('concesionarios', 'concesionarios.id', '=', 'registros.concesionario_id')
                ->where('registros.situacion', 'ASIGNADO')->where('registros.user_id', $user->id)->get();
                break;
            case 2:
                $asignado = RegistroModel::select('registros.created_at', 'registros.nombre_completo', 'registros.documento', 'registros.celular', 'registros.correo', 'registros.marca', 'registros.modelo', 'registros.version', 'registros.color1', 'registros.color2', 'registros.color3', 'registros.anio_modelo', 'registros.situacion', 'registros.user_id', 'users.nombre', 'users.apellido', 'tiendas.nombre as tienda', 'concesionarios.nombre as concesionario', 'users.id', 'registros.tienda_id', 'registros.concesionario_id')
                ->join('users', 'users.id', '=', 'registros.user_id')
                ->join('tiendas', 'tiendas.id', '=', 'registros.tienda_id')
                ->join('concesionarios', 'concesionarios.id', '=', 'registros.concesionario_id')
                ->where('registros.situacion', 'ASIGNADO')->where('registros.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                $asignado = RegistroModel::select('registros.created_at', 'registros.nombre_completo', 'registros.documento', 'registros.celular', 'registros.correo', 'registros.marca', 'registros.modelo', 'registros.version', 'registros.color1', 'registros.color2', 'registros.color3', 'registros.anio_modelo', 'registros.situacion', 'registros.user_id', 'users.nombre', 'users.apellido', 'tiendas.nombre as tienda', 'concesionarios.nombre as concesionario', 'users.id', 'registros.tienda_id', 'registros.concesionario_id')
                ->join('users', 'users.id', '=', 'registros.user_id')
                ->join('tiendas', 'tiendas.id', '=', 'registros.tienda_id')
                ->join('concesionarios', 'concesionarios.id', '=', 'registros.concesionario_id')
                ->where('registros.situacion', 'ASIGNADO')->where('registros.concesionario_id', $user->concesionario_id)->get();
                break;
            case 4:
            case 5:
                $asignado = RegistroModel::select('registros.created_at', 'registros.nombre_completo', 'registros.documento', 'registros.celular', 'registros.correo', 'registros.marca', 'registros.modelo', 'registros.version', 'registros.color1', 'registros.color2', 'registros.color3', 'registros.anio_modelo', 'registros.situacion', 'registros.user_id', 'users.nombre', 'users.apellido', 'tiendas.nombre as tienda', 'concesionarios.nombre as concesionario', 'users.id', 'registros.tienda_id', 'registros.concesionario_id')
                ->join('users', 'users.id', '=', 'registros.user_id')
                ->join('tiendas', 'tiendas.id', '=', 'registros.tienda_id')
                ->join('concesionarios', 'concesionarios.id', '=', 'registros.concesionario_id')
                ->where('registros.situacion', 'ASIGNADO')->where('registros.marca', $user->marca)->get();
                break;
            case 6:
                $asignado = RegistroModel::select('registros.created_at', 'registros.nombre_completo', 'registros.documento', 'registros.celular', 'registros.correo', 'registros.marca', 'registros.modelo', 'registros.version', 'registros.color1', 'registros.color2', 'registros.color3', 'registros.anio_modelo', 'registros.situacion', 'registros.user_id', 'users.nombre', 'users.apellido', 'tiendas.nombre as tienda', 'concesionarios.nombre as concesionario', 'users.id', 'registros.tienda_id', 'registros.concesionario_id')
                ->join('users', 'users.id', '=', 'registros.user_id')
                ->join('tiendas', 'tiendas.id', '=', 'registros.tienda_id')
                ->join('concesionarios', 'concesionarios.id', '=', 'registros.concesionario_id')
                ->where('registros.situacion', 'ASIGNADO')->where('registros.marca', $user->marca)->get();
                break;
        }

        return response()->json(['caracteristicas'=>$data,'asignados'=>$asignado,'noasignados'=>$noasignado, 'user' => $user]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $resgitro = RegistroModel::create($request->post());
        return response()->json($resgitro);
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
        $registro->delete();
        return response()->json($registro); 
    }
}
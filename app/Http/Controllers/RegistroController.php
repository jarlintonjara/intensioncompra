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
    function getUser($token){
        [$id, $user_token] = explode('|', $token, 2);
        $token_data = DB::table('personal_access_tokens')->where('token', hash('sha256', $user_token))->first();
        if ($token_data) {
            $user_id = $token_data->tokenable_id;
            $user = User::find($user_id);
            if ($user) {
                return $user;
            }
            return response()->json("Unauthenticated", 401);
        }
    }

    public function index(Request $request)
    {
        $user = self::getUser($request->bearerToken());
        $data = CaracteristicaModel::all();
        $noasignado = [];
       
        switch ($user->role_id){
            case 1:
                $noasignado = RegistroModel::select('registros.created_at','registros.nombre_completo','registros.documento','registros.celular','registros.correo','registros.marca','registros.modelo','registros.version','registros.color1','registros.color2','registros.color3','registros.anio_modelo','registros.situacion','registros.user_id','users.nombre','users.apellido','tiendas.nombre as tienda','concesionarios.nombre as concesionario','users.id','registros.tienda_id','registros.concesionario_id')
                ->join('users','users.id','=','registros.user_id')
                ->join('tiendas','tiendas.id','=','registros.tienda_id')
                ->join('concesionarios','concesionarios.id','=','registros.concesionario_id')
                ->where('situacion', 'SINASIGNAR')->where('user_id', $user->id)->get();
                break;
            case 2:
                $noasignado = RegistroModel::select('registros.created_at','registros.nombre_completo','registros.documento','registros.celular','registros.correo','registros.marca','registros.modelo','registros.version','registros.color1','registros.color2','registros.color3','registros.anio_modelo','registros.situacion','registros.user_id','users.nombre','users.apellido','tiendas.nombre as tienda','concesionarios.nombre as concesionario','users.id','registros.tienda_id','registros.concesionario_id')
                ->join('users','users.id','=','registros.user_id')
                ->join('tiendas','tiendas.id','=','registros.tienda_id')
                ->join('concesionarios','concesionarios.id','=','registros.concesionario_id')
                ->where('situacion', 'SINASIGNAR')->where('tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                $noasignado = RegistroModel::select('registros.created_at','registros.nombre_completo','registros.documento','registros.celular','registros.correo','registros.marca','registros.modelo','registros.version','registros.color1','registros.color2','registros.color3','registros.anio_modelo','registros.situacion','registros.user_id','users.nombre','users.apellido','tiendas.nombre as tienda','concesionarios.nombre as concesionario','users.id','registros.tienda_id','registros.concesionario_id')
                ->join('users','users.id','=','registros.user_id')
                ->join('tiendas','tiendas.id','=','registros.tienda_id')
                ->join('concesionarios','concesionarios.id','=','registros.concesionario_id')
                ->where('situacion', 'SINASIGNAR')->where('concesionario_id', $user->concesionario_id)->get();
                break;
            case 6:
                $noasignado = RegistroModel::select('registros.created_at','registros.nombre_completo','registros.documento','registros.celular','registros.correo','registros.marca','registros.modelo','registros.version','registros.color1','registros.color2','registros.color3','registros.anio_modelo','registros.situacion','registros.user_id','users.nombre','users.apellido','tiendas.nombre as tienda','concesionarios.nombre as concesionario','users.id','registros.tienda_id','registros.concesionario_id')
                ->join('users','users.id','=','registros.user_id')
                ->join('tiendas','tiendas.id','=','registros.tienda_id')
                ->join('concesionarios','concesionarios.id','=','registros.concesionario_id')
                ->where('situacion', 'SINASIGNAR')->get();
                break;
        }
        // $asignado = RegistroModel::where('situacion', 'ASIGNADO')->get();
        $asignado = [];
        switch ($user->role_id){
            case 1:
                $asignado = RegistroModel::select('registros.created_at','registros.nombre_completo','registros.documento','registros.celular','registros.correo','registros.marca','registros.modelo','registros.version','registros.color1','registros.color2','registros.color3','registros.anio_modelo','registros.situacion','registros.user_id','users.nombre','users.apellido','tiendas.nombre as tienda','concesionarios.nombre as concesionario','users.id','registros.tienda_id','registros.concesionario_id')
                ->join('users','users.id','=','registros.user_id')
                ->join('tiendas','tiendas.id','=','registros.tienda_id')
                ->join('concesionarios','concesionarios.id','=','registros.concesionario_id')
                ->where('situacion', 'ASIGNADO')->where('user_id', $user->id)->get();
                break;
            case 2:
                $asignado = RegistroModel::select('registros.created_at','registros.nombre_completo','registros.documento','registros.celular','registros.correo','registros.marca','registros.modelo','registros.version','registros.color1','registros.color2','registros.color3','registros.anio_modelo','registros.situacion','registros.user_id','users.nombre','users.apellido','tiendas.nombre as tienda','concesionarios.nombre as concesionario','users.id','registros.tienda_id','registros.concesionario_id')
                ->join('users','users.id','=','registros.user_id')
                ->join('tiendas','tiendas.id','=','registros.tienda_id')
                ->join('concesionarios','concesionarios.id','=','registros.concesionario_id')
                ->where('situacion', 'ASIGNADO')->where('tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                $asignado = RegistroModel::select('registros.created_at','registros.nombre_completo','registros.documento','registros.celular','registros.correo','registros.marca','registros.modelo','registros.version','registros.color1','registros.color2','registros.color3','registros.anio_modelo','registros.situacion','registros.user_id','users.nombre','users.apellido','tiendas.nombre as tienda','concesionarios.nombre as concesionario','users.id','registros.tienda_id','registros.concesionario_id')
                ->join('users','users.id','=','registros.user_id')
                ->join('tiendas','tiendas.id','=','registros.tienda_id')
                ->join('concesionarios','concesionarios.id','=','registros.concesionario_id')
                ->where('situacion', 'ASIGNADO')->where('concesionario_id', $user->concesionario_id)->get();
                break;
            case 6:
                $asignado = RegistroModel::select('registros.created_at','registros.nombre_completo','registros.documento','registros.celular','registros.correo','registros.marca','registros.modelo','registros.version','registros.color1','registros.color2','registros.color3','registros.anio_modelo','registros.situacion','registros.user_id','users.nombre','users.apellido','tiendas.nombre as tienda','concesionarios.nombre as concesionario','users.id','registros.tienda_id','registros.concesionario_id')
                ->join('users','users.id','=','registros.user_id')
                ->join('tiendas','tiendas.id','=','registros.tienda_id')
                ->join('concesionarios','concesionarios.id','=','registros.concesionario_id')
                ->where('situacion', 'ASIGNADO')->get();
                break;
        }

        //$noasignado =RegistroModel::where('situacion', 'SINASIGNAR')->where('tienda_id')->get();
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
<?php

namespace App\Http\Controllers;

use App\Models\IngresoModel;
use App\Http\Requests\StoreIngresoModelRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IngresoController extends Controller
{
    function getUser($token)
    {
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
        $data = IngresoModel::where('bloqueado',0)->get();
        $user = self::getUser($request->bearerToken());
        switch ($user->role_id) {
            case 1:
                $bloqueados = IngresoModel::select(
                    'ingresos.id',
                    'users.nombre',
                    'ingresos.fecha_bloqueo',
                    'ingresos.vin',
                    'ingresos.marca',
                    'ingresos.modelo',
                    'ingresos.version',
                    'ingresos.color',
                    'ingresos.anio_modelo',
                    'ingresos.codigo_sap',
                    'ingresos.fecha_ingreso',
                )
                ->Join('users', 'ingresos.user_bloqueo', '=', 'users.id')
                ->where('users.user_id', $user->id)
                ->where('bloqueado', 1)
                ->get();
                break;
            case 2:
                $bloqueados = IngresoModel::select(
                    'ingresos.id',
                    'users.nombre',
                    'ingresos.fecha_bloqueo',
                    'ingresos.vin',
                    'ingresos.marca',
                    'ingresos.modelo',
                    'ingresos.version',
                    'ingresos.color',
                    'ingresos.anio_modelo',
                    'ingresos.codigo_sap',
                    'ingresos.fecha_ingreso',
                )
                ->Join('users', 'ingresos.user_bloqueo', '=', 'users.id')
                ->where('users.tienda_id', $user->tienda_id)
                ->where('bloqueado', 1)
                ->get();
                break;
            case 3:
                $bloqueados = IngresoModel::select(
                    'ingresos.id',
                    'users.nombre',
                    'ingresos.fecha_bloqueo',
                    'ingresos.vin',
                    'ingresos.marca',
                    'ingresos.modelo',
                    'ingresos.version',
                    'ingresos.color',
                    'ingresos.anio_modelo',
                    'ingresos.codigo_sap',
                    'ingresos.fecha_ingreso',
                )
                ->Join('users', 'ingresos.user_bloqueo', '=', 'users.id')
                ->where('users.concesionario_id', $user->concesionario_id)
                ->where('bloqueado', 1)
                ->get();
                break;
            case 6:
                $bloqueados = IngresoModel::select(
                    'ingresos.id',
                    'users.nombre',
                    'ingresos.fecha_bloqueo',
                    'ingresos.vin',
                    'ingresos.marca',
                    'ingresos.modelo',
                    'ingresos.version',
                    'ingresos.color',
                    'ingresos.anio_modelo',
                    'ingresos.codigo_sap',
                    'ingresos.fecha_ingreso',
                )
                ->Join('users', 'ingresos.user_bloqueo', '=', 'users.id')
                ->where('bloqueado', 1)
                ->get();
                break;
        }
        return response()->json(['data'=>$data,'bloqueados'=>$bloqueados]);
    }

    public function create()
    {
        //
    }

    public function store(StoreIngresoModelRequest $request)
    {
        //
    }

    public function show(IngresoModel $ingresoModel)
    {
        //
    }

    public function edit(IngresoModel $ingresoModel)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $ingreso = IngresoModel::findOrFail($id);
        $ingreso->update(["bloqueado" => $request->bloqueado, "user_bloqueo" => $request->user_bloqueo, "fecha_bloqueo" => now()]);
        return response()->json($ingreso);
    }

    public function destroy(IngresoModel $ingresoModel)
    {
        //
    }
}

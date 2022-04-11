<?php

namespace App\Http\Controllers;

use App\Models\IngresoModel;
use App\Http\Requests\StoreIngresoModelRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IngresoController extends Controller
{
    public function index(Request $request)
    {
        $auth = new AuthController();
        $user = $auth->getUser($request->bearerToken());
        $data = IngresoModel::where('bloqueado',0)->get();
        $bloqueados = [];
        switch ($user->role_id) {
            case 1:
                $bloqueados = IngresoModel::select(
                    'packing_list.id',
                    'users.nombre',
                    'packing_list.fecha_bloqueo',
                    'packing_list.vin',
                    'packing_list.marca',
                    'packing_list.modelo',
                    'packing_list.version',
                    'packing_list.color',
                    'packing_list.anio_modelo',
                    'packing_list.codigo_sap',
                    'packing_list.fecha_ingreso',
                )
                    ->Join('users', 'packing_list.user_bloqueo', '=', 'users.id')
                    ->where('bloqueado', 1)->where('users.user_id', $user->id)->get();
                break;
            case 2:
                $bloqueados = IngresoModel::select(
                    'packing_list.id',
                    'users.nombre',
                    'packing_list.fecha_bloqueo',
                    'packing_list.vin',
                    'packing_list.marca',
                    'packing_list.modelo',
                    'packing_list.version',
                    'packing_list.color',
                    'packing_list.anio_modelo',
                    'packing_list.codigo_sap',
                    'packing_list.fecha_ingreso',
                )
                ->Join('users', 'packing_list.user_bloqueo', '=', 'users.id')
                ->where('bloqueado', 1)->where('users.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
            case 4:
                $bloqueados = IngresoModel::select(
                    'packing_list.id',
                    'users.nombre',
                    'packing_list.fecha_bloqueo',
                    'packing_list.vin',
                    'packing_list.marca',
                    'packing_list.modelo',
                    'packing_list.version',
                    'packing_list.color',
                    'packing_list.anio_modelo',
                    'packing_list.codigo_sap',
                    'packing_list.fecha_ingreso',
                )
                ->Join('users', 'packing_list.user_bloqueo', '=', 'users.id')
                ->where('bloqueado', 1)->where('packing_list.marca', $user->marca)->get();
                break;
            case 5:
                $bloqueados = IngresoModel::select(
                    'packing_list.id',
                    'users.nombre',
                    'packing_list.fecha_bloqueo',
                    'packing_list.vin',
                    'packing_list.marca',
                    'packing_list.modelo',
                    'packing_list.version',
                    'packing_list.color',
                    'packing_list.anio_modelo',
                    'packing_list.codigo_sap',
                    'packing_list.fecha_ingreso',
                )
                    ->Join('users', 'packing_list.user_bloqueo', '=', 'users.id')
                    ->where('bloqueado', 1)->where('users.concesionario_id', $user->concesionario_id)->get();
                break;
            case 6:
                $bloqueados = IngresoModel::select(
                    'packing_list.id',
                    'users.nombre',
                    'packing_list.fecha_bloqueo',
                    'packing_list.vin',
                    'packing_list.marca',
                    'packing_list.modelo',
                    'packing_list.version',
                    'packing_list.color',
                    'packing_list.anio_modelo',
                    'packing_list.codigo_sap',
                    'packing_list.fecha_ingreso',
                )
                ->Join('users', 'packing_list.user_bloqueo', '=', 'users.id')
                ->where('bloqueado', 1)->get();
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

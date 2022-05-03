<?php

namespace App\Http\Controllers;

use App\Models\IngresoModel;
use App\Http\Requests\StoreIngresoModelRequest;
use Illuminate\Http\Request;

class IngresoController extends Controller
{
    public function index(Request $request)
    {
        $auth = new AuthController();
        $user = $auth->getUser($request->bearerToken());
        $query2 = IngresoModel::select(
            'packing_list.id',
            'users.nombre',
            'packing_list.fecha_bloqueo',
            'packing_list.vin',
            'packing_list.marca',
            'packing_list.modelo',
            'packing_list.version',
            'packing_list.color',
            'packing_list.anio_modelo',
            'packing_list.anio_fabricacion',
            'packing_list.codigo_sap',
            'packing_list.fecha_ingreso',
            'packing_list.nave',
        )
            ->leftJoin('users', 'packing_list.user_bloqueo', 'users.id')
            ->where('bloqueado',0);
        $data = [];
        switch ($user->role_id) {
            case 1:
                $data = $query2->where('users.user_id', $user->id)->get();
                break;
            case 2:
                $data = $query2->where('users.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                $data = $query2->where('users.concesionario_id', $user->tienda_id)->get();
                break;
            case 4:
            case 5:
                $data = $query2->where('packing_list.marca', $user->marca)->get();
                break;
            case 6:
                $data = $query2->get();
                break;
            default:
                $data = [];
        }
        $bloqueados = [];
        $query = IngresoModel::select(
            'packing_list.id',
            'users.nombre',
            'packing_list.fecha_bloqueo',
            'packing_list.vin',
            'packing_list.marca',
            'packing_list.modelo',
            'packing_list.version',
            'packing_list.color',
            'packing_list.anio_modelo',
            'packing_list.anio_fabricacion',
            'packing_list.codigo_sap',
            'packing_list.fecha_ingreso',
            'packing_list.nave',
        )
            ->leftJoin('users', 'packing_list.user_bloqueo', 'users.id')
            ->where('bloqueado', 1);
        switch ($user->role_id) {
            case 1:
                $bloqueados = $query->where('users.user_id', $user->id)->get();
                break;
            case 2:
                $bloqueados = $query->where('users.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                $bloqueados = $query->where('users.concesionario_id', $user->tienda_id)->get();
                break;
            case 4:
            case 5:
                $bloqueados = $query->where('packing_list.marca', $user->marca)->get();
                break;
            case 6:
                $bloqueados = $query->get();
                break;
            default:
                $bloqueados = [];
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
        $auth = new AuthController();
        $session = $auth->getUser($request->bearerToken);
        $ingreso = IngresoModel::findOrFail($id);
        $ingreso->update([
            "bloqueado" => 1, 
            "user_bloqueo" => $session->id,
            "situacion" => 'BLOQUEADO',
            "motivo" => 'bloqueo manual',
            "fecha_bloqueo" => date('Y-m-d')
        ]);
        return response()->json($ingreso);
    }

    public function destroy(IngresoModel $ingresoModel)
    {
        //
    }
}

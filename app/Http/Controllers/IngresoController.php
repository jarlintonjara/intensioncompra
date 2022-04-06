<?php

namespace App\Http\Controllers;

use App\Models\IngresoModel;
use App\Http\Requests\StoreIngresoModelRequest;
use App\Http\Requests\UpdateIngresoModelRequest;
use Illuminate\Http\Request;

class IngresoController extends Controller
{
    public function index()
    {
        $data = IngresoModel::where('bloqueado',0);
        
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
        ->where('bloqueado',1)
        ->get();

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

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
        $data = IngresoModel::all();
        return response()->json($data);
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
        $ingreso->update(["bloqueado" => $request->bloqueado ]);
        return response()->json($ingreso);
    }

    public function destroy(IngresoModel $ingresoModel)
    {
        //
    }
}

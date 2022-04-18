<?php

namespace App\Http\Controllers;

use App\Models\ConcesionarioModel;
use Illuminate\Http\Request;

class ConcesinarioController extends Controller
{
    public function index()
    {
        $data = ConcesionarioModel::where('estado', 1)->get();
        return response()->json($data);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => ['required'],
            'descripcion' => ['required'],
            'direccion' => ['required']
        ]);
        $register = ConcesionarioModel::create($request->post());
        return response()->json($register);
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $register = ConcesionarioModel::findOrFail($id);
        $request->validate([
            'nombre' => ['required'],
            'descripcion' => ['required'],
            'direccion' => ['required']
        ]);
        $register->update($request->all());
        return response()->json($register);
    }

    public function destroy($id)
    {
        $register = ConcesionarioModel::findOrFail($id);
        $register->update(['estado' => 0 ]);
        return response()->json($register);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\ConcesionarioModel;
use App\Models\TiendaModel;
use Illuminate\Http\Request;

class TiendaController extends Controller
{
    
    public function index()
    {
        $data = TiendaModel::where('estado', 1)->get();
        $concesionarios = ConcesionarioModel::where('estado',1)->get();
        return response()->json([
                'tiendas' => $data,
                'concesionarios' => $concesionarios
            ]);
    }
    
    public function create()
    {
        //
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'concesionario_id' => ['required'],
            'nombre' => ['required'],
            'direccion' => ['required'],
        ]);
        $register = TiendaModel::create($request->post());
        return response()->json($register);
    }

    public function show($id)
    {

    }

    public function edit()
    {
        //
    }

    public function update(Request $request, $id)
    {
        $register = TiendaModel::findOrFail($id);
        $request->validate([
            'concesionario_id' => ['required'],
            'nombre' => ['required'],
            'direccion' => ['required'],
        ]);
        $register->update($request->all());
        return response()->json($register);
    }

    public function destroy($id)
    {
        $register = TiendaModel::findOrFail($id);
        $register->update(['estado' => 0]);
        return response()->json($register);
    }
}

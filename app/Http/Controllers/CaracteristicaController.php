<?php

namespace App\Http\Controllers;

use App\Models\CaracteristicaModel;
use Illuminate\Http\Request;

class CaracteristicaController extends Controller
{
    public function index()
    {
        $data = CaracteristicaModel::where('estado',1)->get();
        $marcas = CaracteristicaModel::select('marca')->where('estado',1)->groupBy('marca')->get();
        return response()->json([
            'caracteristicas'  => $data,
            'marcas'  => $marcas
        ]);
    }
    
    public function create()
    {
        //
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'marca' => ['required'],
            'modelo' => ['required'],
            'version' => ['required'],
            'color' => ['required'],
        ]);
        $register = CaracteristicaModel::create($request->all());
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
        $register = CaracteristicaModel::findOrFail($id);
        $request->validate([
            'marca' => ['required'],
            'modelo' => ['required'],
            'version' => ['required'],
            'color' => ['required'],
        ]);
        $register->update($request->all());
        return response()->json($register);
    }

    public function destroy($id)
    {
        $register = CaracteristicaModel::findOrFail($id);
        $register->update(['estado' => 0]);
        return response()->json($register);
    }
}

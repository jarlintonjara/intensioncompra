<?php

namespace App\Http\Controllers;

use App\Models\CaracteristicaModel;
use Illuminate\Http\Request;

class CaracteristicaController extends Controller
{
    
    public function index()
    {
        $data = CaracteristicaModel::where('estado',1)->get();
        return response()->json($data);
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
            'color1' => ['required'],
            'color2' => ['required'],
            'color3' => ['required'],
        ]);
        $register = CaracteristicaModel::create($request->post());
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
            'concesionario_id' => ['required'],
            'nombre' => ['required'],
            'direccion' => ['required'],
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

<?php

namespace App\Http\Controllers;

use App\Models\RegistroModel;
use Illuminate\Http\Request;
use App\Models\CaracteristicaModel;

class RegistroController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }

    public function index()
    {
        $data = CaracteristicaModel::all();
        return response()->json($data);
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

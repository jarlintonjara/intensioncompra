<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RoleModel;

class RoleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function index()
    {
        $data = RoleModel::all();
        return response()->json($data);
    }

    public function create()
    {
        
    }

    public function store(Request $request)
    {
        //$estacionamiento = RoleModel::create($request->post());
        $estacionamiento = RoleModel::create($request->post());
        return response()->json($estacionamiento);
    }

    public function show(RoleModel $estacionamiento)
    {
        return response()->json($estacionamiento);
    }

    public function edit(RoleModel $estacionamiento)
    {
        
    }
    
    public function update(Request $request, $id)
    {
        $estacionamiento = RoleModel::findOrFail($id);
        $estacionamiento->update($request->all());
        $data = RoleModel::all();
        return response()->json($data);
    }

    public function destroy($id)
    {
        $estacionamiento = RoleModel::findOrFail($id);
        $estacionamiento->delete();
        $data = RoleModel::all();
        return response()->json($data);
    }
}

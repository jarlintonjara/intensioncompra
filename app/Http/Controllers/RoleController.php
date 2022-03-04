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
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {   
        $data = RoleModel::all();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        //$estacionamiento = RoleModel::create($request->post());
        $estacionamiento = RoleModel::create($request->post());
        return response()->json($estacionamiento);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RoleModel  $blog
     * @return \Illuminate\Http\Response
     */
    public function show(RoleModel $estacionamiento)
    {
        return response()->json($estacionamiento);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RoleModel  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(RoleModel $estacionamiento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $estacionamiento = RoleModel::findOrFail($id);
        $estacionamiento->update($request->all());
        $data = RoleModel::all();
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $estacionamiento = RoleModel::findOrFail($id);
        $estacionamiento->delete();
        $data = RoleModel::all();
        return response()->json($data);
    }
}

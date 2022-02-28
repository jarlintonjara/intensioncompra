<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EstacionamientoModel;

class EstacionamientoController extends Controller
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
        $data = EstacionamientoModel::all();
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
        //$estacionamiento = EstacionamientoModel::create($request->post());
        $estacionamiento = EstacionamientoModel::create($request->post());
        return response()->json($estacionamiento);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EstacionamientoModel  $blog
     * @return \Illuminate\Http\Response
     */
    public function show(EstacionamientoModel $estacionamiento)
    {
        return response()->json($estacionamiento);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EstacionamientoModel  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(EstacionamientoModel $estacionamiento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EstacionamientoModel  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EstacionamientoModel $estacionamiento)
    {
        $estacionamiento->fill($request->post())->save();
        return response()->json($estacionamiento);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(EstacionamientoModel $estacionamiento)
    {
        $estacionamiento->delete();
        return response()->json([
            'mensaje' => '¡Registro eliminado correctamente!'
        ]);
    }
}

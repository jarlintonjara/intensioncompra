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

    public function store(Request $request)
    {
        $data = EstacionamientoModel::create($request->post());
        return response()->json([
            'estacionamiento' => $data
        ]);
    }
}

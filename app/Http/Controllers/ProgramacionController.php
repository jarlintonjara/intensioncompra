<?php

namespace App\Http\Controllers;

use App\Models\EstacionamientoModel;
use App\Models\ProgramacionModel;
use App\Models\User;
use Illuminate\Http\Request;

class ProgramacionController extends Controller
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
        $schedules = ProgramacionModel::all();
        $users = User::all();
        $parkings = EstacionamientoModel::all();
        foreach($schedules as $schedule){
            $schedule["user"] = $schedule->user;
            $schedule["parking"] = $schedule->parking;
        }
        return response()->json([
            "parkings" => $parkings,
            "users" => $users,
            "schedules" => $schedules,
        ]);
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
        //$estacionamiento = ProgramacionModel::create($request->post());
        $schedule = ProgramacionModel::create($request->post());
        $schedule["user"] = $schedule->user;
        $schedule["parking"] = $schedule->parking;
        return response()->json($schedule);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProgramacionModel  $blog
     * @return \Illuminate\Http\Response
     */
    public function show(ProgramacionModel $estacionamiento)
    {
        return response()->json($estacionamiento);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProgramacionModel  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(ProgramacionModel $estacionamiento)
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
        $estacionamiento = ProgramacionModel::findOrFail($id);
        $estacionamiento->update($request->all());
        $data = ProgramacionModel::all();
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProgramacionModel $ProgramacionModel
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $estacionamiento = ProgramacionModel::findOrFail($id);
        $estacionamiento->delete();
        $data = ProgramacionModel::all();
        return response()->json($data);
    }
}

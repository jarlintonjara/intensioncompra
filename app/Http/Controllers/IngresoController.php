<?php

namespace App\Http\Controllers;

use App\Models\IngresoModel;
use App\Http\Requests\StoreIngresoModelRequest;
use App\Http\Requests\UpdateIngresoModelRequest;

class IngresoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = IngresoModel::all();
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
     * @param  \App\Http\Requests\StoreIngresoModelRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreIngresoModelRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\IngresoModel  $ingresoModel
     * @return \Illuminate\Http\Response
     */
    public function show(IngresoModel $ingresoModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\IngresoModel  $ingresoModel
     * @return \Illuminate\Http\Response
     */
    public function edit(IngresoModel $ingresoModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateIngresoModelRequest  $request
     * @param  \App\Models\IngresoModel  $ingresoModel
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateIngresoModelRequest $request, IngresoModel $ingresoModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\IngresoModel  $ingresoModel
     * @return \Illuminate\Http\Response
     */
    public function destroy(IngresoModel $ingresoModel)
    {
        //
    }
}

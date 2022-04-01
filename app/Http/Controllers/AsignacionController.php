<?php

namespace App\Http\Controllers;

use App\Models\AsignacionModel;
use App\Http\Requests\StoreAsignacionRequest;
use App\Http\Requests\UpdateAsignacionRequest;

class AsignacionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $data = AsignacionModel::all();
        // return response()->json($data);

        $data = AsignacionModel::select(
            'asignaciones.fecha_distribucion',
            'concesionarios.descripcion',
            'users.nombre',
            'registros.documento',
            'ingresos.vin',
            'ingresos.marca',
            'ingresos.modelo',
            'ingresos.version',
            'ingresos.color',
            'ingresos.anio_modelo',
            'ingresos.codigo_sap',
            'ingresos.fecha_ingreso',
            'asignaciones.codigo_reserva',
            'asignaciones.monto_reserva',
            'asignaciones.fecha_reserva',
            )
            ->Join('registros', 'asignaciones.registro_id', '=', 'registros.id')
            ->Join('ingresos', 'asignaciones.ingreso_id', '=', 'ingresos.id')
            ->Join('users', 'asignaciones.user_id', '=', 'users.id')
            ->Join('concesionarios', 'users.concesionario_id', '=', 'concesionarios.id')
            ->where("asignaciones.situacion",0)
            ->get();
            // print_r($data);
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
     * @param  \App\Http\Requests\StoreAsignacionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAsignacionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Asignacion  $asignacion
     * @return \Illuminate\Http\Response
     */
    public function show(AsignacionModel $asignacion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Asignacion  $asignacion
     * @return \Illuminate\Http\Response
     */
    public function edit(AsignacionModel $asignacion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAsignacionRequest  $request
     * @param  \App\Models\Asignacion  $asignacion
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAsignacionRequest $request, AsignacionModel $asignacion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Asignacion  $asignacion
     * @return \Illuminate\Http\Response
     */
    public function destroy(AsignacionModel $asignacion)
    {
        //
    }
}

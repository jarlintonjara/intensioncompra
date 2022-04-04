<?php

namespace App\Http\Controllers;

use App\Models\AsignacionModel;
use App\Models\RegistroModel;
use App\Models\IngresoModel;
use App\Http\Requests\StoreAsignacionRequest;
use App\Http\Requests\UpdateAsignacionRequest;
use Illuminate\Http\Request;

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
            'concesionarios.nombre as concesionario',
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
            'asignaciones.id',
            'users.id as user_id',
            'asignaciones.codigo_reserva',
            'asignaciones.monto_reserva',
            'asignaciones.fecha_reserva',
            'asignaciones.situacion'
            )
            ->Join('registros', 'asignaciones.registro_id', '=', 'registros.id')
            ->Join('ingresos', 'asignaciones.ingreso_id', '=', 'ingresos.id')
            ->Join('users', 'asignaciones.user_id', '=', 'users.id')
            ->Join('concesionarios', 'users.concesionario_id', '=', 'concesionarios.id')
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

    public function edit(Request $request, $id)
    {
        
    }

    public function update(Request $request, $id)
    {
        $asignacion = AsignacionModel::findOrFail($id);
        $asignacion->update($request->all());
        return response()->json($asignacion);
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

    public function asignacion(){
        
        $registros = RegistroModel::select('id','marca','modelo','version','anio_modelo','color1')->where('situacion', 'SINASIGNAR')->get();

        
        
        foreach ($registros as $registro) {

        $ingresos = IngresoModel::where('marca', $registro->marca)->where('modelo', $registro->modelo)->where('version', $registro->version)->where('anio_version', $registro->anio_modelo)->where('color', $registro->color1)->where('situacion', 'SINASIGNAR')->update('situación','ASIGNADO');

        if($ingresos){

        }
            // echo $registro->id;
        }

        return response()->json($registros);
    }
}

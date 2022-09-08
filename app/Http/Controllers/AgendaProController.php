<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiciosModel;
use App\Models\ServiciosTallerModel;

class AgendaProController extends Controller
{
    public function index(Request $request)
    {
        $servicio = $request->input('id_servicio');
        $marca = $request->input('marca');
        $i = 1;
        $response = ServiciosTallerModel::select('talleres.id', 'talleres.descripcion', 'talleres.horario', 'talleres.vehiculos', 'talleres.restricciones')
                ->join('servicios', 'servicios.id', 'servicios_x_taller.id_servicio')
                ->join('talleres', 'talleres.id', 'servicios_x_taller.id_taller')
                ->where('servicios_x_taller.id_servicio', $servicio)
                ->where('servicios_x_taller.marca', $marca)
                ->where('servicios_x_taller.estado', 1)
                ->get();
        foreach($response as $row){
            $row["descripcion"] = $i.". ".$row["descripcion"];
            $i+= 1;
        }
        return response()->json([ 
            'payload' => [
                'message' => "Ok",
                'data' => [
                    'resultado' => $response
                ]
            ]
        ]);
    }

    public function servicios()
    {
        $response = ServiciosModel::select('id', 'descripcion')->where('estado', 1)->get();
        return response()->json([ 
            'payload' => [
                'message' => "Ok",
                'data' => [
                    'resultado' => $response
                ]
            ]
        ]);
    }

    public function seleccionarServicio(Request $request)
    {
        $message = "";
        $servicio = $request->input('id_servicio');
        switch ($servicio){
            case 4:
            case 5:
            case 6:
                $message = "Estimado cliente, para informarle que para el servicio de MANTENIMIENTO NOCTURNO solo aplica para mantenimientos preventivos sin observaciones.  No se hacen diagnósticos ni reparaciones (Max 75000 Km de recorrido)";
                break;
        }
        return response()->json([ 
            'payload' => [
                'message' => "Ok",
                'data' => [
                    'message' => $message
                ]
            ]
        ]);
    }
}

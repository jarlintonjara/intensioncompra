<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiciosModel;
use App\Models\ServiciosTallerModel;
use App\Models\TallerModel;
use PhpParser\Node\Stmt\Switch_;

class AgendaProController extends Controller
{
    /* public function index(Request $request)
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
    } */

    public function servicios(Request $request)
    {
        $ubicacion = strtoupper($request->input('departamento'));
        $marca = strtoupper($request->input('marca'));
        $modelo = strtoupper($request->input('modelo'));
        $response = TallerModel::select('id', 'descripcion', 'direccion')
                ->where('departamento', $ubicacion)
                ->where('estado', 1)
                ->get();
        $question = "";
        if($ubicacion != "LIMA" && count($response) > 0){
            $question = "Estimado cliente, en el departamento ".$ubicacion." contamos con los siguientes locales:";
            $response = TallerModel::select('id', 'descripcion', 'direccion')
                ->where('departamento', $ubicacion)
                ->where('estado', 1)
                ->get();
            $i =1;
            foreach($response as $row){
                $row["descripcion"] = $i.". ".$row["descripcion"].": ".$row["direccion"];
                $i+= 1;
            }

        }else if($ubicacion != "LIMA" && count($response) == 0){
            $question = "ss Estimado cliente los talleres Derco Center más cercanos al departamento indicado son los siguientes:";
            $response = TallerModel::select('id', 'descripcion', 'direccion')
                ->where('departamento','!=', 'LIMA')
                ->where('estado', 1)
                ->get();
            $i =1;
            foreach($response as $row){
                $row["descripcion"] = $i.". ".$row["descripcion"].": ".$row["direccion"];
                $i+= 1;
            }

        }else{
            $question = "Por favor indíqueme para cual de nuestros servicios desea agendar su cita: ";
            $response = ServiciosTallerModel::select('servicios.id', 'servicios.descripcion')
                ->join('servicios', 'servicios.id', 'servicios_x_taller.id_servicio')
                ->join('talleres', 'talleres.id', 'servicios_x_taller.id_taller')
                ->where('servicios_x_taller.marca', $marca)
                ->where('talleres.departamento', 'LIMA')
                ->where('servicios_x_taller.estado', 1)
                ->groupBy('servicios.id', 'servicios.descripcion')
                ->get();
            $i =1;
            foreach($response as $row){
                $row["descripcion"] = $i.". ".$row["descripcion"];
                $i+= 1;
            }
        }
        
        return response()->json([ 
            'payload' => [
                'message' => "Ok",
                'data' => [
                    'question' => $question,
                    'resultado' => $response
                ]
            ]
        ]);
    }

    public function seleccionarServicio(Request $request)
    {
        $servicio = $request->input('id_servicio');
        $question = "¿En qué distrito de nuestra Red Derco Center Lima desea programar su cita?";
        $restriccion = "";
        $response = [
            ["id"=>"SURCO", "descripcion" => "Derco Center Surco."],
            ["id"=> "SURQUILLO", "descripcion" =>  "Derco Center Surquillo."],
            ["id"=>"CAMACHO", "descripcion" => "Derco Center Camacho."],
            ["id"=>"CHORRILLOS","descripcion" => "Derco Center Chorrillos."],
            ["id"=>"LA VICTORIA","descripcion" => "Derco Center La Victoria."],
            ["id"=> "SAN MIGUEL","descripcion" => "Derco Center San Miguel."]
        ];
        
        switch ($servicio){
            case 4:
            case 5:
            case 6:
                $restriccion = "Estimado cliente, para informarle que para el servicio de MANTENIMIENTO NOCTURNO solo aplica para mantenimientos preventivos sin observaciones.  No se hacen diagnósticos ni reparaciones (Max 75000 Km de recorrido)";
                break;
        }
        return response()->json([ 
            'payload' => [
                'message' => "Ok",
                'data' => [
                    'question' => $question,
                    'resultado' => $response,
                    'restriccion' => $restriccion
                ]
            ]
        ]);
    }

   /*  public function distritosTaller(Request $request)
    {
        $data = [
            ["id"=>"SURCO", "descripcion" => "Derco Center Surco."],
            ["id"=> "SURQUILLO", "descripcion" =>  "Derco Center Surquillo."],
            ["id"=>"CAMACHO", "descripcion" => "Derco Center Camacho."],
            ["id"=>"CHORRILLOS","descripcion" => "Derco Center Chorrillos."],
            ["id"=>"LA VICTORIA","descripcion" => "Derco Center La Victoria."],
            ["id"=> "SAN MIGUEL","descripcion" => "Derco Center San Miguel."]
        ];
        $question = "¿En qué distrito de nuestra Red Derco Center Lima desea programar su cita?";
    
        return response()->json([ 
            'payload' => [
                'message' => "Ok",
                'data' => [
                    'question' => $question,
                    'resultado' => $data
                ]
            ]
        ]);
    }
 */
    public function seleccionarDistrito(Request $request)
    {
        $distrito = strtoupper($request->input('distrito'));
        $question = "Estimado cliente, en el distrito de ".$distrito." contamos con los siguientes locales:";
        $response = TallerModel::select('id', 'descripcion', 'direccion')
            ->where('distrito', $distrito)
            ->where('estado', 1)
            ->get();
        $i =1;
        foreach($response as $row){
            $row["descripcion"] = $i.". ".$row["descripcion"].": ".$row["direccion"];
            $i+= 1;
        }
    
        return response()->json([ 
            'payload' => [
                'message' => "Ok",
                'data' => [
                    'question' => $question,
                    'resultado' => $response
                ]
            ]
        ]);
    }
}

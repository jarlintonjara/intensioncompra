<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiciosModel;
use App\Models\ServiciosTallerModel;
use App\Models\TallerModel;
use Carbon\Carbon;
use PhpParser\Node\Stmt\Switch_;

class AgendaProController extends Controller
{
    public function index(Request $request)
    {
        $servicio = $request->input('id_servicio');
        $marca = $request->input('marca');
        $response = ServiciosTallerModel::select('talleres.distrito', 'talleres.nombre as descripcion')
                ->join('servicios', 'servicios.id', 'servicios_x_taller.id_servicio')
                ->join('talleres', 'talleres.id', 'servicios_x_taller.id_taller')
                ->where('servicios_x_taller.id_servicio', $servicio)
                ->where('servicios_x_taller.marca', $marca)
                ->where('servicios_x_taller.estado', 1)
                ->get();

        return response()->json([ 
            'payload' => [
                'message' => "Ok",
                'data' => [
                    'resultado' => $response
                ]
            ]
        ]);
    }

    public function buscarCita($placa){
        $client = new \GuzzleHttp\Client();

        $response = $client->request('GET', 'https://agendapro.com/api/public/v1/bookings', [
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
            ],
        ]);

        $body = json_decode($response->getBody(), true);
        $data = [];
        for($i = 0;$i < count($body) ;$i++){
            foreach($body[$i]['client']['custom_attributes'] as $e){
                if($e["custom_attribute_id"] == 7786 && $e["value"] == $placa){
                    $data = $body[$i];
                    break;
                }
            }
        }
        $question = "";
        if($data){
            $fecha = Carbon::parse($data["start"]);
            $dia = $fecha->format('d/m/Y');
            $hora = $fecha->format('H:i:s');
            $question.= "Estimado ".$data["client"]["first_name"].". Para informarle que  Usted ya cuenta con agendamiento de cita en taller. Se detalla: \n -Servicio: ".$data["service"]. " \n -Taller: ".$data["location"] ." \n -Dirección: ".$data["location"]." \n -Fecha de cita: ".$dia." \n -Hora de cita: ".$hora;
        }
        
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


    public function servicios(Request $request)
    {
        $ubicacion = strtoupper($request->input('departamento'));
        $marca = strtoupper($request->input('marca'));
        $modelo = strtoupper($request->input('modelo'));
        $modelos = [$modelo];
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
            /* $rows = ServiciosTallerModel::where('id', 1)->first();
            $restricciones = [];
            foreach($rows["restricciones"] as $r){
                array_push($restricciones, $r);
            }
            return $restricciones; */
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
        $marca = $request->input('marca');
        $modelo = $request->input('modelo');
        $question = "¿En qué distrito de nuestra Red Derco Center Lima desea programar su cita?";
        $restriccion = "";
        /* $response = [
            ["id"=>"SURCO", "descripcion" => "Derco Center Surco."],
            ["id"=> "SURQUILLO", "descripcion" =>  "Derco Center Surquillo."],
            ["id"=>"CAMACHO", "descripcion" => "Derco Center Camacho."],
            ["id"=>"CHORRILLOS","descripcion" => "Derco Center Chorrillos."],
            ["id"=>"LA VICTORIA","descripcion" => "Derco Center La Victoria."],
            ["id"=> "SAN MIGUEL","descripcion" => "Derco Center San Miguel."]
        ]; */
        $response = ServiciosTallerModel::select('talleres.distrito', 'talleres.nombre as descripcion')
                ->join('servicios', 'servicios.id', 'servicios_x_taller.id_servicio')
                ->join('talleres', 'talleres.id', 'servicios_x_taller.id_taller')
                ->where('servicios_x_taller.id_servicio', $servicio)
                ->where('servicios_x_taller.marca', $marca)
                ->where('talleres.departamento', 'LIMA')
                ->where('servicios_x_taller.estado', 1)
                ->get();

        
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
        $marca = $request->input('marca');
        $modelo = $request->input('modelo');
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

    /* 
    *  2.	CONSULTA SOBRE AGENDAMIENTO DE CITA 
    */
    public function reprogramarCita($placa){
        $client = new \GuzzleHttp\Client();

        $response = $client->request('GET', 'https://agendapro.com/api/public/v1/bookings', [
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
            ],
        ]);

        $body = json_decode($response->getBody(), true);
        $data = null;
        $options = [];
        for($i = 0;$i < count($body) ;$i++){
            foreach($body[$i]['client']['custom_attributes'] as $e){
                if($e["custom_attribute_id"] == 7786 && $e["value"] == $placa){
                    $data = $body[$i];
                    array_push($options, $body[$i]);
                    break;
                }
            }
        }
        $question = "";
        $AuxOptions = [];
        $nextApi = 0;
        if($data){
            $fecha = Carbon::parse($data["start"]);
            $dia = $fecha->format('d/m/Y');
            $hora = $fecha->format('H:i:s');
            $nextApi = 20;
            $question.= "Estimado ".$data["client"]["first_name"].". Para informarle que  Usted ya cuenta con agendamiento de cita en taller. Se detalla: \n -Servicio: ".$data["service"]. " \n -Taller: ".$data["location"] ." \n -Dirección: ".$data["location"]." \n -Fecha de cita: ".$dia." \n -Hora de cita: ".$hora. " \n Cuál de las citas agendadas desea reprogramar?";
            foreach($options as $option){
                $object = [
                    "id" => $option["id"],
                    "description" => $option["service"]
                ];
                array_push($AuxOptions, $object);
            }
        }
        
        return response()->json([ 
            'payload' => [
                'message' => "Ok",
                'data' => [
                    'question' => $question,
                    'options' => $AuxOptions,
                    'resultado' => $data,
                    'next_api' => $nextApi 
                ]
            ]
        ]);
    }

    //Api 20
    public function seleccionarCita($reservar_id){
        $client = new \GuzzleHttp\Client();

        $response = $client->request('GET', 'https://agendapro.com/api/public/v1/bookings/'.$reservar_id, [
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
            ],
        ]);

        $data = json_decode($response->getBody(), true);
        $nextApi = 0;
        $question = "";
        $options = [];
        if($data){
            $fecha = Carbon::parse($data["start"]);
            $dia = $fecha->format('d/m/Y');
            $hora = $fecha->format('H:i:s');
            $nextApi = 21;
            $question.= "Hola ".$data["client"]["first_name"].", Le saluda su asesor virtual y estoy para ayudarle! Verificamos que su cita está programada para Derco Center ".$data["location"] ." para la fecha ".$dia." y horario ".$hora. ". Por favor indiqueme el motivo de su reprogramación: "; 

            $options = [
                [
                    "id" => 1,
                    "description" => "1. Reprogramación por Hora."
                ],
                [
                    "id" => 2,
                    "description" => "2. Reprogramación por Fecha."
                ],
                [
                    "id" => 3,
                    "description" => "3. Reprogramación por Local Derco Center Lima."
                ],
                [
                    "id" => 4,
                    "description" => "4. Reprogramación por Servicio."
                ]
            ];
        }
        
        return response()->json([ 
            'payload' => [
                'message' => "Ok",
                'data' => [
                    'question' => $question,
                    'options' => $options,
                    'resultado' => $data,
                    'next_api' => $nextApi 
                ]
            ]
        ]);
    }

    //Api 21
    public function reprogramacionPorHora($reservar_id){ 
        $client = new \GuzzleHttp\Client();

        $response = $client->request('GET', 'https://agendapro.com/api/public/v1/bookings/'.$reservar_id, [
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
            ],
        ]);

        $registro = json_decode($response->getBody(), true);
        if(!$registro){
            return [];
        }

        $nextApi = 22;
        $fecha = Carbon::parse($registro["start"]);
        $local = $registro["location_id"];
        $dia = $fecha->format('d/m/Y');
        $diaAux = $fecha->format('Y-m-d');
        $hora = $fecha->format('H:i:s');    
        $response2 = $client->request('GET', 'https://agendapro.com/api/public/v1/bookings', [
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
            ],
        ]);

        $body = json_decode($response2->getBody(), true);
        $options = [];
        $horas = [$hora];
        $fecha_inicial = Carbon::parse($diaAux.' 08:00:00', 'UTC');
        $horario_incial = 8;
        $horario_final = 17;
        for($i = 0;$i < count($body) ;$i++){
            $auxFecha = Carbon::parse($body[$i]["start"]);
            $auxDia = $auxFecha->format('d/m/Y');
            $auxHora = $auxFecha->format('H:i:s');
            if($dia == $auxDia && $local == $body[$i]["location_id"] && $reservar_id != $body[$i]["id"] ){
                array_push($horas, $auxHora);
                //array_push($options, $body[$i]);
            }
        }
        for($i = $horario_incial; $i < $horario_final ;$i++ ){
            array_push($options, $fecha_inicial->addHour());
        }   
        return response()->json([ 
            'payload' => [
                'message' => "Ok",
                'data' => [
                    //'question' => $options,
                    'options' => $options,
                    'resultado' => $registro,
                    'next_api' => $nextApi,
                    'horas' => $horas
                ]
            ]
        ]);
    }
    
    /* public function seleccionarReprogramacionPorHora(Request $request){ 
        $reserva_id = $request->id;
        $start = $request->start;
        $end = $request->end;

        $status_id = 1; //reservado
        
        $client = new \GuzzleHttp\Client();
        $response = $client->request('GET', 'https://agendapro.com/api/public/v1/bookings/'.$reserva_id, [
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
            ],
        ]);

        $registro = json_decode($response->getBody(), true);
        if(!$registro){
            return [];
        }

        $nextApi = 22;
        $fecha = Carbon::parse($registro["start"]);
        $local = $registro["location_id"];
        $dia = $fecha->format('d/m/Y');
        $diaAux = $fecha->format('Y-m-d');
        $hora = $fecha->format('H:i:s');    
        $response2 = $client->request('GET', 'https://agendapro.com/api/public/v1/bookings', [
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
            ],
        ]);

        $body = json_decode($response2->getBody(), true);
        $options = [];
        $horas = [$hora];
        $fecha_inicial = Carbon::parse($diaAux.' 08:00:00', 'UTC');
        $horario_incial = 8;
        $horario_final = 17;
        for($i = 0;$i < count($body) ;$i++){
            $auxFecha = Carbon::parse($body[$i]["start"]);
            $auxDia = $auxFecha->format('d/m/Y');
            $auxHora = $auxFecha->format('H:i:s');
            if($dia == $auxDia && $local == $body[$i]["location_id"] && $reservar_id != $body[$i]["id"] ){
                array_push($horas, $auxHora);
                //array_push($options, $body[$i]);
            }
        }
        for($i = $horario_incial; $i < $horario_final ;$i++ ){
            array_push($options, $fecha_inicial->addHour());
        }   
        return response()->json([ 
            'payload' => [
                'message' => "Ok",
                'data' => [
                    //'question' => $options,
                    'options' => $options,
                    'resultado' => $registro,
                    'next_api' => $nextApi,
                    'horas' => $horas
                ]
            ]
        ]);
    } */
}

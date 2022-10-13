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
                'isSuccess' => true,
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
        if($data){
            $fecha = Carbon::parse($data["start"]);
            $dia = $fecha->format('d/m/Y');
            $hora = $fecha->format('H:i:s');
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
            'isSuccess' => true,
            'message' => "Ok",
            'data' => [
                'question' => $question,
                'options' => $AuxOptions,
                'resultado' => $data,
                'next_api' => 'seleccionarCita' 
            ]
        ]);
    }

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
            'isSuccess' => true,
            'message' => "Ok",
            'data' => [
                'question' => $question,
                'options' => $options,
                'resultado' => $data,
                'next_api' => $nextApi 
            ]
        ]);
    }

    public function reprogramacionPorHora($reserva_id){ 
        $client = new \GuzzleHttp\Client();

        $registro = self::obtenerReserva($reserva_id);
        if(!$registro){
            return [];
        }

        $service = self::obtenerServicio($registro["service_id"]);

        $fecha = Carbon::parse($registro["start"]);
        $local = $registro["location_id"];
        $dia = $fecha->format('d-m-Y');
        $hora = $fecha->format('H:i:s');    
        $response = $client->request('GET', 'https://agendapro.com/api/public/v1/bookings', [
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
            ],
        ]);

        $body = json_decode($response->getBody(), true);
        $options = [];
        $horas = [$hora];
        $horarios = [ '08:00:00', '09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00'];
        
        $fecha_inicial = Carbon::parse($dia.' 08:00:00', 'UTC');
        for($i = 0;$i < count($body) ;$i++){
            $auxFecha = Carbon::parse($body[$i]["start"]);
            $auxDia = $auxFecha->format('d-m-Y');
            $auxHora = $auxFecha->format('H:i:s');
            if($dia == $auxDia && $local == $body[$i]["location_id"] && $reserva_id != $body[$i]["id"] ){
                array_push($horas, $auxHora);
            }
        }
        
        foreach($horas as $hour){
            for($i = 0; $i < count($horarios); $i++){
                $fecha_inicial = Carbon::parse($dia.' '.$horarios[$i], 'UTC');
                $startDate = Carbon::parse($fecha_inicial);
                $endDate = Carbon::parse($fecha_inicial->addHour());
                $startHora = $startDate->format('H:i:s');
                $endHora = $endDate->format('H:i:s');
                if($hour >= $startHora && $hour <= $endHora){
                    array_splice($horarios, $i, 1);
                }
            };
        }
        if(count($horarios) == 0){
            $question = "Estimado cliente, no contamos con horarios disponibles en la fecha programada ¿Desea reprogramar de Fecha?";
            $options = [
                [
                    "start" => "NO",
                    "end" => "",
                    "description" => "1. No"
                ],
                [
                    "start" => "SI",
                    "end" => "",
                    "description" => "2. Si"
                ]
            ];            

            return response()->json([ 
                'payload' => [
                    'isSuccess' => false,
                    'message' => "Ok",
                    'data' => [
                        'question' => $question,
                        'options' => $options
                        
                    ]
                ]
            ]);
        }
        foreach($horarios as $row){
            $start = Carbon::parse($dia.' '.$row, 'UTC');
            $end = Carbon::parse($dia.' '.$row, 'UTC');
            array_push($options, [
                "start" => $start,
                "end" => $end->addMinutes($service["duration"]),
                "description" => $row
            ]);
        }   
        $question = "Estimado cliente, para el día ".$dia." contamos con los siguientes turnos disponibles en el taller ".$registro["location"];
        return response()->json([ 
            'isSuccess' => true,
            'message' => "Ok",
            'data' => [
                'question' => $question,
                'options' => $options,
                'next_api' => 'guardarReprogramacion'
                    
            ]
        ]);
    }

    public function reprogramacionPorFecha(Request $request){ 

        $request->validate([
            'id' => ['required'],
            'date' => ['required']
        ]);

        $reserva_id = $request->id;
        $date = $request->date;

        $client = new \GuzzleHttp\Client();

        $registro = self::obtenerReserva($reserva_id);
        if(!$registro){
            return [];
        }
        $service = self::obtenerServicio($registro["service_id"]);

        $fecha = Carbon::parse($date);
        $local = $registro["location_id"];
        $dia = $fecha->format('d-m-Y');
        $response = $client->request('GET', 'https://agendapro.com/api/public/v1/bookings', [
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
            ],
        ]);

        $data = json_decode($response->getBody(), true);
        $options = [];
        $horas = ['06:00:00'];
        $horarios = [ '08:00:00', '09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00'];
        
        for($i = 0;$i < count($data) ;$i++){
            $auxFecha = Carbon::parse($data[$i]["start"]);
            $auxDia = $auxFecha->format('d-m-Y');
            $auxHora = $auxFecha->format('H:i:s');
            
            if($dia == $auxDia && $local == $data[$i]["location_id"] ){
                array_push($horas, $auxHora);
            }
        }
        
        foreach($horas as $hour){
            for($i = 0; $i < count($horarios); $i++){
                $fecha_inicial = Carbon::parse($dia.' '.$horarios[$i], 'UTC');
                $startDate = Carbon::parse($fecha_inicial);
                $endDate = Carbon::parse($fecha_inicial->addHour());
                $startHora = $startDate->format('H:i:s');
                $endHora = $endDate->format('H:i:s');
                if($hour >= $startHora && $hour <= $endHora){
                    array_splice($horarios, $i, 1);
                }
            };
        }
        if(count($horarios) == 0){
            $question = "Estimado cliente, las fechas disponibles más cercanas en el taller indicado son las siguientes:";
            $options = [
                [
                    "start" => Carbon::parse($fecha->addDays(1))->format('d/m/Y'),
                    "end" => "",
                    "description" => Carbon::parse($fecha)->format('d/m/Y')
                ],
                [
                    "start" => Carbon::parse($fecha->addDays(1))->format('d/m/Y'),
                    "end" => "",
                    "description" => Carbon::parse($fecha)->format('d/m/Y')
                ],
                [
                    "start" => Carbon::parse($fecha->addDays(1))->format('d/m/Y'),
                    "end" => "",
                    "description" => Carbon::parse($fecha)->format('d/m/Y')
                ]
            ];            

            return response()->json([ 
                'isSuccess' => false,
                'message' => "Ok",
                'data' => [
                    'question' => $question,
                    'options' => $options
                    
                ]
            ]);
        }
        foreach($horarios as $row){
            $start = Carbon::parse($dia.' '.$row, 'UTC');
            $end = Carbon::parse($dia.' '.$row, 'UTC');
            array_push($options, [
                "start" => $start,
                "end" => $end->addMinutes($service["duration"]),
                "description" => $row
            ]);
        }   
        $question = "Estimado cliente, para el día ".$dia." contamos con los siguientes turnos disponibles en el taller ".$registro["location"];
        return response()->json([ 
            'isSuccess' => true,
            'message' => "Ok",
            'data' => [
                'question' => $question,
                'options' => $options
                
            ]
        ]);
    }
    
    public function guardarReprogramacion(Request $request){

        $request->validate([
            'id' => ['required'],
            'start' => ['required'],
            'end' => ['required']
        ]);

        $reserva_id = $request->id;
        $start = $request->start;
        $end = $request->end;
        $status_id = 1; //reservado

        $registro = self::obtenerReserva($reserva_id);
        if(!$registro){
            return [];
        }   
        $local = self::obtenerTaller($registro["location_id"]);
        try{
            $client = new \GuzzleHttp\Client();
            $response = $client->request('PATCH', 'https://agendapro.com/api/public/v1/bookings/'.$reserva_id, [
                'body' => '{"start":'.$start.',"end":'.$end.',"status_id":1,"provider_id":'.$registro["service_provider_id"].'}',
                'headers' => [
                    'accept' => 'application/json',
                    'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
                    'content-type' => 'application/json',
                ],
            ]);
        }catch(\Exception $e){
            return response()->json([ 
                'payload' => [
                    'isSuccess' => false,
                    'message' => $e->getMessage()
                ]
            ]);
        }
        
        $resultado = json_decode($response->getBody(), true); 
        return response()->json([ 
            'message' => "Ok",
            'data' => [
                'response' => $response,
                'resultado' => $resultado
                //'next_api' => $nextApi
            ]
        ]);
        
        $nextApi = 22;
        $fecha = Carbon::parse($registro["start"]);
        $dia = $fecha->format('d-m-Y');
        $hora = $fecha->format('H:i:s'); 

        $message = "Excelente! Se registró la Reprogramación con Éxito! \r\n
        Confirmamos la siguiente información:  \r\n 
        -Datos: ". $registro["client"]["first_name"]." ".$registro["client"]["last_name"]." \r\n
        -Servicio: ". $registro["service"]." \r\n
        -Taller:". $local["name"]."  \r\n
        -Dirección:". $local["address"] ? $local["address"] : $local["second_address"]."  \r\n
        -Fecha de cita: ". $dia."  \r\n
        -Hora de cita:". $hora." \r\n
        -Teléfono: ". $registro["client"]["phone"]." \r\n
        -Correo:". $registro["client"]["email"]." \r\n

        Recuerde que puede comunicarse también a traves de nuestra pagina web:  www.derco.com.pe y nuestra central telefónica: 713-5000 Horario de lunes a viernes de 8.30 a 6pm y sábados de 8.30 a 1pm. Hasta pronto! ";

        
        return response()->json([ 
            'isSuccess' => false,
            'message' => $message
        ]);
    }

    public function obtenerReserva($id){
        $client = new \GuzzleHttp\Client();

        $response = $client->request('GET', 'https://agendapro.com/api/public/v1/bookings/'.$id, [
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
            ],
        ]);

        $registro = json_decode($response->getBody(), true);
        return $registro;
    }

    public function obtenerTaller($id){
        $client = new \GuzzleHttp\Client();

        $response = $client->request('GET', 'https://agendapro.com/api/public/v1/locations', [
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
            ],
        ]);
        $data = json_decode($response->getBody(), true);
        $registro  = null;
        foreach($data["locations"] as $row){
            if($row["id"] == $id){
                $registro = $row;
                break;
            }
        }
        return $registro;
    }

    public function obtenerServicio($id){
        $client = new \GuzzleHttp\Client();

        $response = $client->request('GET', 'https://agendapro.com/api/public/v1/services/'.$id, [
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
            ],
        ]);

        $registro = json_decode($response->getBody(), true);
        return $registro;
    }
    
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiciosTallerModel;
use App\Models\TallerModel;
use Carbon\Carbon;

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

    public function buscarRerserva($placa){
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
            $marca = "";
            $modelo = "";
            $service = self::_obtenerServicio($data["service_id"]);
            $location = self::_obtenerTaller($data["location_id"]);
            foreach($data['client']['custom_attributes'] as $row){
                if($row["custom_attribute_id"] == 7750){
                    $marca = $row["value"];
                }
                if($row["custom_attribute_id"] == 7790){
                    $modelo = $row["value"];
                }
            }
            $question.= "Estimado ".$data["client"]["first_name"].". Para informarle que  Usted ya cuenta con agendamiento de cita en taller. Se detalla: \n -Servicio: ".$data["service"]. " \n -Taller: ".$data["location"] ." \n -Dirección: ".$data["location"]." \n -Fecha de cita: ".$dia." \n -Hora de cita: ".$hora;
            return response()->json([ 
                'isSuccess' => true,
                'message' => "Ok",
                'data' => [
                    'question' => $question,
                    'options' => [
                        [
                            "id" => 1,
                            "description" => "1. SI"
                        ],
                        [
                            "id" => 2,
                            "description" => "2. NO"
                        ]
                    ],
                    'booking' => [
                        "id" => $data["id"],
                        "first_name" => $data["client"]["first_name"],
                        "last_name" => $data["client"]["last_name"],
                        "email" => $data["client"]["email"],
                        "phone" => $data["client"]["phone"],
                        "identification" => $data["client"]["identification"],
                        "status" => $data["status"],
                        "service" => $service,
                        "location" => $location,
                        "marca" => $marca,
                        "modelo" => $modelo,
                        "service_provider_id" => $data["service_provider_id"],
                        "start" => $data["start"],
                        "end" => $data["end"],
                    ]
                ]
            ]);
        }

        return response()->json([ 
            'isSuccess' => false,
            'message' => "Ok",
            'data' => [
                'question' => "Hola, Le saluda su asesor virtual y estoy para ayudarle! Por favor indiqueme para qué taller de nuestra Red Derco Center desea programar su cita?",
                'options' => [
                    [
                        "id" => "LIMA",
                        "description" => "1. Lima"
                    ],
                    [
                        "id" => "OTRO DEPARTAMENTO",
                        "description" => "2. Otro Departamento"
                    ]
                ]
            ]
        ]);
    }

    public function servicios(Request $request)
    {
        $request->validate([
            'marca' => ['required'],
            'modelo' => ['required'],
            'departamento' => ['required'],
        ]);
        $ubicacion = strtoupper($request->departamento);
        $marca = strtoupper($request->marca);
        $modelo = strtoupper($request->modelo);
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
            $options = ServiciosTallerModel::select('servicios.id', 'servicios.descripcion')
                ->join('servicios', 'servicios.id', 'servicios_x_taller.id_servicio')
                ->join('talleres', 'talleres.id', 'servicios_x_taller.id_taller')
                ->where('servicios_x_taller.marca', $marca)
                ->where('talleres.departamento', 'LIMA')
                ->where('servicios_x_taller.estado', 1)
                ->groupBy('servicios.id', 'servicios.descripcion')
                ->get();
            /* for ($i=0; $i < count($options); $i++) {
                $row = TallerModel::where('id', $options[$i]["id"])->first();
                //return $row;
                if($row['restriccion_x_modelo'] && is_array($row['restriccion_x_modelo'])){
                    $key = array_search($modelo, $row['restriccion_x_modelo']);
                    if($key >= 0){
                        unset($options[$i]);
                    }
                }
            } */
            $i =1;
            foreach($options as $row){
                $row["descripcion"] = $i.". ".$row["descripcion"];
                $i+= 1;
            }
        }
        
        return response()->json([ 
            'message' => "Ok",
            'data' => [
                'question' => $question,
                'options' => $options
            ]
        ]);
    }

    public function seleccionarServicio(Request $request)
    {
        $request->validate([
            'marca' => ['required'],
            'modelo' => ['required'],
            'service_id' => ['required'],
        ]);
        $servicio = $request->service_id;
        $marca = strtoupper($request->marca);
        $modelo = strtoupper($request->modelo);
        $question = "¿En qué distrito de nuestra Red Derco Center Lima desea programar su cita?";
        $restriccion = "";

        $options = ServiciosTallerModel::select('talleres.id', 'talleres.distrito', 'talleres.nombre as descripcion')
                ->join('servicios', 'servicios.id', 'servicios_x_taller.id_servicio')
                ->join('talleres', 'talleres.id', 'servicios_x_taller.id_taller')
                ->where('servicios_x_taller.id_servicio', $servicio)
                ->where('servicios_x_taller.marca', $marca)
                ->where('talleres.departamento', 'LIMA')
                ->where('servicios_x_taller.estado', 1)
                ->get();
        //return $options;
        for ($i=0; $i < count($options); $i++) {
            $row = TallerModel::where('id', $options[$i]["id"])->first();
            //return $row;
            if($row['restriccion_x_modelo'] && is_array($row['restriccion_x_modelo'])){
                $key = array_search($modelo, $row['restriccion_x_modelo']);
                if($key >= 0){
                    unset($options[$i]);
                }
            }
        }

        switch ($servicio){
            case 4:
            case 5:
            case 6:
                $restriccion = "Estimado cliente, para informarle que para el servicio de MANTENIMIENTO NOCTURNO solo aplica para mantenimientos preventivos sin observaciones.  No se hacen diagnósticos ni reparaciones (Max 75000 Km de recorrido)";
                break;
        }
        return response()->json([ 
            'isSuccess' => true,
            'message' => "Ok",
            'data' => [
                'question' => $question,
                'options' => $options,
                'restriccion' => $restriccion
            ]
        ]);
    }

    public function seleccionarDistrito(Request $request)
    {
        $request->validate([
            'distrito' => ['required'],
            'marca' => ['required'],
            'modelo' => ['required']
        ]);
        $distrito = strtoupper($request->input('distrito'));
        $marca = $request->input('marca');
        $modelo = $request->input('modelo');
        $question = "Estimado cliente, en el distrito de ".$distrito." contamos con los siguientes locales:";
        $options = TallerModel::select('id', 'descripcion', 'direccion')
            ->where('distrito', $distrito)
            ->where('estado', 1)
            ->get();
        $i =1;
        foreach($options as $row){
            $row["descripcion"] = $i.". ".$row["descripcion"].": ".$row["direccion"];
            $i+= 1;
        }
    
        return response()->json([ 
            'isSuccess' => true,
            'message' => "Ok",
            'data' => [
                'question' => $question,
                'options' => $options
            ]
        ]);
    }

    public function guardarReserva(Request $request){

        $request->validate([
            'start' => ['required'],
            'end' => ['required'],
            'service_id' => ['required'],
            'provider_id' => ['required'],
            'first_name' => ['required'],
            'last_name' => ['required'],
            'email' => ['required'],
            'phone' => ['required'],
            'identification_number' => ['required']
        ]);

        $booking = $request->booking;

        try{
            $client = new \GuzzleHttp\Client();

            $data = $client->request('POST', 'https://agendapro.com/api/public/v1/bookings', [
            'body' => '{"price":0,"start":'.$request->start.',"end":'.$request->end.',"service_id":'.$request->service_id.',"provider_id":'.$request->provider_id.',"first_name":'.$request->first_name.',"last_name":'.$request->last_name.',"email":'.$request->email.',"phone":'.$request->phone.',"identification_number":'.$request->identification_number.'}',
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
                'content-type' => 'application/json',
            ],
            ]);

        }catch(\Exception $e){
            return response()->json([ 
                    'isSuccess' => false,
                    'message' => $e->getMessage()
            ]);
        }
        
        $booking = json_decode($data->getBody(), true); 
        
        $fecha = Carbon::parse($booking['start']);
        $dia = $fecha->format('d-m-Y');
        $hora = $fecha->format('H:i:s'); 

        $message = "Excelente! Se registró la Reprogramación con Éxito! \r\n
        Confirmamos la siguiente información:  \r\n 
        -Datos: ". $booking["client"]["first_name"]." ".$booking["client"]["last_name"]." \r\n
        -Servicio: ". $booking["service"]." \r\n
        -Taller:". $booking["location"]."  \r\n

        -Fecha de cita: ". $dia."  \r\n
        -Hora de cita:". $hora." \r\n
        -Teléfono: ". $request->phone." \r\n
        -Correo:". $booking["client"]["email"]." \r\n

        Recuerde que puede comunicarse también a traves de nuestra pagina web:  www.derco.com.pe y nuestra central telefónica: 713-5000 Horario de lunes a viernes de 8.30 a 6pm y sábados de 8.30 a 1pm. Hasta pronto! ";

        
        return response()->json([ 
            'isSuccess' => true,
            'message' => $message
        ]);
    }

    /* 
    *  2.	CONSULTA SOBRE AGENDAMIENTO DE CITA 
    */
    public function reprogramarReserva($placa){

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
                'options' => $AuxOptions
            ]
        ]);
    }

    public function seleccionarReserva($reservar_id){
        $client = new \GuzzleHttp\Client();

        $response = $client->request('GET', 'https://agendapro.com/api/public/v1/bookings/'.$reservar_id, [
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
            ],
        ]);

        $data = json_decode($response->getBody(), true);
        $question = "";
        $options = [];
        if($data){
            $fecha = Carbon::parse($data["start"]);
            $dia = $fecha->format('d/m/Y');
            $hora = $fecha->format('H:i:s');
            $service = self::_obtenerServicio($data["service_id"]);
            $location = self::_obtenerTaller($data["location_id"]);
            $marca = "";
            $modelo = "";
            foreach($data['client']['custom_attributes'] as $row){
                if($row["custom_attribute_id"] == 7750){
                    $marca = $row["value"];
                }
                if($row["custom_attribute_id"] == 7790){
                    $modelo = $row["value"];
                }
            }
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
            return response()->json([ 
                'isSuccess' => true,
                'message' => "Ok",
                'data' => [
                    'question' => $question,
                    'options' => $options,
                    'booking' => [
                        "id" => $data["id"],
                        "first_name" => $data["client"]["first_name"],
                        "last_name" => $data["client"]["last_name"],
                        "email" => $data["client"]["email"],
                        "phone" => $data["client"]["phone"],
                        "identification" => $data["client"]["identification"],
                        "status" => $data["status"],
                        "service" => $service,
                        "location" => $location,
                        "marca" => $marca,
                        "modelo" => $modelo,
                        "service_provider_id" => $data["service_provider_id"],
                        "start" => $data["start"],
                        "end" => $data["end"],
                    ]
                ]
            ]);
        }
        return response()->json([ 
            'isSuccess' => false,
            'message' => "Error",
            'data' => [
                'question' => "",
                'options' => $options,
                'user' => $data
            ]
        ]);
        
    }

    public function reprogramacionPorHora(Request $request){

        $request->validate([
            'booking' => ['required'],
            'booking.id' => ['required'],
            'booking.location' => ['required'],
            'booking.location.id' => ['required'],
            'booking.location.name' => ['required'],
            'booking.service.duration' => ['required']
        ]);

        $booking = $request->booking;

        $fecha = Carbon::parse($booking["start"]);
        $local = $booking["location"]["id"];
        $dia = $fecha->format('d-m-Y');
        $options = [];
        $horarios = self::_obtenerTurnos($dia, $local);
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
                "end" => $end->addMinutes($booking["service"]["duration"]),
                "description" => $row
            ]);
        }   
        $question = "Estimado cliente, para el día ".$dia." contamos con los siguientes turnos disponibles en el taller ".$booking["location"]["name"];
        return response()->json([ 
            'isSuccess' => true,
            'message' => "Ok",
            'data' => [
                'question' => $question,
                'options' => $options
            ]
        ]);
    }

    public function reprogramacionPorFecha(Request $request){ 

        $request->validate([
            'booking' => ['required'],
            'booking.id' => ['required'],
            'booking.location' => ['required'],
            'booking.location.id' => ['required'],
            'booking.location.name' => ['required'],
            'booking.service.duration' => ['required'],
            'date_start' => ['required']
        ]);
        
        $booking = $request->booking;
        $date = $request->date_start;

        $fecha = Carbon::parse($date);
        $local = $booking["location"]["id"];
        $dia = $fecha->format('d-m-Y');

        $options = [];
        
        $horarios = self::_obtenerTurnos($dia, $local);
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
                "end" => $end->addMinutes($booking["service"]["duration"]),
                "description" => $row
            ]);
        }   
        $question = "Estimado cliente, para el día ".$dia." contamos con los siguientes turnos disponibles en el taller ".$booking["location"]["name"];
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
            'booking' => ['required'],
            'booking.id' => ['required'],
            'booking.first_name' => ['required'],
            'booking.last_name' => ['required'],
            'booking.phone' => ['required'],
            'booking.email' => ['required'],
            'booking.service_provider_id' => ['required'],
            'booking.location' => ['required'],
            'booking.location.id' => ['required'],
            'booking.location.name' => ['required'],
            'booking.location.address' => ['required'],
            'booking.location.second_address' => ['required'],
            'booking.service.name' => ['required'],
            'booking.service.duration' => ['required'],
            'date_start' => ['required'],
            'date_end' => ['required']
        ]);

        $booking = $request->booking;
        $start = $request->date_start;
        $end = $request->date_end;
        $status_id = 1; //reservado 

        try{
            $client = new \GuzzleHttp\Client();
            $response = $client->request('PATCH', 'https://agendapro.com/api/public/v1/bookings/'.$booking["id"], [
                'body' => '{"start":'.$start.',"end":'.$end.',"status_id":1,"provider_id":'.$booking["service_provider_id"].'}',
                'headers' => [
                    'accept' => 'application/json',
                    'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
                    'content-type' => 'application/json',
                ],
            ]);
        }catch(\Exception $e){
            return response()->json([ 
                    'isSuccess' => false,
                    'message' => $e->getMessage()
            ]);
        }
        
        $resultado = json_decode($response->getBody(), true); 
        return response()->json([ 
            'isSuccess' => true,
            'message' => "Ok",
            'data' => [
                'response' => $resultado
            ]
        ]);
        
        $fecha = Carbon::parse($start);
        $dia = $fecha->format('d-m-Y');
        $hora = $fecha->format('H:i:s'); 

        $message = "Excelente! Se registró la Reprogramación con Éxito! \r\n
        Confirmamos la siguiente información:  \r\n 
        -Datos: ". $booking["first_name"]." ".$booking["last_name"]." \r\n
        -Servicio: ". $booking["service"]["name"]." \r\n
        -Taller:". $booking["location"]["name"]."  \r\n
        -Dirección:". $booking["location"]["address"] ? $booking["location"]["address"] : $booking["location"]["second_address"]."  \r\n
        -Fecha de cita: ". $dia."  \r\n
        -Hora de cita:". $hora." \r\n
        -Teléfono: ". $booking["phone"]." \r\n
        -Correo:". $booking["email"]." \r\n

        Recuerde que puede comunicarse también a traves de nuestra pagina web:  www.derco.com.pe y nuestra central telefónica: 713-5000 Horario de lunes a viernes de 8.30 a 6pm y sábados de 8.30 a 1pm. Hasta pronto! ";

        
        return response()->json([ 
            'isSuccess' => false,
            'message' => $message
        ]);
    }

    public function reprogramacionPorTaller(Request $request){ 

        $request->validate([
            'booking' => ['required'],
            'booking.id' => ['required'],
            'booking.marca' => ['required'],
            'booking.modelo' => ['required'],
            'booking.first_name' => ['required']
        ]);
        //$servicio = $request->input('id_servicio');
        $booking = $request->booking;
        $marca = $booking['marca'];
        $modelo = $booking['modelo'];
        $question = "Hola ".$booking["first_name"].", Le saluda su asesor virtual y estoy para ayudarle! Por favor indiqueme para qué taller de nuestra Red Derco Center Lima desea Reprogramar su cita?";
        
        $options = ServiciosTallerModel::select('talleres.id', 'talleres.distrito', 'talleres.nombre')
                //->join('servicios', 'servicios.id', 'servicios_x_taller.id_servicio')
                ->join('talleres', 'talleres.id', 'servicios_x_taller.id_taller')
                //->where('servicios_x_taller.id_servicio', $servicio)
                ->where('servicios_x_taller.marca', $marca)
                ->where('talleres.departamento', 'LIMA')
                ->where('servicios_x_taller.estado', 1)
                ->groupBy('talleres.id','talleres.distrito', 'talleres.nombre')
                ->get();

        $data = [];
        for ($i=0; $i < count($options); $i++) {
            $row = TallerModel::where('id', $options[$i]["id"])->first();
            if($row['restriccion_x_modelo'] && is_array($row['restriccion_x_modelo'])){
                $key = array_search($modelo, $row['restriccion_x_modelo']);
                if($key < 0){
                    array_push($data, $options[$i]);
                }
            }
        }

        return response()->json([ 
            'message' => "Ok",
            'isSuccess' => true,
            'data' => [
                'question' => $question,
                'options' => $data
            ]
        ]);
    }

    public function reprogramacionPorServicio(Request $request){ 

        $request->validate([
            'booking' => ['required'],
            'booking.id' => ['required'],
            'booking.first_name' => ['required'],
            'booking.last_name' => ['required'],
            'booking.start' => ['required'],
            'booking.end' => ['required'],
            'booking.marca' => ['required'],
            'booking.modelo' => ['required'],
            'booking.phone' => ['required'],
            'booking.email' => ['required'],
            'booking.service_provider_id' => ['required'],
            'booking.location' => ['required'],
            'booking.location.id' => ['required'],
            'booking.location.name' => ['required'],
            'booking.location.address' => ['required'],
            'booking.location.second_address' => ['required'],
            'booking.service.name' => ['required'],
            'booking.service.duration' => ['required'],
            'booking.service.duration' => ['required']
        ]);

        $booking = $request->booking;
        $marca = $booking['marca'];
        $modelo = $booking['modelo'];
        $question = "Hola ".$booking["first_name"].", Le saluda su asesor virtual y estoy para ayudarle! Por favor indiqueme para qué taller de nuestra Red Derco Center Lima desea Reprogramar su cita?";
        
         $options = ServiciosTallerModel::select('servicios.codigo as id', 'servicios.descripcion')
                ->join('servicios', 'servicios.id', 'servicios_x_taller.id_servicio')
                ->join('talleres', 'talleres.id', 'servicios_x_taller.id_taller')
                ->where('servicios_x_taller.marca', $marca)
                ->where('talleres.departamento', 'LIMA')
                ->where('servicios_x_taller.estado', 1)
                ->groupBy('servicios.codigo', 'servicios.descripcion')
                ->orderBy('servicios.id')
                ->get();

        /* for ($i=0; $i < count($options); $i++) {
            $row = TallerModel::where('id', $options[$i]["id"])->first();
            //return $row;
            if($row['restriccion_x_modelo'] && is_array($row['restriccion_x_modelo'])){
                $key = array_search($modelo, $row['restriccion_x_modelo']);
                if($key >= 0){
                    unset($options[$i]);
                }
            }
        } */

        return response()->json([ 
            'message' => "Ok",
            'isSuccess' => true,
            'data' => [
                'question' => $question,
                'options' => $options
            ]
        ]);
    }

    public function guardarReprogramacionPorTaller(Request $request){

        $request->validate([
            'booking' => ['required'],
            'booking.id' => ['required'],
            'booking.first_name' => ['required'],
            'booking.last_name' => ['required'],
            'booking.start' => ['required'],
            'booking.end' => ['required'],
            'booking.phone' => ['required'],
            'booking.email' => ['required'],
            'booking.service_provider_id' => ['required'],
            'booking.location' => ['required'],
            'booking.location.id' => ['required'],
            'booking.location.name' => ['required'],
            'booking.location.address' => ['required'],
            'booking.location.second_address' => ['required'],
            'booking.service.name' => ['required'],
            'booking.service.duration' => ['required'],
            'booking.service.duration' => ['required']
        ]);

        $booking = $request->booking;
        $start = $request->date_start;
        $end = $request->date_end;
        $status_id = 1; //reservado 

        try{
            $client = new \GuzzleHttp\Client();
            $response = $client->request('PATCH', 'https://agendapro.com/api/public/v1/bookings/'.$booking["id"], [
                'body' => '{"start":'.$start.',"end":'.$end.',"status_id":1,"provider_id":'.$booking["service_provider_id"].'}',
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
            ]
        ]);
        
        $fecha = Carbon::parse($start);
        $dia = $fecha->format('d-m-Y');
        $hora = $fecha->format('H:i:s'); 

        $message = "Excelente! Se registró la Reprogramación con Éxito! \r\n
        Confirmamos la siguiente información:  \r\n 
        -Datos: ". $booking["first_name"]." ".$booking["last_name"]." \r\n
        -Servicio: ". $booking["service"]["name"]." \r\n
        -Taller:". $booking["location"]["name"]."  \r\n
        -Dirección:". $booking["location"]["address"] ? $booking["location"]["address"] : $booking["location"]["second_address"]."  \r\n
        -Fecha de cita: ". $dia."  \r\n
        -Hora de cita:". $hora." \r\n
        -Teléfono: ". $booking["phone"]." \r\n
        -Correo:". $booking["email"]." \r\n

        Recuerde que puede comunicarse también a traves de nuestra pagina web:  www.derco.com.pe y nuestra central telefónica: 713-5000 Horario de lunes a viernes de 8.30 a 6pm y sábados de 8.30 a 1pm. Hasta pronto! ";

        
        return response()->json([ 
            'isSuccess' => false,
            'message' => $message
        ]);
    }

    public function turnosPorTaller(Request $request){ 

        $request->validate([
            'booking' => ['required'],
            'booking.id' => ['required'],
            'booking.start' => ['required'],
            'booking.end' => ['required'],
            'booking.location' => ['required'],
            'booking.location.name' => ['required'],
            'booking.first_name' => ['required'],
            'location_id' => ['required'],
        ]);

        $booking = $request->booking;
        $location_id = $request->location_id;

        $fecha = Carbon::parse($booking['start']);
        $dia = $fecha->format('d-m-Y');
        $horarios = self::_obtenerTurnos($dia, $location_id);
        $options = [];

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
                //"end" => $end->addMinutes($service["duration"]),
                "description" => $row
            ]);
        }   
        
        $question = "Estimado cliente, para el día ".$dia." contamos con los siguientes turnos disponibles en el taller ".$booking["location"]["name"];
        return response()->json([ 
            'isSuccess' => true,
            'message' => "Ok",
            'data' => [
                'question' => $question,
                'options' => $options
                
            ]
        ]);
    }

    public function obtenerTalleres(Request $request)
    {
        $request->validate([
            'booking' => ['required'],
            'booking.id' => ['required'],
            'booking.start' => ['required'],
            'booking.end' => ['required'],
            'booking.location' => ['required'],
            'booking.location.name' => ['required'],
            'booking.first_name' => ['required'],
            'marca' => ['required'],
            'modelo' => ['required']
        ]);

        $servicio = $request->service_id;
        $marca = strtoupper($request->marca);
        $modelo = strtoupper($request->modelo);
        $question = "¿En qué distrito de nuestra Red Derco Center Lima desea programar su cita?";
        $restriccion = "";

        $options = ServiciosTallerModel::select('talleres.id', 'talleres.distrito', 'talleres.nombre as descripcion')
                ->join('servicios', 'servicios.id', 'servicios_x_taller.id_servicio')
                ->join('talleres', 'talleres.id', 'servicios_x_taller.id_taller')
                ->where('servicios_x_taller.id_servicio', $servicio)
                ->where('servicios_x_taller.marca', $marca)
                ->where('talleres.departamento', 'LIMA')
                ->where('servicios_x_taller.estado', 1)
                ->get();
        //return $options;
        for ($i=0; $i < count($options); $i++) {
            $row = TallerModel::where('id', $options[$i]["id"])->first();
            //return $row;
            if($row['restriccion_x_modelo'] && is_array($row['restriccion_x_modelo'])){
                $key = array_search($modelo, $row['restriccion_x_modelo']);
                if($key >= 0){
                    unset($options[$i]);
                }
            }
        }

        switch ($servicio){
            case 4:
            case 5:
            case 6:
                $restriccion = "Estimado cliente, para informarle que para el servicio de MANTENIMIENTO NOCTURNO solo aplica para mantenimientos preventivos sin observaciones.  No se hacen diagnósticos ni reparaciones (Max 75000 Km de recorrido)";
                break;
        }
        return response()->json([ 
            'isSuccess' => true,
            'message' => "Ok",
            'data' => [
                'question' => $question,
                'options' => $options,
                'restriccion' => $restriccion
            ]
        ]);
    }

    public function fechasDisponibles(Request $request){ 

        $request->validate([
            'booking' => ['required'],
            'date_end' => ['required']
        ]);

        $fecha = Carbon::parse($request->date_end);
        $options = [];

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

    public function cancelarReserva($placa){

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
            $question.= "Estimado ".$data["client"]["first_name"].". Para informarle que  Usted ya cuenta con agendamiento de cita en taller. Se detalla: \n -Servicio: ".$data["service"]. " \n -Taller: ".$data["location"] ." \n -Dirección: ".$data["location"]." \n -Fecha de cita: ".$dia." \n -Hora de cita: ".$hora. " \n Cuál de las citas agendadas desea cancelar?";
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
                'options' => $AuxOptions
            ]
        ]);
    }

    public function _obtenerTurnos($dia, $local){

        $client = new \GuzzleHttp\Client();
        $response = $client->request('GET', 'https://agendapro.com/api/public/v1/bookings', [
            'headers' => [
                'accept' => 'application/json',
                'authorization' => 'Basic NmUwbW1rczY6OGd4YmRjbXA1ajA2ZmljY3c1am9hNXV4NHd2bGQzdDNtM2I1cmkxOWdtNmQ4MWY3MXY=',
            ],
        ]);

        $data = json_decode($response->getBody(), true);
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
        return $horarios;
    }

    public function _obtenerReserva($id){
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

    public function _obtenerTaller($id){
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

    public function _obtenerServicio($id){
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

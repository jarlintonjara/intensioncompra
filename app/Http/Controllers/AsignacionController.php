<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\AsignacionModel;
use App\Models\RegistroModel;
use App\Models\IngresoModel;
use App\Http\Requests\StoreAsignacionRequest;
use App\Models\EmplazadoModel;
use App\Models\FacturadoModel;

class AsignacionController extends Controller
{
    public function index(Request $request)
    {
        $auth = new AuthController();
        $user = $auth->getUser($request->bearerToken());
        $query = AsignacionModel::select(
            'registros.created_at',
            'registros.fecha',
            'registros.nombre_completo',
            'registros.documento',
            'registros.celular',
            'registros.correo',
            'registros.marca',
            'registros.modelo',
            'registros.version',
            'registros.color1',
            'registros.color2',
            'registros.color3',
            'registros.anio_modelo',
            'registros.situacion',
            'users.nombre',
            'users.apellido',
            'users.email',
            'tiendas.nombre as tienda',
            'concesionarios.nombre as concesionario',
            'registros.tienda_id',
            'registros.concesionario_id',
            'asignaciones.fecha_distribucion',
            'concesionarios.nombre as concesionario',
            'packing_list.vin',
            'packing_list.marca',
            'packing_list.modelo',
            'packing_list.version',
            'packing_list.color',
            'packing_list.anio_modelo',
            'packing_list.codigo_sap',
            'packing_list.fecha_ingreso',
            'asignaciones.id',
            'users.id as user_id',
            'asignaciones.codigo_reserva',
            'asignaciones.monto_reserva',
            'asignaciones.fecha_reserva',
            'asignaciones.fecha_emplazado',
            'asignaciones.fecha_facturacion',
            'asignaciones.situacion'
        )
            ->Join('registros', 'asignaciones.registro_id', 'registros.id')
            ->Join('packing_list', 'asignaciones.ingreso_id', 'packing_list.id')
            ->Join('users', 'registros.user_id', 'users.id')
            ->Join('concesionarios', 'users.concesionario_id', 'concesionarios.id')
            ->join('tiendas', 'tiendas.id', '=', 'registros.tienda_id')
            ->where('asignaciones.situacion', 'ASIGNADO');
            $data = [];
        switch ($user->role_id) {
            case 1:
                $data = $query->where('registros.user_id', $user->id)->get();
                break;
            case 2:
                $data = $query->where('registros.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                $data =  $query->where('registros.concesionario_id', $user->concesionario_id)->get();
                break;
            case 4:
                $data = $query->where('packing_list.marca', $user->marca)->get();
                break;
            case 5:
                $data = $query->where('packing_list.marca', $user->marca)->get();
                break;
            case 6:
                $data = $query->get();
                break;
            default:
                $data = $query->where('registros.concesionario_id', " ")->get();
        }
        
        foreach($data as $e){
            $vin = Hash::make($e["vin"]);
            $e["vin"]= substr($vin, 0, 15);
        }
        return response()->json(['asignaciones' => $data, 'user' => $user]);
    }
    
    public function reservado(Request $request)
    {
        $auth = new AuthController();
        $user = $auth->getUser($request->bearerToken());
        $query = AsignacionModel::select(
            'registros.created_at',
            'registros.nombre_completo',
            'registros.documento',
            'registros.celular',
            'registros.correo',
            'registros.marca',
            'registros.modelo',
            'registros.version',
            'registros.color1',
            'registros.color2',
            'registros.color3',
            'registros.anio_modelo',
            'registros.situacion',
            'users.nombre',
            'users.apellido',
            'users.email',
            'tiendas.nombre as tienda',
            'concesionarios.nombre as concesionario',
            'registros.tienda_id',
            'registros.concesionario_id',
            'asignaciones.fecha_distribucion',
            'concesionarios.nombre as concesionario',
            'packing_list.vin',
            'packing_list.marca',
            'packing_list.modelo',
            'packing_list.version',
            'packing_list.color',
            'packing_list.anio_modelo',
            'packing_list.codigo_sap',
            'packing_list.fecha_ingreso',
            'asignaciones.id',
            'users.id as user_id',
            'asignaciones.codigo_reserva',
            'asignaciones.monto_reserva',
            'asignaciones.fecha_reserva',
            'asignaciones.fecha_emplazado',
            'asignaciones.fecha_facturacion',
            'asignaciones.situacion'
        )
            ->Join('registros', 'asignaciones.registro_id', 'registros.id')
            ->Join('packing_list', 'asignaciones.ingreso_id', 'packing_list.id')
            ->Join('users', 'registros.user_id', 'users.id')
            ->Join('concesionarios', 'users.concesionario_id', 'concesionarios.id')
            ->join('tiendas', 'tiendas.id', 'registros.tienda_id')
            ->where('asignaciones.situacion', 'RESERVADO');
        switch ($user->role_id) {
            case 1:
                $data = $query->where('registros.user_id', $user->id)->get();
                break;
            case 2:
                $data = $query->where('registros.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                $data = $query->where('registros.concesionario_id', $user->concesionario_id)->get();
                break;
            case 4:
                $data = $query->where('packing_list.marca', $user->marca)->get();
                break;
            case 5:
                $data = $query->where('packing_list.marca', $user->marca)->get();
                break;
            case 6:
                $data = $query->get();
                break;
            default:
                $data = $query->where('registros.concesionario_id', " ")->get();
        }

        foreach ($data as $e) {
            $vin = Hash::make($e["vin"]);
            $e["vin"] = substr($vin, 0, 30);
        }
        return response()->json($data);
    }
    public function facturado(Request $request)
    {
        $auth = new AuthController();
        $user = $auth->getUser($request->bearerToken());
        $query = AsignacionModel::select(
            'registros.created_at',
            'registros.nombre_completo',
            'registros.documento',
            'registros.celular',
            'registros.correo',
            'registros.marca',
            'registros.modelo',
            'registros.version',
            'registros.color1',
            'registros.color2',
            'registros.color3',
            'registros.anio_modelo',
            'registros.situacion',
            'users.nombre',
            'users.apellido',
            'users.email',
            'tiendas.nombre as tienda',
            'concesionarios.nombre as concesionario',
            'registros.tienda_id',
            'registros.concesionario_id',
            'asignaciones.fecha_distribucion',
            'concesionarios.nombre as concesionario',
            'packing_list.vin',
            'packing_list.marca',
            'packing_list.modelo',
            'packing_list.version',
            'packing_list.color',
            'packing_list.anio_modelo',
            'packing_list.codigo_sap',
            'packing_list.fecha_ingreso',
            'asignaciones.id',
            'users.id as user_id',
            'asignaciones.codigo_reserva',
            'asignaciones.monto_reserva',
            'asignaciones.fecha_reserva',
            'asignaciones.fecha_emplazado',
            'asignaciones.fecha_facturacion',
            'asignaciones.situacion'
        )
            ->Join('registros', 'asignaciones.registro_id', 'registros.id')
            ->Join('packing_list', 'asignaciones.ingreso_id', 'packing_list.id')
            ->Join('users', 'registros.user_id', 'users.id')
            ->Join('concesionarios', 'users.concesionario_id', 'concesionarios.id')
            ->join('tiendas', 'tiendas.id', 'registros.tienda_id')
            ->where('asignaciones.situacion', 'FACTURADO');
        switch ($user->role_id) {
            case 1:
                $data = $query->where('registros.user_id', $user->id)->get();
                break;
            case 2:
                $data = $query->where('registros.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                $data = $query->where('registros.concesionario_id', $user->concesionario_id)->get();
                break;
            case 4:
                $data = $query->where('packing_list.marca', $user->marca)->get();
                break;
            case 5:
                $data = $query->where('packing_list.marca', $user->marca)->get();
                break;
            case 6:
                $data = $query->get();
                break;
            default:
                $data = [];
        }
        return response()->json($data);
    }
    public function emplazado(Request $request)
    {
        $auth = new AuthController();
        $user = $auth->getUser($request->bearerToken());
        $query = AsignacionModel::select(
            'registros.created_at',
            'registros.nombre_completo',
            'registros.documento',
            'registros.celular',
            'registros.correo',
            'registros.marca',
            'registros.modelo',
            'registros.version',
            'registros.color1',
            'registros.color2',
            'registros.color3',
            'registros.anio_modelo',
            'registros.situacion',
            'users.nombre',
            'users.apellido',
            'users.email',
            'tiendas.nombre as tienda',
            'concesionarios.nombre as concesionario',
            'registros.tienda_id',
            'registros.concesionario_id',
            'asignaciones.fecha_distribucion',
            'concesionarios.nombre as concesionario',
            'packing_list.vin',
            'packing_list.marca',
            'packing_list.modelo',
            'packing_list.version',
            'packing_list.color',
            'packing_list.anio_modelo',
            'packing_list.codigo_sap',
            'packing_list.fecha_ingreso',
            'asignaciones.id',
            'users.id as user_id',
            'asignaciones.codigo_reserva',
            'asignaciones.monto_reserva',
            'asignaciones.fecha_reserva',
            'asignaciones.fecha_emplazado',
            'asignaciones.fecha_facturacion',
            'asignaciones.situacion'
        )
            ->Join('registros', 'asignaciones.registro_id', 'registros.id')
            ->Join('packing_list', 'asignaciones.ingreso_id', 'packing_list.id')
            ->Join('users', 'registros.user_id', 'users.id')
            ->Join('concesionarios', 'users.concesionario_id', 'concesionarios.id')
            ->join('tiendas', 'tiendas.id', 'registros.tienda_id')
            ->where('asignaciones.situacion', 'EMPLAZADO');
        switch ($user->role_id) {
            case 1:
                $data = $query->where('registros.user_id', $user->id)->get();
                break;
            case 2:
                $data = $query->where('registros.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                $data = $query->where('registros.concesionario_id', $user->concesionario_id)->get();
                break;
            case 4:
                $data = $query->where('packing_list.marca', $user->marca)->get();
                break;
            case 5:
                $data = $query->where('packing_list.marca', $user->marca)->get();
                break;
            case 6:
                $data = $query->get();
                break;
            default:
                $data = [];
        }
        return response()->json($data);
    }
    public function jobEmplazar(){
        $registros = AsignacionModel::select(
            'packing_list.vin',
            'packing_list.marca',
            'packing_list.modelo',
            'packing_list.version',
            'packing_list.color',
            'packing_list.anio_modelo',
            'packing_list.codigo_sap',
            'packing_list.fecha_ingreso',
            'asignaciones.id',
            'asignaciones.fecha_distribucion',
            'asignaciones.codigo_reserva',
            'asignaciones.monto_reserva',
            'asignaciones.fecha_reserva',
            'asignaciones.fecha_a_facturar',
            'asignaciones.fecha_emplazado',
            'asignaciones.fecha_facturacion',
            'asignaciones.situacion'
        )
            ->Join('packing_list', 'asignaciones.ingreso_id', 'packing_list.id')
            ->where('asignaciones.situacion', 'RESERVADO')->get();

        foreach ($registros as $registro) {
            $row = EmplazadoModel::where('vin', $registro->vin)->first();
            if ($row) {
                $input = $row->fecha_emplazamiento;
                $date = strtotime($input);

                $fecha = date('Y-m-j');
                $nuevafecha = strtotime('+2 day', strtotime($fecha));
                $nuevafecha = date('Y-m-d', $nuevafecha);
                $registro->situacion = 'EMPLAZADO';
                $registro->fecha_emplazado = date('Y-m-d', $date);
                $registro->fecha_a_facturar = $nuevafecha;
                $registro->save();

                $row->situacion = 'EMPLAZADO';
                $row->save();
            }
        }
        return response()->json([]);
    }

    public function jobFacturar()
    {
        $registros = AsignacionModel::select(
            'packing_list.vin',
            'packing_list.marca',
            'packing_list.modelo',
            'packing_list.version',
            'packing_list.color',
            'packing_list.anio_modelo',
            'packing_list.codigo_sap',
            'packing_list.fecha_ingreso',
            'asignaciones.id',
            'asignaciones.fecha_distribucion',
            'asignaciones.codigo_reserva',
            'asignaciones.monto_reserva',
            'asignaciones.fecha_reserva',
            'asignaciones.fecha_emplazado',
            'asignaciones.fecha_facturacion',
            'asignaciones.situacion'
        )
            ->Join('packing_list', 'asignaciones.ingreso_id', 'packing_list.id')
            ->where('asignaciones.situacion', 'EMPLAZADO')->get();

        foreach ($registros as $registro) {
            $row = FacturadoModel::where('vin', $registro->vin)->first();
            if ($row) {
                $registro->situacion = 'FACTURADO';
                $registro->codigo_sap_cliente = $row->codigo_sap_cliente;
                $registro->save();
                $row->situacion = 'FACTURADO';
                $row->save();
            }
        }
        
        return response()->json([]);
    }

    public function create()
    {
        //
    }

    public function store(StoreAsignacionRequest $request)
    {
        //
    }

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
        $asignacion->codigo_reserva = $request->codigo_reserva;
        $asignacion->monto_reserva = $request->monto_reserva;
        $asignacion->fecha_reserva = date('Y-m-d');
        $asignacion->situacion = 'RESERVADO';
        $asignacion->save();
        return response()->json($asignacion);
    }

    public function destroy(AsignacionModel $asignacion)
    {
        //
    }

    public function asignacion(){
        $registros = RegistroModel::select('id','marca','modelo','version','anio_modelo','color1','situacion')->where('situacion', 'SINASIGNAR')->get();

        foreach ($registros as $registro) {

            $ingresos = IngresoModel::where('marca', $registro->marca)->where('modelo', $registro->modelo)->where('version', $registro->version)
            ->where('anio_modelo', $registro->anio_modelo)
            ->where('color', $registro->color1)
            ->where('situacion', 'LIBRE')
            ->where('bloqueado', 0)
            ->first();
    
            if($ingresos){
                $ingresos->situacion = 'ASIGNADO';
                $ingresos->save();

                $registro->situacion = 'ASIGNADO';
                $registro->save();

                AsignacionModel::create(['registro_id' => $registro->id, 'ingreso_id' => $ingresos->id]);
            } 
        }

    //segundo
    $registros2 = RegistroModel::select('id','marca','modelo','version','anio_modelo','color2','situacion')->where('situacion', 'SINASIGNAR')->get();
        
        foreach ($registros2 as $registro) {

            $ingresos2 = IngresoModel::where('marca', $registro->marca)
            ->where('modelo', $registro->modelo)
            ->where('version', $registro->version)
            ->where('anio_modelo', $registro->anio_modelo)
            ->where('color', $registro->color2)
            ->where('situacion', 'LIBRE')
            ->where('bloqueado', 0)
            ->first();
    
            if($ingresos2){
                $ingresos2->situacion = 'ASIGNADO';
                $ingresos2->save();

                $registro->situacion = 'ASIGNADO';
                $registro->save();

                AsignacionModel::create(['registro_id' => $registro->id, 'ingreso_id' => $ingresos2->id]);
            } 
        }
        
        //tercero
        $registros3 = RegistroModel::select('id','marca','modelo','version','anio_modelo','color3','situacion')->where('situacion', 'SINASIGNAR')->get();

        foreach ($registros3 as $registro) {

            $ingresos3 = IngresoModel::where('marca', $registro->marca)
            ->where('modelo', $registro->modelo)
            ->where('version', $registro->version)
            ->where('anio_modelo', $registro->anio_modelo)
            ->where('color', $registro->color3)
            ->where('situacion', 'LIBRE')
            ->where('bloqueado', 0)
            ->first();
    
            if($ingresos3){
                $ingresos3->situacion = 'ASIGNADO';
                $ingresos3->save();

                $registro->situacion = 'ASIGNADO';
                $registro->save();

                AsignacionModel::create(['registro_id' => $registro->id, 'ingreso_id' => $ingresos3->id]);
            } 
        }
        
    } 
}

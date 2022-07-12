<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AsignacionModel;
use App\Models\RegistroModel;
use App\Http\Requests\StoreAsignacionRequest;
use App\Models\FacturadoModel;
use App\Models\IngresoModel;
use Illuminate\Support\Facades\DB;

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
            'registros.situacion as regSituacion',
            'users.nombre',
            'users.apellido',
            'users.email',
            'tiendas.nombre as tienda',
            'concesionarios.nombre as concesionario',
            'registros.tienda_id',
            'registros.concesionario_id',
            'asignaciones.fecha_distribucion',
            'concesionarios.nombre as concesionario',
            'packing_list.vin_e',
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
            ->where('asignaciones.situacion', 'ASIGNADO')
            ->where('registros.estado', 1);
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
            case 5:
                $data = $query->where('packing_list.marca', $user->marca)->get();
                break;
            case 6:
            case 8:
                $data = $query->get();
                break;
            default:
                $data = $query->get();
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
            'packing_list.vin_e',
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
            ->where('asignaciones.situacion', 'RESERVADO')
            ->where('registros.estado', 1);
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
            case 5:
                $data = $query->where('packing_list.marca', $user->marca)->get();
                break;
            case 6:
            case 8:
                $data = $query->get();
                break;
            default:
                $data = $query->where('registros.concesionario_id', " ")->get();
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
            'packing_list.vin_e',
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
            'asignaciones.fecha_facturado',
            'asignaciones.codigo_sap_cliente',
            'asignaciones.fecha_sap_facturado',
            'asignaciones.situacion'
        )
            ->Join('registros', 'asignaciones.registro_id', 'registros.id')
            ->Join('packing_list', 'asignaciones.ingreso_id', 'packing_list.id')
            ->Join('users', 'registros.user_id', 'users.id')
            ->Join('concesionarios', 'users.concesionario_id', 'concesionarios.id')
            ->join('tiendas', 'tiendas.id', 'registros.tienda_id')
            ->where('asignaciones.situacion', 'FACTURADO')
            ->where('registros.estado', 1);
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
            case 5:
                $data = $query->where('packing_list.marca', $user->marca)->get();
                break;
            case 6:
            case 8:
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
            'packing_list.vin_e',
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
            ->where('asignaciones.situacion', 'EMPLAZADO')
            ->where('registros.estado', 1);
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
            case 8:
                $data = $query->get();
                break;
            default:
                $data = [];
        }
        return response()->json($data);
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
        $facturado = AsignacionModel::select('asignaciones.id')
            ->join('packing_list', 'packing_list.id', 'asignaciones.ingreso_id')
            ->join('proceso_facturacion_si', 'proceso_facturacion_si.vin', 'packing_list.vin')
            ->where('asignaciones.id', $id)
            ->first();
        if($facturado){
            return response()->json(["message" => "Packing list ya facturado"], 404) ;
        }
        $asignacion->codigo_reserva = $request->codigo_reserva;
        $asignacion->monto_reserva = $request->monto_reserva;
        $asignacion->fecha_reserva = date('Y-m-d');
        $asignacion->situacion = 'RESERVADO';
        $asignacion->save();

        $packing = IngresoModel::findOrFail($asignacion->ingreso_id);
        $packing->update(['situacion' => 'RESERVADO']);

        $registro = RegistroModel::findOrFail($asignacion->registro_id);
        $registro->update(['situacion' => 'RESERVADO']);
        
        return response()->json($asignacion);
    }

    public function cancelarAsignacion(Request $request)
    {
        $asignacion = AsignacionModel::findOrFail($request->id);
        $asignacion->update(['estado' => 0, 'situacion' => 'SINASIGNAR', 'observacion' => 'cancelado por el asesor: '.$request->user->id]);

        $packing = IngresoModel::findOrFail($asignacion->ingreso_id);
        $packing->update(['situacion' => 'LIBRE']);

        $registro = RegistroModel::findOrFail($asignacion->registro_id);
        $registro->update(['estado' => 0]);
        return response()->json($asignacion);
    }

    public function destroy($id)
    {
        $asignacion = AsignacionModel::findOrFail($id);
        $asignacion->update(['estado' => 0, 'situacion' => 'SINASIGNAR', 'observacion' => 'cancelado por el asesor']);

        $packing = IngresoModel::findOrFail($asignacion->ingreso_id);
        $packing->update(['situacion' => 'LIBRE']);

        $registro = RegistroModel::findOrFail($asignacion->registro_id);
        $registro->update(['estado' => 0]);
        return response()->json($asignacion);
    }

    public function auditoria()
    {
        $data = AsignacionModel::select(
            'concesionarios.nombre as concesionario',
            'tiendas.nombre as tienda',
            'proceso_facturacion_si.fecha_facturacion as fecha_facturacion_si',
            'proceso_facturacion_final.fecha_factura as fecha_facturacion_so',
            DB::raw('IF(registros.documento = proceso_facturacion_final.numero_documento, "NO", "SI") as incorrecto_documento'),
            DB::raw('DATEDIFF(proceso_facturacion_final.fecha_factura, proceso_facturacion_si.fecha_facturacion) as diferencia'),
            'packing_list.vin',
            'registros.documento as registro_documento',
            'proceso_facturacion_final.numero_documento as facturacion_documento',
            'registros.nombre_completo as registro_nombre',
            'proceso_facturacion_final.nombre_completo as facturacion_nombre'
        )
        ->join('registros', 'registros.id', 'asignaciones.registro_id')
        ->leftjoin('concesionarios', 'concesionarios.id', 'registros.concesionario_id')
        ->leftjoin('tiendas', 'tiendas.id', 'registros.tienda_id')
        ->join('packing_list', 'packing_list.id', 'asignaciones.ingreso_id')
        ->join('proceso_facturacion_si', 'proceso_facturacion_si.vin', 'packing_list.vin')
        ->leftjoin('proceso_facturacion_final', 'proceso_facturacion_final.vin', 'proceso_facturacion_si.vin')
        ->where('asignaciones.situacion', 'FACTURADO')
        ->where('registros.estado', 1)
        ->get();
        return response()->json($data);
    }
}

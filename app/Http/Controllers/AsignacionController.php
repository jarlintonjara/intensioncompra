<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\AsignacionModel;
use App\Models\RegistroModel;
use App\Http\Requests\StoreAsignacionRequest;

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
            case 8:
                $data = $query->get();
                break;
            default:
                $data = $query->where('registros.concesionario_id', " ")->get();
        }
        
        foreach($data as $e){
            $vin = Hash::make($e["vin"]);
            $e["vin"]= substr($vin, 0, 30);
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
            case 8:
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
        $asignacion->codigo_reserva = $request->codigo_reserva;
        $asignacion->monto_reserva = $request->monto_reserva;
        $asignacion->fecha_reserva = date('Y-m-d');
        $asignacion->situacion = 'RESERVADO';
        $asignacion->save();
        return response()->json($asignacion);
    }

    public function destroy($id)
    {
        $asignacion = AsignacionModel::findOrFail($id);
        $asignacion->update(['estado' => 0, 'situacion' => 'SINASIGNAR']);

        $registro = RegistroModel::findOrFail($asignacion->registro_id);
        $registro->update(['estado' => 0, 'situacion' => 'SINASIGNAR']);
        return response()->json($asignacion);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\AsignacionModel;
use App\Models\RegistroModel;
use App\Models\IngresoModel;
use App\Http\Requests\StoreAsignacionRequest;

class AsignacionController extends Controller
{
    public function index(Request $request)
    {
        $auth = new AuthController();
        $user = $auth->getUser($request->bearerToken());
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
            ->Join('registros', 'asignaciones.registro_id', 'registros.id')
            ->Join('ingresos', 'asignaciones.ingreso_id', 'ingresos.id')
            ->Join('users', 'registros.user_id', 'users.id')
            ->Join('concesionarios', 'users.concesionario_id', 'concesionarios.id')
            ->where('asignaciones.situacion', 'ASIGNADO');
        switch ($user->role_id) {
            case 1:
                return $data->where('registros.user_id', $user->id)->get();
                break;
            case 2:
                return $data->where('registros.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                return $data->where('registros.concesionario_id', $user->concesionario_id)->get();
                break;
            case 4:
                return $data->where('ingresos.marca', $user->marca)->get();
                break;
            case 5:
                return $data->where('ingresos.marca', $user->marca)->get();
                break;
            case 6:
                return $data->get();
                break;
            default:
                return $data->where('registros.concesionario_id', " ")->get();
        }
        
        foreach($data as $e){
            $vin = Hash::make($e["vin"]);
            $e["vin"]= substr($vin, 0, 15);
        }
        return response()->json($data);
    }
    public function reservado(Request $request)
    {
        $auth = new AuthController();
        $user = $auth->getUser($request->bearerToken());
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
            ->Join('registros', 'asignaciones.registro_id', 'registros.id')
            ->Join('ingresos', 'asignaciones.ingreso_id', 'ingresos.id')
            ->Join('users', 'registros.user_id', 'users.id')
            ->Join('concesionarios', 'users.concesionario_id', 'concesionarios.id')
            ->where('asignaciones.situacion', 'RESERVADO');
        switch ($user->role_id) {
            case 1:
                return $data->where('registros.user_id', $user->id)->get();
                break;
            case 2:
                return $data->where('registros.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                return $data->where('registros.concesionario_id', $user->concesionario_id)->get();
                break;
            case 4:
                return $data->where('ingresos.marca', $user->marca)->get();
                break;
            case 5:
                return $data->where('ingresos.marca', $user->marca)->get();
                break;
            case 6:
                return $data->get();
                break;
            default:
                return $data->where('registros.concesionario_id', " ")->get();
        }

        foreach ($data as $e) {
            $vin = Hash::make($e["vin"]);
            $e["vin"] = substr($vin, 0, 15);
        }
        return response()->json($data);
    }
    public function facturado(Request $request)
    {
        $auth = new AuthController();
        $user = $auth->getUser($request->bearerToken());
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
            ->Join('registros', 'asignaciones.registro_id', 'registros.id')
            ->Join('ingresos', 'asignaciones.ingreso_id', 'ingresos.id')
            ->Join('users', 'registros.user_id', 'users.id')
            ->Join('concesionarios', 'users.concesionario_id', 'concesionarios.id')
            ->where('asignaciones.situacion', 'FACTURADO');
        switch ($user->role_id) {
            case 1:
                return $data->where('registros.user_id', $user->id)->get();
                break;
            case 2:
                return $data->where('registros.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                return $data->where('registros.concesionario_id', $user->concesionario_id)->get();
                break;
            case 4:
                return $data->where('ingresos.marca', $user->marca)->get();
                break;
            case 5:
                return $data->where('ingresos.marca', $user->marca)->get();
                break;
            case 6:
                return $data->get();
                break;
            default:
                return $data->where('registros.concesionario_id', " ")->get();
        }

        foreach ($data as $e) {
            $vin = Hash::make($e["vin"]);
            $e["vin"] = substr($vin, 0, 15);
        }
        return response()->json($data);
    }
    public function emplazado(Request $request)
    {
        $auth = new AuthController();
        $user = $auth->getUser($request->bearerToken());
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
            ->Join('registros', 'asignaciones.registro_id', 'registros.id')
            ->Join('ingresos', 'asignaciones.ingreso_id', 'ingresos.id')
            ->Join('users', 'registros.user_id', 'users.id')
            ->Join('concesionarios', 'users.concesionario_id', 'concesionarios.id')
            ->where('asignaciones.situacion', 'EMPLAZADO');
        switch ($user->role_id) {
            case 1:
                return $data->where('registros.user_id', $user->id)->get();
                break;
            case 2:
                return $data->where('registros.tienda_id', $user->tienda_id)->get();
                break;
            case 3:
                return $data->where('registros.concesionario_id', $user->concesionario_id)->get();
                break;
            case 4:
                return $data->where('ingresos.marca', $user->marca)->get();
                break;
            case 5:
                return $data->where('ingresos.marca', $user->marca)->get();
                break;
            case 6:
                return $data->get();
                break;
            default:
                return $data->where('registros.concesionario_id', " ")->get();
        }

        foreach ($data as $e) {
            $vin = Hash::make($e["vin"]);
            $e["vin"] = substr($vin, 0, 15);
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

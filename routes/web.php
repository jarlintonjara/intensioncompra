<?php

use App\Http\Controllers\FileController;
use App\Models\AsignacionModel;
use App\Models\EmplazadoModel;
use App\Models\FacturadoModel;
use App\Models\IngresoModel;
use App\Models\RegistroModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('test', function(){
    $data = IngresoModel::whereNull('vin_e')->get();
    foreach ($data as $e) {
        $vin = Hash::make($e["vin"]);
        $row = substr($vin, 0, 30);
        $e->vin_e = $row;
        $e->save();
    }
});


/* Route::get('auditoria', function () {
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
}); */

/* Route::get('asignaciontest', function () {
    $registros = RegistroModel::select('id', 'marca', 'modelo', 'version', 'anio_modelo', 'color1', 'color2', 'color3', 'situacion', 'fecha')
    ->where('situacion', 'SINASIGNAR')->where('estado', 1)->orderBy('fecha', 'asc')
        ->get();

    foreach ($registros as $registro) {

        $ingresos = IngresoModel::where('marca', $registro->marca)
            ->where('modelo', $registro->modelo)
            ->where('version', $registro->version)
            ->where('anio_modelo', $registro->anio_modelo)
            ->where('color', $registro->color1)
            ->where('situacion', 'LIBRE')
            ->where('bloqueado', 0)
            ->first();

        if ($ingresos) {
            $asignado = AsignacionModel::where('ingreso_id', $ingresos->id)->whereIn('situacion', ['ASIGNADO', 'RESERVADO', 'EMPLAZADO', 'FACTURADO'])->first();
            $facturado = FacturadoModel::where('vin', $ingresos->vin)->first();
            print_r($facturado);
            if (!$asignado && !$facturado) {
                $ingresos->situacion = 'ASIGNADO';
                $ingresos->save();

                $registro->situacion = 'ASIGNADO';
                $registro->save();

                AsignacionModel::create(['registro_id' => $registro->id, 'ingreso_id' => $ingresos->id, 'situacion' => 'ASIGNADO', 'fecha_distribucion' => date('Y-m-d')]);
                continue;
            }
        }

        $ingresos2 = IngresoModel::where('marca', $registro->marca)
            ->where('modelo', $registro->modelo)
            ->where('version', $registro->version)
            ->where('anio_modelo', $registro->anio_modelo)
            ->where('color', $registro->color2)
            ->where('situacion', 'LIBRE')
            ->where('bloqueado', 0)
            ->first();

        if ($ingresos2) {
            $asignado2 = AsignacionModel::where('ingreso_id', $ingresos2->id)->whereIn('situacion', ['ASIGNADO', 'RESERVADO', 'EMPLAZADO', 'FACTURADO'])->first();
            $facturado2 = FacturadoModel::where('vin', $ingresos2->vin)->first();
            print_r($facturado2);
            if (!$asignado2 && !$facturado2) {
                $ingresos2->situacion = 'ASIGNADO';
                $ingresos2->save();

                $registro->situacion = 'ASIGNADO';
                $registro->save();

                AsignacionModel::create(['registro_id' => $registro->id, 'ingreso_id' => $ingresos2->id, 'situacion' => 'ASIGNADO', 'fecha_distribucion' => date('Y-m-d')]);
                continue;
            }
        }

        $ingresos3 = IngresoModel::where('marca', $registro->marca)
            ->where('modelo', $registro->modelo)
            ->where('version', $registro->version)
            ->where('anio_modelo', $registro->anio_modelo)
            ->where('color', $registro->color3)
            ->where('situacion', 'LIBRE')
            ->where('bloqueado', 0)
            ->first();

        if ($ingresos3) {
            $asignado3 = AsignacionModel::where('ingreso_id', $ingresos3->id)->whereIn('situacion', ['ASIGNADO', 'RESERVADO', 'EMPLAZADO', 'FACTURADO'])->first();
            $facturado3 = FacturadoModel::where('vin', $ingresos3->vin)->first();
            print_r($facturado3);
            if (!$asignado3 && !$facturado3) {
                $ingresos3->situacion = 'ASIGNADO';
                $ingresos3->save();

                $registro->situacion = 'ASIGNADO';
                $registro->save();

                AsignacionModel::create(['registro_id' => $registro->id, 'ingreso_id' => $ingresos3->id, 'situacion' => 'ASIGNADO', 'fecha_distribucion' => date('Y-m-d')]);
            }
        }
    }
}); */

Route::get('displayImage/{asignacion}/{filename}', [FileController::class, 'displayImage']);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


 
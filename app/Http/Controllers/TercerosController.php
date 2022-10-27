<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class TercerosController extends Controller
{
    public function index($dni)
    {
        $row = DB::connection('mysql2')->table('Quiter_Personas_Empresas')->where('documento', $dni)->first();
        return response()->json([ 
            'isSuccess' => true,
            'message' => $row ? "Se encontro el registro" : "No se encontraron registros",
            'data' => $row
        ]);
    }
}

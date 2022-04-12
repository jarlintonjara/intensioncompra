<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AsignacionModel extends Model
{
    use HasFactory;

    protected $table = 'asignaciones';

    protected $fillable = [
        'id',	
        'registro_id',	
        'user_id',	
        'ingreso_id',	
        'fecha_distribucion',
        'fecha_emplazado',
        'fecha_reservacion',
        'fecha_facturacion',
        'codigo_reserva',
        'monto_reserva',
        'fecha_reserva',
        'situacion',
        'estado',
        'observacion',
        'created_at',
        'updated_at',
        'fecha_a_facturar',
        'codigo_sap_cliente'
    ];
}

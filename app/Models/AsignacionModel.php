<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AsignacionModel extends Model
{
    use HasFactory;

    protected $table = 'asignaciones';

    protected $fillable = [
        'id'.
        'registro_id',
        'user_id',
        'ingreso_id',
        'fecha_distribucion',
        'fecha_emplazado',
        'fecha_sap_emplazado',
        'fecha_facturado',
        'fecha_sap_facturado',
        'codigo_sap_cliente',
        'fecha_reserva',
        'codigo_reserva',
        'monto_reserva',
        'situacion',
        'estado',
        'observacion',
        'created_at',
        'updated_at',
    ];
}

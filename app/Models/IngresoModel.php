<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IngresoModel extends Model
{
    use HasFactory;

    use HasFactory;

    protected $table = 'packing_list';

    protected $fillable = [
        'id',
        'user_bloqueo',
        'vin',
        'marca',
        'modelo',
        'version',
        'anio_modelo',
        'anio_fabricacion',
        'color',
        'fecha_ingreso',
        'fecha_bloqueo',
        'estado',
        'situacion',
        'nave',
        'bloqueado',
        'codigo_sap',
        'created_at',
        'updated_at',
        'motivo'
    ];
}

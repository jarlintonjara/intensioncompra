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
        'situacion',
        'bloqueado',
        'updated_at',
        'codigo_sap',
        'nave',
        'fecha_ingreso',
        'fecha_bloqueo',
        'estado',
        'created_at',
        'motivo'
    ];
}

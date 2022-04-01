<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IngresoModel extends Model
{
    use HasFactory;

    use HasFactory;

    protected $table = 'ingresos';

    protected $fillable = [
        'id',
        'vin',
        'marca',
        'modelo',
        'version',
        'anio_modelo',
        'anio_fabricacion',
        'color',
        'fecha_ingreso',
        'estado',
        'situacion',
        'nave',
        'bloqueado',
        'codigo_sap',
        'created_at',
        'updated_at'
    ];
}

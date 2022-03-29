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
        'anio',
        'color',
        'fecha_ingreso',
        'created_at',
        'updated_at'
    ];
}

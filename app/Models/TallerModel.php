<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TallerModel extends Model
{
    use HasFactory;

    protected $table = 'talleres';

    protected $casts = [
        'restriccion_x_modelo' => 'array'
    ];

    protected $fillable = [
        'id',
        'departamento',
        'distrito',
        'descripcion',
        'direccion',
        'horario',
        'vehiculos',
        'restricciones',
        'restriccion_x_modelo',
        'estado'
    ];
}

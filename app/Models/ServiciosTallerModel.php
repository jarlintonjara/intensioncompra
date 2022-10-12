<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiciosTallerModel extends Model
{
    use HasFactory;

    protected $table = 'servicios_x_taller';

    protected $casts = [
        'restricciones' => 'array'
    ];

    protected $fillable = [
        'id',
        'id_taller',
        'marca',
        'id_servicio',
        'estado',
        'restricciones'
    ];
}

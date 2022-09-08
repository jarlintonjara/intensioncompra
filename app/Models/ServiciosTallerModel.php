<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiciosTallerModel extends Model
{
    use HasFactory;

    protected $table = 'servicios_x_taller';

    protected $fillable = [
        'id',
        'departamento',
        'distrito',
        'marca',
        'id_servicio',
        'id_restriccion',
        'estado'
    ];
}

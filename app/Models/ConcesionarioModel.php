<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConcesionarioModel extends Model
{
    use HasFactory;

    protected $table = 'concesionarios';

    protected $fillable = [
        'id',
        'nombre',
        'descripcion',
        'direccion',
        'estado',
        'created_at',
        'updated_at'
    ];
}

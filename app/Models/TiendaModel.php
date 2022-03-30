<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TiendaModel extends Model
{
    use HasFactory;

    protected $table = 'tiendas';

    protected $fillable = [
        'id',
        'concesionarios_id',
        'nombre',
        'direccion',
        'estado',
        'created_at',
        'updated_at'
    ];
}

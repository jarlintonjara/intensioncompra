<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramacionModel extends Model
{
    use HasFactory;

    protected $table = 'programacion';

    protected $visible = [
        'id',
        'id_estacionamiento',
        'id_usuario',
        'usuario_creador',
        'hora_inicio',
        'hora_fin',
        'fecha',
        'observacion',
        'created_at',
        'status',
        'updated_at'
    ];

    protected $fillable = [
        'id',
        'id_estacionamiento',
        'id_usuario',
        'usuario_creador',
        'hora_inicio',
        'hora_fin',
        'fecha',
        'observacion',
        'created_at',
        'status',
        'updated_at'
    ];
}

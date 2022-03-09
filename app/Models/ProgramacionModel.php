<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramacionModel extends Model
{
    use HasFactory;

    protected $table = 'programacion';

    protected $fillable = [
        'id',
        'user_id',
        'estacionamiento_id',
        'created_by',
        'hora_inicio',
        'hora_fin',
        'fecha',
        'observacion',
        'created_at',
        'status',
        'updated_at'
    ];

    protected $casts = [
        'created_at' => 'date'
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
        //return $user->nombre." ".$user->apellido;
    }
    public function parking()
    {
        return $this->hasOne(EstacionamientoModel::class, 'id', 'estacionamiento_id');
        //return $parking->numero;
    }
}

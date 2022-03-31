<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'apellido',
        'nombre',
        'documento',
        'telefono',
        'cargo',
        'role_id',
        'concesionario_id',
        'tienda_id',
        'area',
        'usuario',
        'estado',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function concesionario()
    {
        return $this->hasOne(ConcesionarioModel::class, 'id', 'concesionario_id');
    }

    public function tienda()
    {
        return $this->hasOne(TiendaModel::class, 'id', 'tienda_id');
    }
    public function role()
    {
        return $this->hasOne(RoleModel::class, 'id', 'role_id');
    }
}

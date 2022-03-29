<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistroModel extends Model
{
    use HasFactory;

    protected $table = 'registros';

    protected $fillable = [
        'id',	
        'concesionario_id',	
        'user_id',	
        'caracteristica_id',	
        'nombre_completo',
        'documento',
        'celular',
        'correo',
        'marca',	
        'modelo',	
        'version',	
        'anio_modelo',
        'color1',
        'color2',
        'color3',
        'created_at',
        'updated_at'
    ];
}

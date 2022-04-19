<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConfiguracionModel extends Model
{
    use HasFactory;

    protected $table = 'configuracion';

    protected $fillable = [
        'id',
        'clave',
        'valor',
        'descripcion',
        'created_at',
        'updated_at'
    ];
}

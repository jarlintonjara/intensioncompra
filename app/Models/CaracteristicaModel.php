<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaracteristicaModel extends Model
{
    use HasFactory;

    protected $table = 'caracteristicas';

    protected $fillable = [
        'id', 
        'material',
        'marca',
        'modelo',
        'version',
        'anio',
        'color',
        'codigo_sap',
        'observacion',
        'created_at',
        'updated_at'
    ];
}

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
        'anio_modelo',
        'anio_fabricacion',
        'color',
        'codigo_sap',
        'observacion',
        'estado',
        'created_at',
        'updated_at'
    ];
}

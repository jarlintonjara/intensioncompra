<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmplazadoModel extends Model
{
    use HasFactory;

    protected $table = 'proceso_emplazados';

    protected $fillable = [
        'vin',
        'nave',
        'marca',
        'modelo',
        'version',
        'destino',
        'fecha_emplazamiento',
        'situacion'
    ];
}

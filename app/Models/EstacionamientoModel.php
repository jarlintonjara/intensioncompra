<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstacionamientoModel extends Model
{
    use HasFactory;

    protected $table = 'estacionamiento';

    protected $visible = ['numero', 'sede', 'ubicacion','fecha_creacion', 'asignado'];
}

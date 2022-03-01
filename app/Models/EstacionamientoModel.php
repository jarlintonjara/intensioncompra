<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstacionamientoModel extends Model
{
    use HasFactory;
    //protected $primaryKey = 'flight_id';
    //public $timestamps = false;

    protected $table = 'estacionamiento';

    protected $visible = ['id', 'numero', 'sede', 'ubicacion','fecha_creacion', 'asignado'];

    protected $fillable = ['id','numero', 'sede', 'ubicacion', 'fecha_creacion', 'asignado'];
}

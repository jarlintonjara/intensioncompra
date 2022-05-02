<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FacturadoModel extends Model
{
    use HasFactory;

    protected $primaryKey = 'vin';

    public $timestamps = false;

    protected $table = 'proceso_facturacion_si';

    protected $fillable = [
        'factura_sap',
        'fecha_facturacion',
        'vin',
        'marca',
        'modelo',
        'version',
        'material',
        'codigo_sap_cliente',
        'nombre_completo',
        'numero_documento',
        'situacion',
        'canal',
    ];
}

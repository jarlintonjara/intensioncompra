<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FacturadoModel extends Model
{
    use HasFactory;

    protected $table = 'proceso_facturacion_si';

    protected $fillable = [
        'factura_sap',
        'fecha_facturado',
        'fecha_sap_facturado',
        'codigo_sap_cliente',
        'vin',
        'marca',
        'modelo',
        'version',
        'material',
        'nombre_completo',
        'numero_documento',
        'situacion',
        'canal',
    ];
}

<?php

namespace App\Imports;

use App\Models\CaracteristicaModel;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithValidation;
use Illuminate\Validation\Rule;
use App\Models\IngresoModel;
use Illuminate\Support\Facades\Hash;

class PackingListImport implements ToModel, WithHeadingRow, WithValidation
{
    use Importable;

    public function model(array $row)
    {
        $vin = Hash::make($row["vin"]);
        return new IngresoModel([
            'marca' => $row['marca'],
            'modelo' => $row['modelo'], 
            'version' => $row['version'], 
            'color' => $row['color'], 
            'anio_modelo' => $row['anio_modelo'], 
            'anio_fabricacion' => $row['anio_fabricacion'], 
            'vin' => $row['vin'], 
            'situacion' => $row['situacion'],
            'bloqueado' => ($row['situacion'] == "BLOQUEADO") ? 1 : 0,
            'user_bloqueo' => ($row['situacion'] == "BLOQUEADO") ? 1751 : null,
            'fecha_bloqueo' => ($row['situacion'] == "BLOQUEADO") ? date('Y-m-d') : null,
            'nave' => $row['nave'],
            'codigo_sap' => $row['material'],
            'fecha_ingreso' => date('Y-m-d', strtotime($row['fecha_ingreso'])),
            'vin_e' => substr($vin, 0, 30)
        ]);
    }
    
    public function rules(): array
    {
        return [
            'marca' => [
                'required',
                'string',
                'exists:caracteristicas,marca'
            ],
            'modelo' => [
                'required',
                'string',
                Rule::exists('caracteristicas', 'modelo')->where(function ($query) {
                    return $query->where('estado', 1);
                })
            ],
            'version' => [
                'required',
                'string',
                Rule::exists('caracteristicas', 'version')->where(function ($query) {
                    return $query->where('estado', 1);
                })
            ],
            'color' => [
                'required',
                'string',
                Rule::exists('caracteristicas', 'color')->where(function ($query) {
                    return $query->where('estado', 1);
                })
            ],
            'vin' => [
                'required',
                'string',
                'unique:packing_list,vin'
            ], 
            'anio_modelo' => [
                'required',
                'integer'
            ],
            'anio_fabricacion' => [
                'required',
                'integer'
            ],
            'fecha_ingreso' => [
                'required'
            ],
            'situacion' => [
                'required',
                'string',
                Rule::in(['LIBRE', 'BLOQUEADO']),
            ]
        ];
    }
}
<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithValidation;
use Illuminate\Validation\Rule;
use App\Models\IngresoModel;

class PackingListImport implements ToModel, WithHeadingRow, WithValidation
{
    use Importable;

    public function model(array $row)
    {
        if (!isset($row[0]) ) {
            return null;
        }
        return new IngresoModel([
            'marca' => $row['marca'],
            'modelo' => $row['modelo'], 
            'version' => $row['version'], 
            'color' => $row['color'], 
            'anio_modelo' => $row['anio_modelo'], 
            'anio_fabricacion' => $row['anio_fabricacion'], 
            'situacion' => $row['situacion']
        ]);
    }
    
    public function rules(): array
    {
        return [
            'marca' => [
                'required',
                'string'
            ],
            'modelo' => [
                'required',
                'string'
            ],
            'version' => [
                'required',
                'string'
            ],
            'color' => [
                'required',
                'string'
            ],
            'VIN' => [
                'required',
                'string'
            ],
            'anio_modelo' => [
                'required',
                'string'
            ],
            'anio_fabricacion' => [
                'required',
                'string'
            ],
            'situacion' => [
                'required',
                'string',
                Rule::in(['first-zone', 'second-zone']),
            ]
        ];
    }
}
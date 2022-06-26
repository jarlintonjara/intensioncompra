<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use App\Models\IngresoModel;

class PackingListImport implements FromCollection, WithHeadings
{
    protected array $columns;
    protected array $data;

    public function __construct() {
        /* $this->columns = $columns;
        $this->data = $data; */
    }

    public function headings(): array
    {
        return ['modelo','version'];
    }

    public function collection()
    {
        return IngresoModel::select('modelo','version')->get();
    } 
}
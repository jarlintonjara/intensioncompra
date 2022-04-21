<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ScheduleExport implements FromCollection, WithHeadings
{
    protected array $columns;
    protected array $data;

    public function __construct(array $columns, array $data) {
        $this->columns = $columns;
        $this->data = $data;
    }

    public function headings(): array
    {
        return $this->columns;
    }

    public function collection()
    {
        return $this->data;
    }
    
}
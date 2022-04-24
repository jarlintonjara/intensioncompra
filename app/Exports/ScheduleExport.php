<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use App\Models\User;

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
        return ['nombre','apellido'];
    }

    public function collection()
    {
        return User::select('nombre','apellido')->get();
    }
    
}
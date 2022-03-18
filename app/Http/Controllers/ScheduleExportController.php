<?php

namespace App\Http\Controllers;

use App\Exports\ScheduleExport;
use Maatwebsite\Excel\Facades\Excel;

class ScheduleExportController extends Controller 
{
    public function export() 
    {
        // return Excel::download(new UsersExport, 'users.xlsx');
        return Excel::store(new ScheduleExport, 'schedule.xlsx');
    }
}
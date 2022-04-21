<?php

namespace App\Http\Controllers;

use App\Exports\ScheduleExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class UtilsController extends Controller
{
    public function exportExcel(Request $request){
        $request->validate([
            'columns' => ['required'],
            'data' => ['required'],
            'name' => ['required']
        ]);
        return Excel::download(new ScheduleExport($request->columns, $request->data), 'schedule.xlsx');
    }
}

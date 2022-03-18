<?php

namespace App\Exports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use App\Models\ProgramacionModel;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ScheduleExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        // return User::all();

        $fecha = date('Y-m-d');
        $nuevafecha = strtotime ( '+1 day' , strtotime ( $fecha ) ) ;
        $nuevafecha = date ( 'Y-m-d' , $nuevafecha );

        $programacionma = ProgramacionModel::select('estacionamiento.numero','users.nombre','users.apellido','users.documento','fecha','turno','hora_inicio','hora_fin','observacion')
                ->Join('estacionamiento', 'programacion.estacionamiento_id', '=', 'estacionamiento.id')
                ->Join('users', 'programacion.user_id', '=', 'users.id')
                ->whereDate("fecha",$nuevafecha)
                ->get();
        return $programacionma;
    }
    public function headings(): array
    {
        return [
            'Estacionamiento','Nombre','Apellido','Documento','Fecha','Turno','Hora_inicio','Hora_fin','Observaciones'
        ];
    }
}
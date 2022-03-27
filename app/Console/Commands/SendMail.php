<?php

namespace App\Console\Commands;
use App\Models\SettingModel;
use \Illuminate\Support\Facades\Mail;
use App\Mail\SchedulesForTomorrow;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\ScheduleExportController;

class SendMail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:mail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generar excel y enviar correo';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $correo = SettingModel::first();

        // $texto = "Hola";
        // Storage::append("archivo.txt",$texto);
        Storage::delete('schedule.xlsx');

        $s = new ScheduleExportController;
        $s->export();

        $email = new SchedulesForTomorrow;

        $correos = [];
        if ($correo->email1 != NULL OR $correo->email1 != '') {
            array_push($correos,$correo->email1);
        } 
        if ($correo->email2 != NULL OR $correo->email2 != '') {
            array_push($correos,$correo->email2);
        } 
        if ($correo->email3 != NULL OR $correo->email3 != '') {
            array_push($correos,$correo->email3);
        } 
        if ($correo->email4 != NULL OR $correo->email4 != '') {
            array_push($correos,$correo->email4);
        }    
        
        Mail::to($correo->email)
        ->cc($correos)
        ->send($email);
        return "Mensaje enviado";
    }
}

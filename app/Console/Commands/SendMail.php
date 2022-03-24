<?php

namespace App\Console\Commands;
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
        // $texto = "Hola";
        // Storage::append("archivo.txt",$texto);
        Storage::delete('schedule.xlsx');

        $s = new ScheduleExportController;
        $s->export();

        $correo = new SchedulesForTomorrow;
        print_r($correo);
        Mail::to('alejarahi@gmail.com ')
        // ->cc('jurier.albino@derco.pe')
        ->send($correo);
        return "Mensaje enviado";
    }
}

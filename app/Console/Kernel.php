<?php

namespace App\Console;

use App\Console\Commands\Emplazado;
use App\Console\Commands\Facturacion;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('send:asignacion')->everySixHours();
        $schedule->command('send:emplazado')->everySixHours();
        $schedule->command('send:facturado')->everySixHours();
        // ->everySixHours();
        // ->dailyAt($time->time);	
    }

    protected function commands()
    {
        $this->load(__DIR__.'/Commands');
        Asignacion::class;
        Emplazado::class;
        Facturacion::class;
        require base_path('routes/console.php');
    }
}

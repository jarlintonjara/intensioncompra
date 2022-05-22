<?php

namespace App\Console;

use App\Console\Commands\BloquearFacturados;
use App\Console\Commands\Emplazado;
use App\Console\Commands\Facturacion;
use App\Console\Commands\ReAsignar;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('send:bloquear')->weekdays()->dailyAt('7:00');
        $schedule->command('send:reAsignar')->weekdays()->dailyAt('7:10');
        $schedule->command('send:asignacion')->weekdays()->dailyAt('7:20');
        $schedule->command('send:emplazado')->weekdays()->dailyAt('7:25');
        $schedule->command('send:facturado')->weekdays()->dailyAt('7:30');
    }

    protected function commands()
    {
        $this->load(__DIR__.'/Commands');
        BloquearFacturados::class;
        ReAsignar::class;
        Asignacion::class;
        Emplazado::class;
        Facturacion::class;
        require base_path('routes/console.php');
    }
}

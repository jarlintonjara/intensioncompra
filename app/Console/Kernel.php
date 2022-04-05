<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule)
    {
        // $time = SettingModel::first();

        $schedule->command('send:asignacion')->everySixHours();
        // ->everySixHours();
        // ->dailyAt($time->time);	
    }

    protected function commands()
    {
        $this->load(__DIR__.'/Commands');
        Asignacion::class;
        require base_path('routes/console.php');
    }
}

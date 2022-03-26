<?php

namespace App\Console;

use App\Models\SettingModel;

use App\Console\Commands\SendMail;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $time = SettingModel::first();

        $schedule->command('send:mail')->dailyAt($time->time);
        // ->everySixHours();
        // ->dailyAt($time->time);	
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');
        SendMail::class;
        require base_path('routes/console.php');
    }
}

<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class sendEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:sendEmail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Envio de email de programaciones';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        
        echo "Alexis se la corre";
        return 0;
    }
}

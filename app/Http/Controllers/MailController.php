<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class SendMailController extends Controller
{
    public function txt_mail()
    {
        $info = array(
            'name' => "Alex"
        );
       /*  Mail::send(['text' => 'mail'], $info, function ($message) {
            $message->to('alex@example.com', 'W3SCHOOLS')
                ->subject('Basic test eMail from W3schools.');
            $message->from('sender@example.com', 'Alex');
        }); */
        echo "Successfully sent the email";
    }

    public function html_mail()
    {
        $info = array(
            'name' => "Alex"
        );
        /* Mail::send('mail', $info, function ($message) {
            $message->to('alex@example.com', 'w3schools')
                ->subject('HTML test eMail from W3schools.');
            $message->from('karlosray@gmail.com', 'Alex');
        }); */
        echo "Successfully sent the email";
    }

    public function attached_mail()
    {
        $info = array(
            'name' => "Alex"
        );
       /*  Mail::send('mail', $info, function ($message) {
            $message->to('alex@example.com', 'w3schools')
                ->subject('Test eMail with an attachment from W3schools.');
            $message->attach('D:\laravel_main\laravel\public\uploads\pic.jpg');
            $message->attach('D:\laravel_main\laravel\public\uploads\message_mail.txt');
            $message->from('karlosray@gmail.com', 'Alex');
        }); */
        echo "Successfully sent the email";
    }
}
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('apellido')->nullable();
            $table->tinyInteger('role_id');
            $table->tinyInteger('concesionario_id')->nullable();
            $table->tinyInteger('tienda_id')->nullable();
            $table->string('documento', 20)->nullable();
            $table->string('telefono', 20)->nullable();
            $table->string('usuario', 100);
            $table->string('email')->unique();
            $table->tinyInteger('status')->default('1');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};

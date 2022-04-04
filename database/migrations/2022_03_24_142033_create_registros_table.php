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
        Schema::create('registros', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('concesionario_id')->nullable();
            $table->tinyInteger('user_id')->nullable();
            $table->tinyInteger('caracteristica_id')->nullable();
            $table->string('nombre_completo')->nullable();
            $table->string('documento')->nullable();
            $table->string('celular')->nullable();
            $table->string('correo')->nullable();
            $table->string('marca')->nullable();
            $table->string('modelo')->nullable();
            $table->string('version')->nullable();
            $table->string('anio_modelo')->nullable();
            $table->string('anio_fabricacion')->nullable();
            $table->string('color1')->nullable();
            $table->string('color2')->nullable();
            $table->string('color3')->nullable();
            $table->string('situacion')->default('SINASIGNAR');
            $table->tinyInteger('estado')->default(0);
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
        Schema::dropIfExists('registros');
    }
};

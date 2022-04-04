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
        Schema::create('ingresos', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('user_bloqueo')->nullable();
            $table->string('vin')->nullable();
            $table->string('marca')->nullable();
            $table->string('modelo')->nullable();
            $table->string('version')->nullable();
            $table->string('anio_modelo')->nullable();
            $table->string('anio_fabricacion')->nullable();
            $table->string('color')->nullable();
            $table->string('situacion')->nullable();
            $table->tinyInteger('bloqueado')->nullable();
            $table->string('codigo_sap')->nullable();
            $table->string('nave')->nullable();
            $table->date('fecha_ingreso')->nullable();
            $table->date('fecha_bloqueo')->nullable();
            $table->tinyInteger('estado')->nullable();
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
        Schema::dropIfExists('ingresos');
    }
};

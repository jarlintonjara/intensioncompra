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
            $table->string('vin')->nullable();
            $table->string('marca')->nullable();
            $table->string('modelo')->nullable();
            $table->string('version')->nullable();
            $table->string('anio_modelo')->nullable();
            $table->string('anio_fabricacion')->nullable();
            $table->string('color')->nullable();
            $table->string('situacion');
            $table->tinyInteger('bloqueado');
            $table->string('codigo_sap');
            $table->date('fecha_ingreso');
            $table->tinyInteger('estado');
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

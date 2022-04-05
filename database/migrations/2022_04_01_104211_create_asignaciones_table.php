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
        Schema::create('asignaciones', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('registro_id')->nullable();
            $table->tinyInteger('user_id')->nullable();
            $table->tinyInteger('ingreso_id')->nullable();
            $table->date('fecha_distribucion')->nullable();
            $table->date('fecha_reservacion')->nullable();
            $table->date('fecha_facturacion')->nullable();
            $table->string('codigo_reserva')->nullable();
            $table->double('monto_reserva', 8, 2)->nullable();
            $table->date('fecha_reserva')->nullable();
            $table->string('situacion', 20)->nullable();	
            $table->tinyInteger('estado')->nullable();
            $table->string('observacion')->nullable();
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
        Schema::dropIfExists('asignaciones');
    }
};

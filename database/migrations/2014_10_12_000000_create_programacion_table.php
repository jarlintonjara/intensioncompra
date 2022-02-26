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
        Schema::create('programacion', function (Blueprint $table) {
            $table->id();
            $table->string('id_estacionamiento');
            $table->string('id_usuario');
            $table->string('usuario_creador');
            $table->time('hora_inicio');
            $table->time('hora_fin');
            $table->date('fecha');
            $table->string('Observaciones');
            $table->dateTime('fecha_creacion');
            $table->boolean('dia_completo');
            $table->boolean('dia_parcial');
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

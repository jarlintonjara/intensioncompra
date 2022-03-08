<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    static  $roles = [
        'Admin',
        'Usuario',
        'Propietario'
    ];

    public function run()
    {
        //\App\Models\User::factory(10)->create();
        foreach (self::$roles as $role) {
            \App\Models\RoleModel::insert([
                'nombre' => $role,
                'description' => $role,
                'created_at' => date('Y-m-d H:i:s')
            ]);
        }
    }
}

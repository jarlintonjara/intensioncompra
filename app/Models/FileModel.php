<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileModel extends Model
{
    use HasFactory;

    protected $table = 'files';

    protected $fillable = [
        'id',
        'asignacion_id',
        'original_filename',
        'filename',
        'created_at',
        'updated_at'
    ];
}

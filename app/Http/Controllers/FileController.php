<?php

namespace App\Http\Controllers;

use App\Models\AsignacionModel;
use App\Models\FileModel;
use Illuminate\Http\Request;

class FileController extends Controller
{

    public function index()
    {
        $data = FileModel::all();
        return response()->json($data);
    }

    public function getImages()
    {
        $images = FileModel::all()->toArray();
        foreach ($images as $image) {
            $tableImages[] = $image['filename'];
        }
        $storeFolder = storage_path('app\uploads');
        $file_path = storage_path('app\uploads');
        $files = scandir($storeFolder);
        foreach ($files as $file) {
            if ($file != '.' && $file != '..' && in_array($file, $tableImages)) {
                $obj['name'] = $file;
                $file_path = storage_path('app/uploads/') . $file;
                $obj['size'] = filesize($file_path);
                $obj['path'] = storage_path('app\\uploads\\'. $file); //url('app/uploads/' . $file);
                $data[] = $obj;
            }
        }
        //dd($data);
        return response()->json($data);
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
        /* $asignacion = AsignacionModel::findOrFail($request->id);
        $asignacion->codigo_reserva = $request->codigo_reserva;
        $asignacion->monto_reserva = $request->monto_reserva;
        $asignacion->tipo_financiamiento = $request->tipo_financiamiento;
        $asignacion->fecha_reserva = date('Y-m-d');
        $asignacion->situacion = 'RESERVADO';
        $asignacion->save(); */

        if ($request->file('file')) {
            /* Multiple file upload */
            $files = $request->file('file');
            if (!is_array($files)) {
                $files = [$files];
            }
            //loop throu the array 
            for ($i = 0; $i < count($files); $i++) {
                $file = $files[$i];
                $filename = $file->getClientOriginalName();
                $filename = str_replace(' ', '', $filename);
                $file->storeAs('uploads', $filename);

                FileModel::create([
                    'asignacion_id' => $request->id, 
                    'filename' => $filename, 
                    'created_at' => date('Y-m-d H:m:s'),
                    'updated_at' => date('Y-m-d H:m:s')
                ]);
            }
            return response()->json(['message' => 'file uploaded'], 200);
        } else {
            return response()->json(['message' => 'error uploading file'], 503);
        }
    }

    public function show(FileModel $estacionamiento)
    {
        return response()->json($estacionamiento);
    }

    public function edit(FileModel $estacionamiento)
    {
    }

    public function update(Request $request, $id)
    {
        $estacionamiento = FileModel::findOrFail($id);
        $estacionamiento->update($request->all());
        $data = FileModel::all();
        return response()->json($data);
    }

    public function destroy(Request $request)
    {
        $filename =  $request->get('filename');
        FileModel::where('filename', $filename)->delete();
        $path = public_path('uploads/gallery/') . $filename;
        if (file_exists($path)) {
            unlink($path);
        }
        return response()->json(['success' => $filename]);
    }
}

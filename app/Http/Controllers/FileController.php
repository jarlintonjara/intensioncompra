<?php

namespace App\Http\Controllers;

use App\Models\AsignacionModel;
use App\Models\FileModel;
use Faker\Provider\File as ProviderFile;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File as FacadesFile;
use Illuminate\Support\Facades\Response;

class FileController extends Controller
{

    public function index()
    {
        $data = FileModel::all();
        return response()->json($data);
    }

    public function displayImage($asignacion, $filename)
    {
        $path = storage_path('/app/public/'. $asignacion.'/'. $filename);
        if (!FacadesFile::exists($path)) {
            abort(404);
        }
        $file = FacadesFile::get($path);
        $type = FacadesFile::mimeType($path);
        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);
        return $response;
    }

    public function getImages($id)
    {
        $images = FileModel::where('asignacion_id', $id)->get();
        return response()->json($images);
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
        $asignacion = AsignacionModel::findOrFail($request->id);
        $asignacion->codigo_reserva = $request->codigo_reserva;
        $asignacion->monto_reserva = $request->monto_reserva;
        $asignacion->tipo_financiamiento = $request->tipo_financiamiento;
        $asignacion->fecha_reserva = date('Y-m-d');
        $asignacion->situacion = 'RESERVADO';
        $asignacion->save();

        if ($request->file('file')) {
            /* Multiple file upload */
            $files = $request->file('file');
            if (!is_array($files)) {
                $files = [$files];
            }
            //loop throu the array 
            for ($i = 0; $i < count($files); $i++) {
                $file = $files[$i];
                $filenameOriginal = $file->getClientOriginalName();
                $extension = pathinfo($filenameOriginal, PATHINFO_EXTENSION);
                $filename = ($i + 1) . '.' . $extension;
                $file->storeAs('public/'.$asignacion->id , $filename);

                FileModel::create([
                    'asignacion_id' => $request->id, 
                    'filename' => $filename, 
                    'original_filename' => $filenameOriginal, 
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

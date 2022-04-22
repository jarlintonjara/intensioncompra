<?php

namespace App\Http\Controllers;

use App\Models\ConcesionarioModel;
use App\Models\RoleModel;
use App\Models\TiendaModel;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Excel;

class UserController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }

    public function index(Request $request)
    {
        $auth = new AuthController();
        $session = $auth->getUser($request->bearerToken());
        $users = [];
        switch ($session->role_id) {
            case 2:
                $users = User::where('status', 1)->where('tienda_id', $session->tienda_id)->where('id', '!=',$session->id)->orderBy('apellido', 'ASC')->get();
                break;
            case 3:
                $users = User::where('status', 1)->where('concesionario_id', $session->concesionario_id)->where('id', '!=', $session->id)->orderBy('apellido', 'ASC')->get();
                break;
            case 6:
                $users = User::where('status', 1)->where('id', '!=', $session->id)->orderBy('apellido', 'ASC')->get();
                break;  
        }
        foreach ($users as $user) {
            $user["role"] = $user->role;
            $user["tienda"] = $user->tienda_id ? $user->tienda : "";
        } 
        $roles = RoleModel::where('estado', 1)->get();
        $concesionarios = ConcesionarioModel::where('estado', 1)->get();
        $tiendas = TiendaModel::where('estado', 1)->get();
        return response()->json([
            "roles" => $roles,
            "users" => $users,
            "concesionarios" => $concesionarios,
            "tiendas" => $tiendas
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    { 
        $data = $request->post();
        $data['password'] = Hash::make('12345678');
        $user = User::create($data);
        $user["role"] = $user->role;
        return response()->json($user);
    }

    public function show(User $user)
    {
        return response()->json($user);
    }

    public function edit(User $user)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        // $data = $request->post();
        $request['password'] = Hash::make($request->password);
        $user->update($request->all());
        $data = User::all();
        return response()->json($data);
    }

    public function updateProfile(Request $request, $id)
    {
        // validar si la contraseña es vacia
        $data = $request->all();
        $user = User::findOrFail($id);
        if (empty($request->password)) {
            $data['password'] = $user->password;
        } else {
            $data['password'] = Hash::make($data['password']);
        }
        $user->update($data);
        return response()->json([
            "message" => "Se guardo correctamente",
            "isSuccess" => True
        ]);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        $data = User::all();
        return response()->json($data);
    }  
}

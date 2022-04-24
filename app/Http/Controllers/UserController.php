<?php

namespace App\Http\Controllers;

use App\Models\ConcesionarioModel;
use App\Models\RoleModel;
use App\Models\TiendaModel;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

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
        $query = User::where('status', 1)
                ->where('id', '!=', $session->id)
                ->whereNotIn('usuario', ['admin', 'admin.bolivia'])
                ->orderBy('apellido', 'ASC');
        switch ($session->role_id) {
            case 2:
                $users = $query->where('tienda_id', $session->tienda_id)->get();
                break;
            case 3:
                $users = $query->where('concesionario_id', $session->concesionario_id)->get();
                break;
            case 4:
            case 5:
                $users = $query->where('marca', $session->marca)->get();
                break;
            case 6:
                $users = $query->get();
                break;  
            default:
                $users = [];
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
        $data = $request->all();
        $data['password'] = Hash::make($request->password);
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
        $data = $request->all();
        $user = User::findOrFail($id);
        if (empty($request->password)) {
            $data['password'] = $user->password;
        } else {
            $data['password'] = Hash::make($data['password']);
        }
        $user->update($data);
        $user["role"] = $user->role;
        $user["tienda"] = $user->tienda_id ? $user->tienda : "";
        return response()->json($user);
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
        $user->update(['status' => 0]);
        return response()->json($user);
    }  
}

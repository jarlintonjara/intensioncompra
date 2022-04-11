<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

use function PHPUnit\Framework\isNull;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'nombre' => ['required'],
            'apellido' => ['required'],
            'perfil' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:6']
        ]);

        User::create([
            'nombre' => $request->nombre,
            'apellido' => $request->apellido,
            'perfil' => $request->perfil,
            'documento' => $request->documento,
            'email' => $request->email,
            'usuario' => $request->usuario,
            'password' => Hash::make($request->password)
        ]);
    }
    public function login(Request $request)
    {
        $request->validate([
            'usuario' => ['required'],
            'password' => ['required']
        ]);
        $user = User::where("usuario", $request->usuario)->first();

        if (isset($user->id)) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken("auth_token")->plainTextToken;

                return response()->json([
                    'status' => 0,
                    'msg' => "!Usuario logueado",
                    "access_token" => $token
                ]);
            } else {
                return response()->json([
                    'status' => 0,
                    'msg' => "La password es incorrecta"
                ], 404);
            }
        } else {
            return response()->json([
                'status' => 0,
                'msg' => "El usuario no esta registrado"
            ], 404);
        }
    }
    
    function getUser($token)
    {
        [$id, $user_token] = explode('|', $token, 2);
        $token_data = DB::table('personal_access_tokens')->where('token', hash('sha256', $user_token))->first();
        if ($token_data) {
            $user_id = $token_data->tokenable_id;
            $user = User::find($user_id);
            if ($user) {
                return $user;
            }
            return response()->json("Unauthenticated", 401);
        }
    }

    public function getSession($token)
    {
        [$id, $user_token] = explode('|', $token, 2);
        $token_data = DB::table('personal_access_tokens')->where('token', hash('sha256', $user_token))->first();
        if ($token_data) {
            $user_id = $token_data->tokenable_id;
            $user = User::find($user_id);
            if($user){
                $user["role"] = $user->role;
                $user["concesionario"] = $user->concesionario;
                if($user->tienda_id != 0 || $user->tienda_id != null){
                    $user["tienda"] = $user->tienda;
                }else{
                    $user["tienda"] = [
                        "nombre" => "",
                        "descripcion" => ""
                    ];
                }
                return response()->json($user, 200);
            }
            return response()->json("sesion acabada", 401);
        }
        return response()->json("sesion acabada", 401);
    }

    public function logout(Request $request)
    {
        if ($request->access_token) {
            [$id, $user_token] = explode('|', $request->access_token, 2);
            $token_data = DB::table('personal_access_tokens')->where('token', hash('sha256', $user_token))->first();
            DB::table('personal_access_tokens')->where('tokenable_id', $token_data->tokenable_id)->delete();
        }
        Auth::logout();
    }
}

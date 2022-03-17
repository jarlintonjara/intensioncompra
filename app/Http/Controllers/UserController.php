<?php

namespace App\Http\Controllers;

use App\Models\EstacionamientoModel;
use App\Models\RoleModel;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $users = User::where('status', 1)->orderBy('apellido', 'ASC')->get();
        foreach ($users as $user) {
            if($user->parking_id){
                $user["parking"] = $user->parking;
            }else{
                $user["parking"] = [
                    "numero" => "",
                    "sede" => ""
                ];
            }
            $user["role"] = $user->role;
        } 
        $roles = RoleModel::where('status', 1)->get();
        $parkings = EstacionamientoModel::where('status', 1)->get();
        return response()->json([
            "roles" => $roles,
            "parkings" => $parkings,
            "users" => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->post();
        $data['password'] = Hash::make($request->password);
        
        $user = User::create($data);
        if ($user->parking_id) {
            $user["parking"] = $user->parking;
        } else {
            $user["parking"] = [
                "numero" => "",
                "sede" => ""
            ];
            $user["role"] = $user->role;
        } 
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        $data = User::all();
        return response()->json($data);
    }
}

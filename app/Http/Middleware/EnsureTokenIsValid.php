<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EnsureTokenIsValid
{
    public function handle(Request $request, Closure $next)
    {
        try{
            $token = $request->bearerToken();
            if (!is_null($token)) {
                [$id, $user_token] = explode('|', $token, 2);
                $token_data = DB::table('personal_access_tokens')->where('token', hash('sha256', $user_token))->first();
                if ($token_data) {
                    $user_id = $token_data->tokenable_id;
                    $user = User::find($user_id);
                    if ($user) {
                        $request['user'] = $user;
                        return $next($request);
                    }
                    return response()->json("sesion acabada", 401);
                }
                return response()->json("sesion acabada", 401);
            }
            return response()->json("sesion acabada", 401);
        }catch(Exception $e){
            return response()->json("sesion acabada", 401);
        }
    }
}

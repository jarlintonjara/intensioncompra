<?php

namespace App\Http\Middleware;

use Closure;

class ApiAuthentication
{
    public function handle($request, Closure $next)
    {
        $token = $request->bearerToken();
        if ($token) {
            if($token == "Basic f0dea0477a89dc5456a682e9"){
                return $next($request);
            }
        }
        return response([
            'isSuccess' => false,
            'token' => $token,
            'message' => 'Unauthenticated'
        ], 403);
    }
}
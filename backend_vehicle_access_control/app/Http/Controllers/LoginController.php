<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    //
    public function login(Request $request){
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
    
        if (Auth::attempt($credentials)) {
            
            $token = $request->user()->createToken('token')->plainTextToken;
    
            return response()->json(['token' => $token, "user"=>Auth::user()]);
        }

    }

    public function logout(Request $request)
    {        
        try
        {
            Auth::user()->tokens->each(function($token, $key) {
                $token->delete();
            });
        }
        catch(Exception $e)
        {
            return response()->json(['message' => "Error procesanso logout"], 401);                        
        }        
        return response()->json(['message' => "sesion cerrada",'user' => "",'loggin_token'=>''], 201);
    }    

}

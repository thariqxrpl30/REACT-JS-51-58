<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str; //ini utk Str:random biar gk eror
use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Hash; //utk melakukan proses hash/enkripsi password

class LoginController extends BaseController
{
    //function utk menampilkan semua data
    public function index()
    {
        $data = User::where('level','<>', 'pelanggan')->get();

        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $user = User::where('id',$id)->update($request->all());

        if ($user) {
            return response()->json([
                'pesan' => 'Data berhasil di update'
            ]);
        }
    }

    public function register(Request $request)
    {
        $data = [
            'email'=>$request->input('email'),
            'password'=>Hash::make($request->input('password')),
            'level'=>$request->input('level'),
            'api_token'=>'12345',
            'status'=>'1',
            'relasi'=>$request->input('relasi'),
        ];

        User::create($data);

        return response()->json($data);
    }

    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $user = User::where('email',$email)->first(); //first mengambil satu baris data yang sama
    
        //pengujian untuk yg emailny blm terdaftar
        if (isset($user)) {
            if ($user->status === 1) {
                if ( Hash::check($password, $user->password) ) { //hashcheck biar PWnya gaperlu sama kaya enkripsi di DB
                    $token = Str::random(40);
        
                    //proses update:
                    $user->update([
                        'api_token' => $token
                    ]);
        
                    return response()->json([
                        'pesan' => 'Login berhasil',
                        'token' => $token,
                        'data' => $user
                    ]);
        
                } else {
                    return response()->json([
                        'pesan' => 'Login gagal',
                        'data' => ''
                    ]);
                }
    
            } else {
                return response()->json([
                    'pesan' => 'Login gagal',
                    'data' => ''
                ]);
            }

        } else {
            return response()->json([
                'pesan' => 'Anda belum terdaftar',
                'data' => ''
            ]);
        }

        
    }
}

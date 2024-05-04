<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        $user = Auth::user();
        if($user->usertype == 1){
            return Inertia::render('Admin',compact('user'));
        }
        if($user->usertype == 2){
            return Inertia::render('Moderator',compact('user'));
        }
        if($user->usertype == 3){
            return Inertia::render('Dashboard',compact('user'));
        }
    }
}

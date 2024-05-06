<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/dashboard', [UserController::class, 'index'])->name('dashboard')->middleware('user');
Route::get('/moderator', [UserController::class, 'index'])->name('moderator')->middleware('moderator');
Route::middleware('admin')->group(function () {
    Route::get('/admin', [UserController::class, 'index'])->name('admin');
    Route::get('/users', [UserController::class, 'user'])->name('users');
    Route::get('/users/{id}', [UserController::class, 'userEdit'])->name('user_edit');
});
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified','user'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
}); 

require __DIR__.'/auth.php';

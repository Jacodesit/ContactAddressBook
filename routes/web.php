<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn() => Inertia::render('Landingpage/Welcome'));
Route::get('/home', [ContactController::class, 'index'])->name('contact.index');
Route::resource('contacts', ContactController::class)->except('index');

require __DIR__.'/settings.php';

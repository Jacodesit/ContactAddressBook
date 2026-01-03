<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn() => Inertia::render('Landingpage/Welcome'));
Route::get('/home', [ContactController::class, 'index'])->name('contact.index');
Route::get('/trash', [ContactController::class, 'trash'])->name('contact.trash');
Route::post('/contacts/contact/{id}', [ContactController::class, 'restore'])->name('contact.restore');
Route::delete('/contacts/contact/{id}', [ContactController::class, 'forceDelete'])->name('contact.forceDelete');
Route::resource('contacts', ContactController::class)->except('index');


require __DIR__.'/settings.php';

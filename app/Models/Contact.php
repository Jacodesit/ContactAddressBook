<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    /** @use HasFactory<\Database\Factories\ContactFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'gender',
        'avatar'
    ];

    protected static function booted() {
        static::creating(function ($contact) {
            if (!$contact->avatar) {
                $contact->avatar = $contact->gender === 'male'
                ? '/Profile/male.png'
                : '/Profile/female.png';
            }
        });
    }
}

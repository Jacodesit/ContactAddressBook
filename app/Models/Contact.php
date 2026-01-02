<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
    /** @use HasFactory<\Database\Factories\ContactFactory> */
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'gender',
        'avatar'
    ];

    protected static function booted() {
        // Creating contacts adding a avatar
        static::saving(function ($contact) {
            if (!$contact->avatar) {
                $contact->avatar = $contact->gender === 'male'
                ? '/Profile/male.png'
                : '/Profile/female.png';
            }
        });

        // Updating the avatar based on gender
        static::saving(function ($contact) {
            if ($contact->isDirty('gender')) {
                    $contact->avatar = $contact->gender === 'male'
                        ? '/Profile/male.png'
                        : '/Profile/female.png';
                }
            });
        }
}

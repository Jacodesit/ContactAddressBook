<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $gender = fake()->randomElement(['male', 'female']);

        return [
            'name' => fake()->text(15),
            'phone' => fake()->numerify('09#########'),
            'email' => fake()->unique()->safeEmail(),
            'gender' => $gender,
            'avatar' => $gender === 'male'
                ? '/Profile/male.png'
                : '/Profile/female.png'
        ];
    }
}

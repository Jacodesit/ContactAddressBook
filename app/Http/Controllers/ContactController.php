<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::latest()->get();
        return Inertia::render('Homepage/Home', [
            'contacts' => $contacts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:30',
            'email' => 'nullable|email|unique:contacts,email',
            'phone' => 'required|string|max:15|unique:contacts,phone',
            'gender' => 'required|in:male,female'
        ]);

        Contact::create($validated);

        return redirect('/home');

        
    }

    
    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        return Inertia::render('Editpage/Edit', [
            'contact' => $contact
        ]);
    }

    /**
     * Update the specified resource in storage.s
     */
    public function update(Request $request, Contact $contact)
    {
        $validated = $request->validate([
            'name' => 'required|max:30',
            'email' => ['nullable', 'email', Rule::unique('contacts', 'email')->ignore($contact->id)],
            'phone' => ['required', 'string', 'max:15', Rule::unique('contacts', 'phone')->ignore($contact->id)],
            'gender' => 'required|in:male,female'
        ]);

        $contact->update($validated);

        return redirect('/home');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect('/home');
    }

    public function trash() {
        $trashedContacts = Contact::onlyTrashed()->latest()->get();

        return Inertia::render('Homepage/Trash', [
            'trashedContacts' => $trashedContacts 
        ]);
    }

    public function restore($id) {
        $contact = Contact::onlyTrashed()->findOrFail($id);
        $contact->restore();

        return redirect('/home');
    }

    public function forceDelete($id) {
        $contact = Contact::withTrashed()->findorFail($id);
        $contact->forceDelete();

        return redirect(to: '/trash');
    }
}
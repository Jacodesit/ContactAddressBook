import { usePage } from "@inertiajs/react";
import { useState } from "react";

import AddContact from "./add-contact-btn";
import AddContactModal from "./add-contact-modal";
import ContactDetails from "./contact-details";
import TrashBtn from "./trash-btn";
import { Mars } from "lucide-react";
import { Venus } from 'lucide-react';

import type { Contact } from "@/types/Contact";

type pageProps = {
    contacts: Contact[]
}

export default function DataContainer() {
    const { contacts } = usePage<pageProps>().props
    const headline = 'People You Know'
    const subtext = 'Organize and access your contacts anytime, anywhere.'

    const [ isOpen, setToOpen ] = useState(false);
    const [ isOpenDetails, setToOpenDetails ] = useState(false);
    const [ selectedContact, setSelectedContact] = useState<Contact | null>(null)

    const openDetailsModal = (contact: Contact) => {
        setSelectedContact(contact)
        setToOpenDetails(true)
    }

    const [genderFilter, setGenderFilter] = useState<'all' | 'male' | 'female'>('all');

    const filteredContacts = contacts.filter(contact => {
        if(genderFilter === 'all') return true;
        return contact.gender === genderFilter;
    })

    return (
        <main className="flex flex-col gap-10">
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <div className="bg-blue-500 inline-flex p-2 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" color="white" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-contact-icon lucide-contact"><path d="M16 2v2"/><path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><path d="M8 2v2"/><circle cx="12" cy="11" r="3"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg>
                    </div>
                    <div>
                        <h1 className="font-[Poppins] text-2xl font-semibold">{headline}</h1>
                        <p className="text-gray-500">{subtext}</p>
                    </div>
                </div>
                <div className="flex gap-1">   
                    <AddContact onClick={() => setToOpen(true)} />
                    <TrashBtn />
                </div>
            </div>

            <div className="flex gap-2">
                {/* All */}
                <button
                    onClick={ () => setGenderFilter('all')}
                    className={`px-5 py-1 rounded transition-all duration-300 hover:cursor-pointer ${genderFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-blue-400 hover:text-white'}`}
                >
                    All
                </button>

                {/* Male */}
                <button
                    onClick={() => setGenderFilter('male')}
                    className={`px-5 py-1 rounded transition-all duration-300 hover:cursor-pointer ${genderFilter === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-blue-400 hover:text-white'}`}

                >
                    Male
                </button>

                {/* Female */}
                <button
                    onClick={() => setGenderFilter('female')}
                    className={`px-5 py-1 rounded transition-all duration-300 hover:cursor-pointer ${genderFilter === 'female' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-blue-400 hover:text-white'}`}
                >
                    Female
                </button>
            </div>
            
            {contacts.length === 0 && (
                <div className="flex items-center justify-center h-96">
                    <p>No contacts found.</p>
                </div>
            )}
            
            <div className="grid grid-cols-3 gap-2">
                { filteredContacts.map(contact => (
                    <div
                        onClick={() => openDetailsModal(contact)}
                        key={contact.id}
                        className="group border p-3  rounded transition-all duration-300 hover:bg-blue-500 hover:cursor-pointer"
                    >
                        <div className="flex justify-end">
                            {contact.gender === 'male'? <Mars size={20} color="#3B82F6" /> : <Venus size={20} color="#EC4899" /> }
                        </div>
                        <div className="flex items-center gap-10">
                            <div>
                                <img 
                                    className="h-30"
                                    src={contact.avatar} 
                                    alt={contact.name} 
                                />
                            </div>
                            <div className="">
                                <div className="">
                                    <h2 className="font-semibold text-xl group-hover:text-white">{contact.name}</h2>
                                    <p className="text-xs text-gray-400 group-hover:text-white">{contact.email}</p>
                                    <hr className="my-2"/>
                                    <p className="text-sm group-hover:text-white">{contact.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <AddContactModal isOpen={isOpen} onClose={() => setToOpen(false)} />
            <ContactDetails 
                isOpenDetails={isOpenDetails} 
                contact={selectedContact}
                onCloseDetails={() => setToOpenDetails(false)} 
            />
        </main>
    )
}
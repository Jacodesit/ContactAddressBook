import { usePage } from "@inertiajs/react"
import { useState } from "react";

import type { Contact } from "@/types/Contact"

import Backbtn from "@/components/back-btn"
import TrashDetails from "./trash-modal";

import { Mars } from "lucide-react";
import { Venus } from 'lucide-react';

type Props = {
    trashedContacts: Contact[]
}

export default function TrashContainer() {
    const { trashedContacts } = usePage<Props>().props

    const headline = 'Deleted Contacts'
    const subtext = 'These contacts are in the trash. You can restore them or remove them permanently.'

    const [ isOpenTrash, setToOpenTrash ] = useState(false);
    const [ selectedTrash, setOpenTrash ] = useState<Contact | null>(null)

    const openTrashModal = (trashedContacts: Contact) => {
        setOpenTrash(trashedContacts)
        setToOpenTrash(true)
    }

    return (
        <main>
            <Backbtn />
            <div className="mb-5">
                <h1 className="text-3xl font-semibold font-[Poppins]">{headline}</h1>
                <p className="text-gray-500">{subtext}</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
                { trashedContacts.map(trashedContact => (
                    <div
                        onClick={() => openTrashModal(trashedContact)}
                        key={trashedContact.id}
                        className="group border p-3  rounded transition-all duration-300 hover:bg-blue-500 hover:cursor-pointer"
                    >
                        <div className="flex justify-end">
                            {trashedContact.gender === 'male'? <Mars size={20} color="#3B82F6" /> : <Venus size={20} color="#EC4899" /> }
                        </div>

                        <div className="flex items-center gap-10">
                            <div>
                                <img 
                                    className="h-30"
                                    src={trashedContact.avatar} 
                                    alt={trashedContact.name} 
                                />
                            </div>
                            <div className="">
                                <div className="">
                                    <h2 className="font-semibold text-xl group-hover:text-white">{trashedContact.name}</h2>
                                    <p className="text-xs text-gray-400 group-hover:text-white">{trashedContact.email}</p>
                                    <hr className="my-2"/>
                                    <p className="text-sm group-hover:text-white">{trashedContact.phone}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <TrashDetails
                isOpenTrash={isOpenTrash}
                selectedTrash={selectedTrash}
                onCloseTrash={() => setToOpenTrash(false)}
            />
        </main>
    )
}
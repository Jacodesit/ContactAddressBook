import type { Contact } from "@/types/Contact";

import { CircleX } from "lucide-react";
import { Trash } from 'lucide-react';
import { SquarePen } from 'lucide-react';

type Props = {
    isOpenDetails: boolean
    contact: Contact | null
    onCloseDetails: () => void
}

export default function ContactDetails({ isOpenDetails, onCloseDetails, contact }: Props) {
    if (!isOpenDetails || !contact) return null;

    const headline = 'Contact details'
    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-[500]">
            <div className="bg-slate-100 rounded-lg max-w-lg w-full max-h-[95vh]">
                <div className="bg-blue-500 p-6 flex justify-between rounded-t">
                    <h1 className="text-xl font-medium text-slate-50 font-[Poppins]">{headline}</h1>
                    <button
                        onClick={onCloseDetails}
                        className="hover:cursor-pointer"
                    >
                        <CircleX size={20} color='white' />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-15">
                    <div className="flex items-center justify-center flex-col gap-4">
                        <img 
                            src={contact.avatar} 
                            alt={contact.name}
                            className="h-50"
                        />
                        <div className="text-center">
                            <h1 className="font-semibold font-[Poppins] text-3xl">{contact.name}</h1>
                            <p className="text-sm text-gray-500">{contact.email} | {contact.phone}</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="flex-1 p-3 bg-blue-500 rounded text-white flex items-center justify-center gap-2">
                            <SquarePen />
                            Edit
                        </button>
                        <button className="flex-1 p-3 bg-red-500 rounded text-white flex items-center justify-center gap-2">
                            <Trash />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
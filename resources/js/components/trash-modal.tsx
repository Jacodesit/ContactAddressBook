
import { CircleX } from "lucide-react"
import { Mars } from "lucide-react";
import { Venus } from 'lucide-react';

import type { Contact } from "@/types/Contact"

import RestoreDeleteBtn from "./res-del-btn";

type Props = {
    isOpenTrash: boolean
    selectedTrash: Contact | null
    onCloseTrash: () => void
}

export default function TrashDetails({ isOpenTrash, selectedTrash, onCloseTrash }: Props) {
    if(!isOpenTrash || !selectedTrash) return null

    const headline = 'Contact details'
    
    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-[500]">
            <div className="bg-slate-100 rounded-lg max-w-lg w-full max-h-[95vh]">
                <div className="bg-blue-500 p-6 flex justify-between rounded-t">
                    <h1 className="text-xl font-medium text-slate-50 font-[Poppins]">{headline}</h1>
                    <button
                        onClick={onCloseTrash}
                        className="hover:cursor-pointer"
                    >
                        <CircleX size={20} color='white' />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-15 relative">
                    <div className="absolute right-6">
                        {selectedTrash.gender === 'male'? <Mars size={25} color="#3B82F6" /> : <Venus size={25} color="#EC4899" /> }
                    </div>
                    <div className="flex items-center justify-center flex-col gap-4 mt-5">
                        <img 
                            src={selectedTrash.avatar} 
                            alt={selectedTrash.name}
                            className="h-50"
                        />
                        <div className="text-center">
                            <h1 className="font-semibold font-[Poppins] text-3xl">{selectedTrash.name}</h1>
                            <p className="text-sm text-gray-500">{selectedTrash.email} | {selectedTrash.phone}</p>
                        </div>
                    </div>

                    <RestoreDeleteBtn 
                        selectedTrash={selectedTrash}
                        onRestored={onCloseTrash}
                    />
                </div>
            </div>
        </div>
    )
}
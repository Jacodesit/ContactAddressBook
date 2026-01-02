import ContactForm from './contact-form';

import { CircleX } from 'lucide-react';

type Props = {
    isOpen: boolean,
    onClose: () => void;
}

export default function AddContactModal({ isOpen, onClose}: Props) {
    if(!isOpen) return null;

    const title = 'Add Contact'
    const webTitle = 'ContactHub © 2025 All rights reserved.'

    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-[500]">
            <div className="bg-slate-100 rounded-lg max-w-4xl w-full max-h-[95vh]">
                <div className='p-6 bg-blue-600 rounded-t flex justify-between items-center'>
                    <h1 className='text-xl font-medium text-slate-50 font-[Poppins]'>{title}</h1>
                    <button
                        onClick={onClose}
                        className='hover:cursor-pointer'
                    >
                        <CircleX size={20} color='white' />
                    </button>
                </div>

                <div className='flex'>
                    {/* Right Part */}
                    <div className='w-1/2 p-6 '>
                        <div className='flex justify-center items-center h-96 flex-col gap-15'>
                            <img 
                                src="/SVG/contact.svg" 
                                alt="SVG"
                                className='flex h-64'
                            />
                            <p className='font-[Poppins] mt-5 text-gray-500 text-xs'>{webTitle}</p>
                        </div>
                    </div>

                    {/* Left Part */}
                    <div className='w-1/2'>
                        <ContactForm onSuccess={onClose}/>
                    </div>
                </div>


            </div>
            
        </div>
    )

}
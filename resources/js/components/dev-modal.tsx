import { CircleX, Instagram } from 'lucide-react';
import { Home } from 'lucide-react';
import { Cake } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { Github } from 'lucide-react';
import { Facebook } from 'lucide-react';

type Props = {
    isOpen: boolean,
    onClose: () => void;
}

export default function DevModal({ isOpen, onClose }: Props) {
    if (!isOpen) return null;

    const name = 'Paul Jacob B. Tocmo'
    const course = 'Bachelor of Science in Information Technology'

    const place = 'Panaytayon, Tubigon, Bohol'
    const birthday = 'September 16, 2003'
    const education = 'Mater Dei College'

    const github = 'https://github.com/Jacodesit'
    const facebook = 'https://web.facebook.com/pauljacob.tocmo/'
    const instagram = 'https://www.instagram.com/paaul_jcb/'
    const saying = 'Showing up despite the despites'
    
    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-[500]">
            <div className="bg-slate-100 rounded-lg max-w-xl w-full max-h-[90vh]">
                <div className="mb-10 relative rounded">
                    <div className="flex h-36 cover-container rounded-t relative">
                        <button
                            onClick={onClose}
                            className='absolute top-4 right-4 hover:cursor-pointer' 
                        >
                            <CircleX size={20} color='white' />
                        </button>
                    </div>
                    <div className=''>
                        <div className="w-36 absolute top-1/3 left-5 border-4 rounded-full border-slate-100">
                            <img 
                                src="/Profile/me.webp" 
                                alt="Jacob" 
                                className="w-auto rounded-full"
                            />
                        </div>
                        <div className='ml-42 mt-2'>
                            <p className='font-medium text-2xl font-[Poppins]'> {name} </p>
                            <span className='text-sm'> { course } </span>
                        </div>
                    </div>
                </div>
                <div className='px-5 pb-5 grid grid-cols-2 gap-2'>
                    {/* Personal Details */}
                    <div className='p-2 rounded'>
                        <h1 className='font-semibold font-[Poppins] mb-3'>Personal Details</h1>
                        <p
                            className='flex gap-1 items-center text-sm'
                        >
                            <Home size={15} />
                            {place}
                        </p>
                        <p
                            className='flex gap-1 items-center text-sm my-2'
                        >
                            <Cake size={15} />
                            {birthday}
                        </p>
                        <p
                            className='flex gap-1 items-center text-sm '
                        >
                            <GraduationCap size={15} />
                            {education}
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className='p-2'>
                        <h1 className='font-semibold font-[Poppins] mb-3'>Contact Information</h1>
                        <a
                            href={github}
                            className='flex gap-1 items-center text-sm hover:underline'
                            target="_blank" rel="noopener noreferrer"
                        >
                            <Github size={15} />
                            Github
                        </a>
                        <a
                            href={facebook}
                            className='flex gap-1 items-center text-sm my-2 text-blue-500 hover:underline'
                            target="_blank" rel="noopener noreferrer"
                        >
                            <Facebook size={15} />
                            Facebook
                        </a>
                        <a
                            href={instagram}
                            className='flex gap-1 items-center text-sm text-red-500 hover:underline'
                            target="_blank" rel="noopener noreferrer"
                        >
                            <Instagram size={15} />
                            Instagram
                        </a>
                    </div>

                    <div className='p-2 w-full col-span-2'>
                        <h1 className='font-semibold font-[Poppins] mb-3'>Saying</h1>
                        <div className='text-center bg-gray-300 p-3 rounded'>
                            <p className='italic'>"{saying}"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
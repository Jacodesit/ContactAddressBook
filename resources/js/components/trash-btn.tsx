import { Link } from "@inertiajs/react"

import { Trash } from 'lucide-react';


export default function TrashBtn() {
    return (
        <>
            <Link
                href={'/trash'}
                className="py-2 px-4 rounded text-center bg-red-500 text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:cursor-pointer"
            >
                <Trash size={15} />
                Trash
            </Link>
        </>
    )
}
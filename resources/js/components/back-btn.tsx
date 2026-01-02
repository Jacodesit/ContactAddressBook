import { CircleArrowLeft } from 'lucide-react';

import { Link } from "@inertiajs/react"

export default function Backbtn() {
    return (
        <div className="flex justify-start w-full mb-5">
            <Link
                href={'/home'}
                className="flex items-center gap-1 transition-all duration-300 hover:text-blue-500"
            >
                <CircleArrowLeft size={20} />
                Back
            </Link>
        </div>
    )
}
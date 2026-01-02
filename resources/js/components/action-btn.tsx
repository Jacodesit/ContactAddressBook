import { Link } from "@inertiajs/react"
import { House } from "lucide-react"
import { CircleUserRound } from 'lucide-react';

type Props = {
    onClick: () => void;
}

export default function ActionBtn({ onClick }: Props) {
    return (
        <div className="flex gap-4">
            {/* Navigate to home */}
            <Link
                href={ '/home' }
                className="z-[90] font-medium bg-blue-600 py-2 px-4 rounded w-38 text-center text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-blue-700 "
            >
                <House size={20} />
                Go to home
            </Link>

            {/* Show developer info */}
            <button
                onClick={onClick}
                className="py-2 px-4 rounded w-38 text-center bg-blue-500 text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:cursor-pointer"
            >
                <CircleUserRound size={20} />
                Behind this
            </button>
        </div>
    )
}
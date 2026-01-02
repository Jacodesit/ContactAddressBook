import { CirclePlus } from 'lucide-react';

type Props = {
    onClick: () => void;
}

export default function AddContact({ onClick }: Props) {
    return (
        <>
            <button
                onClick={onClick}
                className="py-2 px-4 rounded text-center bg-blue-500 text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:cursor-pointer"
            >
                <CirclePlus size={15} />
                Add contact
            </button>
        </>
    )
}
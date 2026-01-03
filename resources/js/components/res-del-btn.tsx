import { router, Link } from '@inertiajs/react';
import { useRoute } from '../../../vendor/tightenco/ziggy';
import toast from 'react-hot-toast';

import { RotateCw } from 'lucide-react';
import { Trash } from 'lucide-react';

import type { Contact } from '@/types/Contact';

type Props = {
    selectedTrash: Contact | null
    onRestored: () => void
}

export default function RestoreDeleteBtn({ selectedTrash, onRestored }: Props) {
    if(!selectedTrash) return null;
    const route = useRoute();

    const handleRestore = (id: number) => {
        router.post(
            route('contact.restore', { id: id}), 
            {},
            {
                onSuccess: () => {
                    toast.success('Contact restored successfully!');
                    onRestored();
                }
            }
        )
    }
    
    const handleDelete = (id: number) => {
        router.delete(
            route('contact.forceDelete', {id: id}), {
                onSuccess: () => {
                    toast.success('Contact permanently deleted!')
                    onRestored();
                }
            }
        )
    }

    return (
        <div className="flex gap-2">
            <button
                onClick={ () => (handleRestore(selectedTrash.id))}
                className="flex-1 p-3 bg-green-500 rounded text-white flex items-center justify-center gap-2 transition-all duration-300 hover:bg-green-600 hover:cursor-pointer hover:scale-105"
            >
                <RotateCw size={16} />
                Restore
            </button>

            <button
                onClick={() => (handleDelete(selectedTrash.id))}
                className="flex-1 p-3 bg-red-500 rounded text-white flex items-center justify-center gap-2 transition-all duration-300 hover:bg-red-600 hover:cursor-pointer hover:scale-105"
            >
                <Trash size={16} />
                Permanently Delete
            </button>
        </div>
    )
}
import { Link, router } from '@inertiajs/react';
import { useRoute } from '../../../vendor/tightenco/ziggy';

import { Trash } from 'lucide-react';
import { SquarePen } from 'lucide-react';

import type { Contact } from '@/types/Contact';

type Props = {
    contact: Contact | null
    onDeleted: () => void
}

export default function EditDeleteBtn({ contact, onDeleted }: Props) {
    if(!contact) return null
    const route = useRoute();

    const handleDelete = () => {
        router.delete(route('contacts.destroy', {contact: contact.id}), {
            onSuccess: () => {
                onDeleted()
            }
        })
    }

    return (
        <div className="flex gap-2">
            {/* Edit */}
            <Link 
                href={route('contacts.edit', { contact: contact.id })}
                className="flex-1 p-3 bg-blue-500 rounded text-white flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-600 hover:cursor-pointer hover:scale-105">
                <SquarePen />
                Edit
            </Link>

            {/* Delete */}
            <button 
                onClick={handleDelete}
                className="flex-1 p-3 bg-red-500 rounded text-white flex items-center justify-center gap-2 transition-all duration-300 hover:bg-red-600 hover:cursor-pointer hover:scale-105">
                <Trash />
                Delete
            </button>
        </div>
    )
} 
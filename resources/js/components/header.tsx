import { Link } from "@inertiajs/react"

export default function Header() {
    const title = 'ContactHub'
    return (
        <header
            className="w-screen border-b px-30 py-4 fixed bg-blue-500 text-slate-50"
        >
            <Link
                href={'/home'}
            >   
                <p className="font-[Poppins] font-medium text-2xl">{title}</p>
            </Link>
        </header>
    )
}
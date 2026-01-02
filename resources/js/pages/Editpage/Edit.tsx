import { usePage } from "@inertiajs/react"

import MainLayout from "@/layouts/main-layout"
import EditForm from "@/components/edit-form"

import type { Contact } from "@/types/Contact"

export default function Edit() {

    return (
        <MainLayout>
            <EditForm />
        </MainLayout>
    )
}
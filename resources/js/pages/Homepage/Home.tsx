import { usePage } from "@inertiajs/react"

import MainLayout from "@/layouts/main-layout"
import DataContainer from "@/components/data-container"

export default function Home() {

    return (
        <MainLayout>
            <DataContainer />
        </MainLayout>
    )
}
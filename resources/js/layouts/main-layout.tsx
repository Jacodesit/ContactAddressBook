import Header from "@/components/header"

interface MainLayoutProps {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return(
        <>
            <Header />
            <main className="py-20 px-30">
                { children }
            </main>
        </>
    )
}
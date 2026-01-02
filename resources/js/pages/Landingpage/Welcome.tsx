import { useState } from "react"

import SideContainer from "@/components/side-container"
import ActionBtn from "@/components/action-btn"
import Footer from "@/components/footer"
import DevModal from "@/components/dev-modal"

export default function Welcome() {
    const headline1 = 'Contact List'
    const headline2 = 'Address Book'
    const subtext1 = 'A simple contact list application built with Laravel, Inertia.js, React, and Typescript.'
    const subtext2 = 'It allows users to create, view, edit, and manage contacts while focusing on soft delete functionality.'

    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <main className="flex justify-center items-center h-screen w-full bg-[#f9fafb] relative">
            <div
                className="absolute inset-0 z-0"
                style={{
                backgroundImage: `
                    linear-gradient(to right, #d1d5db 1px, transparent 1px),
                    linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
                WebkitMaskImage:
                    "radial-gradient(ellipse 90% 90% at 0% 100%, #000 50%, transparent 90%)",
                maskImage:
                    "radial-gradient(ellipse 90% 90% at 0% 100%, #000 50%, transparent 90%)",
                }}
            />

            <div className="z-[90] flex justify-between px-10">
                <div className="w-1/2 flex justify-center flex-col gap-20 pt-20">
                    <div className="flex flex-col gap-5">
                        <div>
                            <h1 className="text-8xl font-medium text-blue-700 font-[Poppins]"> { headline1 } ,</h1>
                            <h1 className="text-8xl font-medium text-blue-700 font-[Poppins]"> { headline2 }</h1>
                        </div>
                        <div className="text-lg">
                            <p> { subtext1 } </p>
                            <p> { subtext2 } </p>
                        </div>
                        <ActionBtn onClick={() => setIsOpen(true)}/>
                        <DevModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
                    </div>
                    <Footer />
                </div>
                <div className="w-1/2">
                    <SideContainer />
                </div>
            </div>
        </main>
    )
}
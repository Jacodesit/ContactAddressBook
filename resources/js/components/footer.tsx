export default function Footer() {
    const text1 = '© 2025 All rights reserved.'
    const text2 = 'Built with Laravel, Inertia.js, React, and Typescript.'
    return (
        <footer className="z-[90]">
            <p className="text-xs text-gray-500"> {text1}</p>
            <p className="text-xs text-gray-500"> {text2} </p>
        </footer>
    )
}
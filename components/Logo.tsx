import { Wallet } from 'lucide-react'
import React from 'react'

function Logo() {
    return (
        <a href="/" className="flex items-center gap-2">
            <Wallet className='stroke h-11 w-11 stroke-amber-500 stroke-[1.5]' />
            <span className="bg-gradient-to-r from-amber-400 to-amber-500
            bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
                Duit Tracker
            </span>
        </a>
    )
}
export function LogoMobile() {
    return (
        <a href="/" className="flex items-center gap-2">
            {/* <Wallet className='stroke h-11 w-11 stroke-amber-500 stroke-[1.5]' /> */}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500
            bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
                Duit Tracker
            </span>
        </a>
    )
}
export default Logo
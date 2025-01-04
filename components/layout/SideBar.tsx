'use client';

import { NAVIGATION_LINKS } from '@/constants/navigationLinks'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
    const pathname = usePathname();
    return (
        <div className='w-1/5 p-10 flex items-center flex-col border-r'>
            <Link href={"/"} className='text-3xl font-bold'>Cardify</Link>

            <nav className='flex flex-col gap-4 w-full mt-72'>
                {NAVIGATION_LINKS.map(item => (
                    <Link href={item.href} key={item.name} className={`${pathname === item.href ? 'bg-primary text-white' : ''} text-lg font-medium flex items-center gap-4 py-4 rounded-lg hover:bg-primary hover:text-white px-4`}>{item.icon} {item.name}</Link>
                ))}
            </nav>
        </div>
    )
}

export default SideBar
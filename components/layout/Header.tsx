import Link from 'next/link'
import React from 'react'
import Button from '../common/Button'

const Header = () => {
    return (
        <header className='py-6 px-6 shadow-sm fixed w-full z-10'>
            <div className="main-layout h-full display-between">
                <Link href={"/"} className='text-3xl font-bold'>Cardify</Link>

                <Button href='/dashboard'>Dashboard</Button>

            </div>
        </header>
    )
}

export default Header
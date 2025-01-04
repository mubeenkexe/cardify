import React from 'react'
import Button from '../common/Button'
import Link from 'next/link'
import Image from 'next/image'

const LandingPage = () => {
    return (
        <div className='h-screen display-center relative'>
            <div className='main-layout text-center display-center flex-col gap-8 md:mb-36'>
                <h1 className='text-6xl font-bold'>Master Anything Faster with Cardify</h1>
                <p className='text-text-secondary text-lg font-medium md:w-3/4'>Your ultimate tool to create, manage, and master flashcards. Organize your learning, boost retention, and track your progress—all in one place.</p>

                <div className='display-center gap-4'>
                    <Button href='/dashboard'>Get Started</Button>
                    <Link href='/about' className='text-primary'>Learn More</Link>
                </div>

            </div>
            <Image src='/images/graduation.svg' alt='Landing Page Image' height={800} width={800} className='absolute bottom-0 left-0' />
        </div>
    )
}

export default LandingPage
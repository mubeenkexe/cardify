import Link from 'next/link'
import React from 'react'

const Button = ({ children, type, onClick, href, className }: ButtonProps) => {
    if (href) {
        return <Link href={href} className={`button ${className}`}>{children}</Link>
    }

    return (
        <button type={type} onClick={onClick} className={`button ${className}`}>{children}</button>
    )
}

export default Button
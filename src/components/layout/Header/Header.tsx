'use client'

import React from 'react'
import { M_PLUS_Rounded_1c } from '@next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdLightMode, MdMenu, MdNightlight } from 'react-icons/md'
import { IconButton } from '../../buttons/IconButton/IconButton'
import styles from './Header.module.css'

const mPlus = M_PLUS_Rounded_1c({ subsets: ['latin'], weight: ["400", "500", "700"], variable: '--font-mplus' })

const routes = [
    { href: '/', name: 'About me' },
    { href: '/portfolio', name: 'Portfolio' },
    { href: '/blog', name: 'Blog' }
]

export const Header = () => {
    const path = usePathname()

    return (
        <header
            className={styles.header}>
            <Link href={'/'} className={`${mPlus.className} ${styles.logo}`}>pand.dev</Link>
            <nav className={styles.navigation}>
                {routes.map(r => <Link
                    key={r.href}
                    className={r.href == path
                        ? styles.active
                        : ''}
                    href={r.href}
                >
                    {r.name}
                </Link>)}
            </nav>
            <div className='flex gap-x-1 xs:gap-x-2'>

                <IconButton
                    className={styles.burger_btn}
                    variant='ghost'
                    ariaLabel='Mobile menu button'
                ><MdMenu /></IconButton>
            </div>
        </header>
    )
}

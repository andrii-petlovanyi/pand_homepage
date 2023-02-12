'use client'

import React, { useEffect, useState } from 'react'
import { M_PLUS_Rounded_1c } from '@next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { MdLightMode, MdMenu, MdNightlight } from 'react-icons/md'
import { IconButton } from '../../buttons/IconButton/IconButton'

const mPlus = M_PLUS_Rounded_1c({ subsets: ['latin'], weight: ["400", "500", "700"], variable: '--font-mplus' })

const routes = [
    { href: '/portfolio', name: 'Portfolio' },
    { href: '/blog', name: 'Blog' }
]

export const Header = () => {
    const path = usePathname()
    const { theme, setTheme } = useTheme()
    const [isDark, setIsDark] = useState<boolean>()

    useEffect(() => {
        if (theme == 'dark') {
            setIsDark(true)
        } else {
            setIsDark(false)
        }
    }, [theme])

    return (
        <header
            className={'py-2 flex justify-between'}>
            <Link href={'/'} className={`${mPlus.className} ` + 'font-bold text-xl flex items-center'}>pand.dev</Link>
            <nav className='hidden xs:flex gap-x-4 items-center'>
                {routes.map(r => <Link
                    key={r.href}
                    className={r.href == path
                        ? 'text-red-500'
                        : ''} href={r.href}
                >
                    {r.name}
                </Link>)}
            </nav>
            <div className='flex gap-x-2'>
                <IconButton
                    onClick={() => setTheme(isDark ? 'light' : 'dark')}
                    className='text-black dark:text-white'
                >
                    {isDark ? <MdLightMode /> : <MdNightlight />}
                </IconButton>
                <IconButton className='xs:hidden'><MdMenu /></IconButton>
            </div>
        </header>
    )
}

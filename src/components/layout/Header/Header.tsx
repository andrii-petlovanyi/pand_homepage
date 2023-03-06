'use client';

import React from 'react';
import { M_PLUS_Rounded_1c } from '@next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import cn from 'classnames';
import { MobileMenu } from './MobileMenu/MobileMenu';

const mPlus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mplus',
});

const routes = [
  { href: '/', name: 'About me' },
  { href: '/portfolio', name: 'Portfolio' },
  { href: '/blog', name: 'Blog' },
];

export const Header = () => {
  const path = usePathname();

  return (
    <header className={styles.header}>
      <Link href={'/'} className={`${mPlus.className} ${styles.logo}`}>
        pand.dev
      </Link>
      <nav className={styles.navigation}>
        {routes.map(r => (
          <Link
            key={r.href}
            className={cn(styles.link, {
              [styles.active]: r.href == path,
              [styles.active_line]: r.href == path,
            })}
            href={r.href}
          >
            {r.name}
          </Link>
        ))}
      </nav>
      <MobileMenu routes={routes} />
    </header>
  );
};

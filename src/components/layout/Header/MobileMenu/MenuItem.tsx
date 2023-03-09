'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IRoute } from '@/interface/header';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import cn from 'classnames';
import styles from './MobileMenu.module.css';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface IMenuITemProps {
  route: IRoute;
  toggleOpen: () => void;
}

export const MenuItem = ({
  route,
  toggleOpen,
}: IMenuITemProps): JSX.Element => {
  const path = usePathname();

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={styles.mobile_nav__item}
    >
      <Link
        href={route.href}
        className={cn(styles.mobile_nav__link, {
          [styles.active]: route.href == path,
        })}
        onClick={() => toggleOpen()}
      >
        {route.name}
      </Link>
    </motion.li>
  );
};

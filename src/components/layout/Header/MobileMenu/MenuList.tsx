'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { IRoute } from '@/interface/header';

import styles from './MobileMenu.module.css';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface IMenuListProps {
  routes: IRoute[];
  toggleOpen: () => void;
}

export const MenuList = ({
  routes,
  toggleOpen,
}: IMenuListProps): JSX.Element => (
  <motion.ul variants={variants} className={styles.mobile_nav__list}>
    {routes.map((route: IRoute) => (
      <MenuItem route={route} toggleOpen={toggleOpen} key={route.name} />
    ))}
  </motion.ul>
);

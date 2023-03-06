'use client';

import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { IRoute } from '@/interface/header';
import { useDimensions } from '@/hooks/useDimensions';
import { MenuList } from './MenuList';
import { MenuToggle } from './MenuToggle';

import styles from './MobileMenu.module.css';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 30px) 30px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at calc(100% - 30px) 30px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

interface IMobileMenu {
  routes: IRoute[];
}

export const MobileMenu = ({ routes }: IMobileMenu): JSX.Element => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className={styles.mobile_nav}
    >
      <motion.div className={styles.background} variants={sidebar} />
      <MenuList routes={routes} toggleOpen={toggleOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface FramerWrapperProps {
  children: ReactNode;
}

export const FrameWrapper = ({ children, ...props }: FramerWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ x: '100%', scale: 0.9, opacity: 0 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.3,
          type: 'spring',
        }}
        {...props}
      >
        <div style={{ paddingBottom: '44px' }}>{children}</div>
      </motion.main>
    </AnimatePresence>
  );
};

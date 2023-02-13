'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode } from 'react'

interface FramerWrapperProps {
    children: ReactNode;
    className?: string;
}

export const FrameWrapper = ({ children, className, ...props }: FramerWrapperProps) => {
    return (
        <AnimatePresence mode='wait'>
            <motion.main
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`my-4 ${className ? className : ''}`}
                {...props}
            >
                {children}
            </motion.main>
        </AnimatePresence>
    )
}

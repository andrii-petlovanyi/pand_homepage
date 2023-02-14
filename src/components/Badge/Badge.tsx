import React, { ReactNode } from 'react';
import cn from 'classnames';

import style from './Badge.module.css';

interface BadgeProps {
    children: ReactNode;
    className?: string;
    color: 'red' | 'green' | 'blue'
    size?: 'xs' | 'sm' | 'base' | 'lg'
    variant: 'outline' | 'solid' | 'subtitle'
}

export const Badge = ({ children, className, variant, size = 'sm', color, ...props }: BadgeProps) => {


    return (
        <span
            className={cn(style.badge, {
                [style[variant]]: variant,
                [style[size]]: size,
                [style[color]]: color
            }, className)}
            {...props}
        >
            {children}
        </span >
    )
}

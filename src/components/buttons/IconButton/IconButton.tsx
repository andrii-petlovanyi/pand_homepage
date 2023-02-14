import type { ComponentPropsWithRef, FC, ReactNode } from 'react';
import React from 'react';
import cn from 'classnames';

import style from './IconButton.module.css';


export interface IconButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
    onClick?: () => void;
    variant: 'ghost' | 'outlined'
    loading?: boolean;
    disabled?: boolean;
    children: ReactNode;
    ariaLabel: string;
}

export const IconButton: FC<IconButtonProps> = ({
    type = 'button',
    disabled,
    loading,
    className,
    children,
    variant,
    ariaLabel,
    ...props
}) => {



    return (
        <button
            type={type}
            disabled={loading || disabled}
            className={cn(style.button, {
                [style[variant]]: variant,
            }, className)}
            aria-label={ariaLabel}
            {...props}
        >
            {children}
        </button>
    );
};
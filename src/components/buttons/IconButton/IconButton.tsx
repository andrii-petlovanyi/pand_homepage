import type { ComponentPropsWithRef, FC, ReactNode } from 'react';
import React from 'react';


export interface IconButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
    onClick?: () => void;
    loading?: boolean;
    disabled?: boolean;
    children: ReactNode;
}

export const IconButton: FC<IconButtonProps> = ({
    type = 'button',
    disabled,
    loading,
    className,
    children,
    ...props
}) => {


    return (
        <button
            type={type}
            disabled={loading || disabled}
            className={'border-solid border border-gray-600 text-lg rounded p-2 hover:scale-105 transition duration-250' + ` ${className}`}

            {...props}
        >
            {children}
        </button>
    );
};
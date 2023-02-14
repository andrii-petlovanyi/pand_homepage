import React from "react";

type Tag = 'div' | 'span' | 'h1' | 'h2' | 'p' | 'label';
type Variant =
    | 'title-s'
    | 'title-m'
    | 'body-s'
    | 'body-m'
    | 'sub-title-s'
    | 'sub-title-m';

interface TypographyProps {
    tag?: Tag;
    variant: Variant;
    children: React.ReactNode;
    className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
    tag = 'div',
    children,
    variant,
    className = ''
}) => {
    const Component = tag;
    let variantStyle;

    switch (variant) {
        case ('title-s'):
            variantStyle = 'font-bold text-xl';
            break;
        case ('title-m'):
            variantStyle = 'font-bold text-lg';
            break;
        case ('sub-title-s'):
            variantStyle = 'font-bold text-base';
            break;
        case ('sub-title-m'):
            variantStyle = 'font-bold text-sm';
            break;
        case ('body-s'):
            variantStyle = 'font-light text-base';
            break;
        case ('body-m'):
            variantStyle = 'font-light text-sm';
            break;
    }

    return <>
        <Component
            className={` ${variantStyle} ${className}`}
        >
            {children}
        </Component>
    </>;
};
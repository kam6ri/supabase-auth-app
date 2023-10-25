import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';

interface LabelProps extends ComponentPropsWithoutRef<'label'> {}

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
    props.className = clsx(
        'text-xs font-semibold text-red-500',
        props.className,
    );

    return <label {...props}>{children}</label>;
};

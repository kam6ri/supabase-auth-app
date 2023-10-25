import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

export const baseClassName = clsx(
    'box-border',
    'text-center text-sm',
    'rounded-md',
    'px-4 py-2',
);

export const PrimaryButton: React.FC<ButtonProps> = ({
    children,
    ...props
}) => {
    props.className = clsx(
        baseClassName,
        'border border-red-500 hover:border-red-600',
        'bg-red-500 hover:bg-red-600',
        'text-white',
        'h-10',
        props.className,
    );

    return <button {...props}>{children}</button>;
};

export const SecondaryButton: React.FC<ButtonProps> = ({
    children,
    ...props
}) => {
    props.className = clsx(
        baseClassName,
        'border border-red-500 hover:border-red-600',
        'bg-white hover:bg-red-100',
        'text-red-500 hover:text-red-600',
        props.className,
    );

    return <button {...props}>{children}</button>;
};

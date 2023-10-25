import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';

interface AlertProps extends ComponentPropsWithoutRef<'div'> {}

const baseClassName = clsx(
    'box-border',
    'text-left text-[10px]',
    'rounded-md',
    'px-4 py-2',
);

export const Success: React.FC<AlertProps> = ({ children, ...props }) => {
    props.className = clsx(
        baseClassName,
        'border border-green-300',
        'bg-green-50',
        'text-green-800',
        props.className,
    );

    return <div {...props}>{children}</div>;
};

export const Warning: React.FC<AlertProps> = ({ children, ...props }) => {
    props.className = clsx(
        baseClassName,
        'border border-yellow-300',
        'bg-yellow-50',
        'text-yellow-800',
        props.className,
    );

    return <div {...props}>{children}</div>;
};

export const Danger: React.FC<AlertProps> = ({ children, ...props }) => {
    props.className = clsx(
        baseClassName,
        'border border-red-300',
        'bg-red-50',
        'text-red-800',
        props.className,
    );

    return <div {...props}>{children}</div>;
};

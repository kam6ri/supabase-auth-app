import { Label } from '@/components/label';
import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
    label?: string | null;
    align?: 'left' | 'right';
}

export const baseClassName = clsx(
    'box-border',
    'border border-red-300 hover:border-red-600 focus:outline-none',
    'h-10',
    'bg-white',
    'text-sm text-gray-900',
    'rounded-md',
    'px-4 py-2',
);

export const Input: React.FC<InputProps> = ({
    label = null,
    align = 'left',
    ...props
}) => {
    props.className = clsx(
        baseClassName,
        align === 'left' ? 'text-left' : 'text-right',
        props.className,
    );

    return (
        <div className="flex flex-col relative space-y-2">
            {label && <Label htmlFor={props.id}>{label}</Label>}
            <input {...props} />
        </div>
    );
};

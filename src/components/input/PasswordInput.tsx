'use client';

import { baseClassName, InputProps } from '@/components/input';
import { Label } from '@/components/label';
import clsx from 'clsx';
import { useState } from 'react';

export const PasswordInput: React.FC<InputProps> = ({
    label = null,
    align = 'left',
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setShowPassword(!showPassword);
    };

    props.className = clsx(
        baseClassName,
        align === 'left'
            ? 'text-left py-2 pl-4 pr-10'
            : 'text-right py-2 pl-10 pr-4',
        props.className,
    );

    return (
        <div className="flex flex-col relative space-y-2">
            {label && <Label htmlFor={props.id}>{label}</Label>}
            <div className="relative flex flex-col">
                <input type={showPassword ? 'text' : 'password'} {...props} />
                <button
                    type="button"
                    onClick={submit}
                    className={clsx(
                        'absolute flex items-center h-full',
                        align === 'left'
                            ? 'right-0 top-0 py-2 pr-3'
                            : 'left-0 top-0 py-2 pl-3',
                    )}
                >
                    {showPassword ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 text-gray-400"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z"
                                clipRule="evenodd"
                            />
                            <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 text-gray-400"
                        >
                            <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                            <path
                                fillRule="evenodd"
                                d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

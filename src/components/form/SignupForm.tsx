import { PrimaryButton } from '@/components/button';
import { GoogleAuthButton } from '@/components/button/GoogleAuthButton';
import { Divider } from '@/components/divider';
import { Message } from '@/components/form/Message';
import { EmailInput } from '@/components/input/EmailInput';
import { PasswordInput } from '@/components/input/PasswordInput';
import clsx from 'clsx';
import Link from 'next/link';
import React, { ComponentPropsWithoutRef } from 'react';

interface SignupFormProps
    extends Omit<ComponentPropsWithoutRef<'form'>, 'action' | 'method'> {}

export const SignupForm: React.FC<SignupFormProps> = ({ ...props }) => {
    props.className = clsx(
        'flex flex-col space-y-4',
        'bg-white rounded-md',
        'p-8',
        'border border-gray-300',
        'shadow-md shadow-transition',
        props.className,
    );

    return (
        <form action="/api/auth/signup" method="POST" {...props}>
            <Message />
            <EmailInput
                label="メールアドレス"
                id="email"
                name="email"
                placeholder="you@example.com"
            ></EmailInput>
            <PasswordInput
                label="パスワード"
                id="password"
                name="password"
                placeholder="●●●●●●●●"
            ></PasswordInput>
            <PrimaryButton>新規登録</PrimaryButton>
            <p className="text-center text-xs text-gray-500">
                アカウントをお持ちの方は
                <Link
                    href="/login"
                    className="text-center text-xs text-red-500 ml-1"
                >
                    こちら
                </Link>
            </p>
            <Divider text="または" />
            <GoogleAuthButton formAction="/api/auth/google" />
        </form>
    );
};

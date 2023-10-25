import { PrimaryButton } from '@/components/button';
import { GoogleAuthButton } from '@/components/button/GoogleAuthButton';
import { Divider } from '@/components/divider';
import { Message } from '@/components/form/Message';
import { EmailInput } from '@/components/input/EmailInput';
import { PasswordInput } from '@/components/input/PasswordInput';
import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';

interface LoginFormProps
    extends Omit<ComponentPropsWithoutRef<'form'>, 'action' | 'method'> {}

export const LoginForm: React.FC<LoginFormProps> = ({ ...props }) => {
    props.className = clsx(
        'flex flex-col space-y-4',
        'bg-white rounded-md',
        'p-8',
        'border border-gray-300',
        'shadow-md shadow-transition',
        props.className,
    );

    return (
        <form action="/api/auth/login" method="POST" {...props}>
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
            <PrimaryButton>ログイン</PrimaryButton>
            {/* <p className="text-center text-xs text-gray-500">
                パスワードをお忘れの場合は
                <span className="text-center text-xs text-red-500 ml-1">こちら</span>
            </p> */}
            <Divider text="または" />
            <GoogleAuthButton formAction="/api/auth/google" />
        </form>
    );
};

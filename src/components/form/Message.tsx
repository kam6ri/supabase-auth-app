'use client';

import { Danger, Success, Warning } from '@/components/alert';
import { useSearchParams } from 'next/navigation';

const messages: { [key: string]: JSX.Element } = {
    default: <p>エラーが発生しました。</p>,
    '400': <p>メールアドレスかパスワードが間違っています。</p>,
    '301': (
        <p>
            確認メールを送信しました。
            <br />
            メール内のリンクをクリックして登録を完了してください。
        </p>
    ),
    '422': <p>パスワードは6文字以上で入力してください。</p>,
    '429': (
        <p>
            メール送信の上限に達しました。
            <br />
            時間をおいて再度お試しください。
        </p>
    ),
};

export const Message: React.FC = () => {
    const searchParams = useSearchParams();

    const code = searchParams.get('code');
    const message =
        code === null ? null : messages[code] ?? messages['default'];

    if (code === null) return null;

    // if code is 2xx or 3xx, return success message
    if (code.startsWith('2') || code.startsWith('3')) {
        return <Success>{message}</Success>;
    }
    // if code is 4xx, return warning message
    else if (code.startsWith('4')) {
        return <Warning>{message}</Warning>;
    }
    // if code is 5xx or other, return error message
    else {
        return <Danger>{message}</Danger>;
    }
};

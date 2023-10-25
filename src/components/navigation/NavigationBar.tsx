import NavigationItem from '@/components/navigation/NavigationItem';
import { createClient } from '@/lib/supabase/server';

interface NavigationBarProps {
    size?: 'small' | 'medium' | 'large';
}

export default async function NavigationBar({
    size = 'medium',
}: NavigationBarProps) {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (
        <div
            className={`sticky top-0 z-50 flex flex-row items-center justify-between w-screen bg-white shadow-md px-4 py-2 ${
                size === 'small'
                    ? 'text-xs h-12'
                    : size === 'medium'
                    ? 'text-sm h-16'
                    : 'text-base h-20'
            }
        `}
        >
            <div className="flex flex-row items-center justify-start space-x-4">
                <NavigationItem href="/">
                    <p>Supabase auth app</p>
                </NavigationItem>
            </div>
            {user ? (
                <div className="flex flex-row items-center justify-end space-x-4">
                    <NavigationItem>
                        <p>{user.email}でログイン中</p>
                    </NavigationItem>
                    <NavigationItem href="/mypage" style="solid">
                        マイページ
                    </NavigationItem>
                    <form action="/api/auth/logout" method="POST">
                        <button
                            className="py-2 px-4 text-red-500 hover:text-red-700 border border-red-500 hover:border-red-700 hover:bg-red-100 rounded-md box-border"
                            type="submit"
                        >
                            ログアウト
                        </button>
                    </form>
                </div>
            ) : (
                <div className="flex flex-row items-center justify-end space-x-4">
                    <NavigationItem href="/login" style="solid">
                        ログイン
                    </NavigationItem>
                    <NavigationItem href="/signup" style="outline">
                        新規登録
                    </NavigationItem>
                </div>
            )}
        </div>
    );
}

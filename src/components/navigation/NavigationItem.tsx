import Link from 'next/link';

interface NavigationItemProps {
    children: React.ReactNode;
    href?: string | null;
    style?: 'none' | 'outline' | 'solid';
}

export default function NavigationItem({
    children,
    href = null,
    style = 'none',
}: NavigationItemProps) {
    const styleClass =
        style === 'none'
            ? ''
            : style === 'outline'
            ? 'text-red-500  hover:text-red-700 border border-red-500 hover:border-red-700 hover:bg-red-100 rounded-md box-border'
            : 'text-white bg-red-500 hover:bg-red-700 rounded-md';

    return href === null ? (
        <div
            className={`flex flex-row items-center justify-center space-x-2 px-4 py-2 ${styleClass}`}
        >
            {children}
        </div>
    ) : (
        <Link
            href={href}
            className={`flex flex-row items-center justify-center space-x-2 px-4 py-2 ${styleClass}`}
        >
            {children}
        </Link>
    );
}

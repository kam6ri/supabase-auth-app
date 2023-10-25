import NavigationBar from '@/components/navigation/NavigationBar';
import '@/styles/globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
});

const roboto = Roboto({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

export const metadata: Metadata = {
    title: 'Supabase auth app',
    description: 'Supabase auth app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={clsx(inter.className, roboto.variable, 'bg-gray-50')}
            >
                <NavigationBar />
                {children}
            </body>
        </html>
    );
}

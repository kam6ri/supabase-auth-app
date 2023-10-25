import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    const requestUrl = new URL(request.url);

    const supabase = createClient();

    const {
        data: { url },
        error,
    } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${requestUrl.origin}/api/auth/callback`,
        },
    });

    if (error) {
        return NextResponse.redirect(
            `${requestUrl.origin}/login?error=${error.message}`,
            {
                status: 301,
            },
        );
    }

    if (url) {
        return NextResponse.redirect(url, {
            status: 301,
        });
    }

    return NextResponse.redirect(`${requestUrl.origin}/login`, {
        status: 301,
    });
}

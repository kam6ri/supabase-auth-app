import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    const requestUrl = new URL(request.url);
    const form = await request.formData();

    const email = String(form.get('email'));
    const password = String(form.get('password'));

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${requestUrl.origin}/api/auth/callback`,
        },
    });

    if (error) {
        return NextResponse.redirect(
            `${requestUrl.origin}/signup?code=${error.status}&message=${error.message}`,
            {
                status: 301,
            },
        );
    }

    return NextResponse.redirect(`${requestUrl.origin}/login?code=${301}`, {
        status: 301,
    });
}

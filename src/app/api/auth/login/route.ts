import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    const requestUrl = new URL(request.url);
    const form = await request.formData();

    const email = String(form.get('email'));
    const password = String(form.get('password'));

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return NextResponse.redirect(
            `${requestUrl.origin}/login?code=${error.status}&message=${error.message}`,
            {
                status: 301,
            },
        );
    }

    return NextResponse.redirect(requestUrl.origin, {
        status: 301,
    });
}

import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    const requestUrl = new URL(request.url);

    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
        return NextResponse.redirect(requestUrl.origin, {
            status: 301,
        });
    }

    return NextResponse.redirect(requestUrl.origin, {
        status: 301,
    });
}

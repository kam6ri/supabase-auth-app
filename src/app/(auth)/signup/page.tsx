import { SignupForm } from '@/components/form/SignupForm';

export default function SignUp() {
    return (
        <div className="p-8 space-y-4 min-h-screen flex flex-col items-center justify-start">
            <SignupForm className="w-80" />
        </div>
    );
}

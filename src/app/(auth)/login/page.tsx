import { LoginForm } from '@/components/form/LoginForm';

export default function Login() {
    return (
        <div className="p-8 space-y-4 min-h-screen flex flex-col items-center justify-start">
            <LoginForm className="w-80" />
        </div>
    );
}

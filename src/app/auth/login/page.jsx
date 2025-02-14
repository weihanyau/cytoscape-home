import { AuthLayout } from '@/components/AuthLayout';
import { Button } from '@/components/Button';
import { TextField } from '@/components/base/Fields';

export const metadata = {
    title: 'Sign In',
};

export default function Login() {
    return (
        <AuthLayout
            title="Sign in to account"
            subtitle={
                <>
                    Don’t have an account?{' '}
                    <a
                        href="/register"
                        className="text-complement-600"
                    >
                        Sign up
                    </a>{' '}
                    for a free trial.
                </>
            }
        >
            <form>
                <div className="space-y-6">
                    <TextField
                        label="Email address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                    />
                </div>
                <Button
                    type="submit"
                    color="complement"
                    className="mt-8 w-full"
                >
                    Sign in to account
                </Button>
            </form>
        </AuthLayout>
    );
}

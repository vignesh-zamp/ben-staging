import { LoginForm } from '@/components/auth/login-form';
import { ClutchLogo } from '@/components/icons/clutch-logo';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function LoginPage() {
  return (
    <div className="dark">
      <header className="fixed top-0 left-0 right-0 h-16 bg-secondary px-6 flex items-center">
        <ClutchLogo className="h-8 w-auto text-white" />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 pt-16">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

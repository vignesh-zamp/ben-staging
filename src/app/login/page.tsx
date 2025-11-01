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
      <header className="fixed top-0 left-0 right-0 h-16 bg-secondary px-6 flex items-center z-10">
        <ClutchLogo className="h-8 w-auto text-white" />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 pt-16">
        <div className="text-center mb-8">
            <h1 className="text-2xl font-bold tracking-[0.3em] text-white">CLUTCH</h1>
            <p className="text-sm tracking-[0.2em] text-white/80">ADMIN PANEL</p>
        </div>
        <Card className="w-full max-w-sm bg-card text-card-foreground">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

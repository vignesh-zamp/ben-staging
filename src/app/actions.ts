'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { cookies } from 'next/headers';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type FormState = {
  message: string;
};

export async function authenticate(
  prevState: FormState | undefined,
  formData: FormData
) {
  const parsed = loginSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { message: 'Invalid email or password format.' };
  }

  const { email, password } = parsed.data;

  // Hardcoded credentials for demo purposes
  if (email === 'benjamin@example.com' && password === 'zamp123') {
    const cookieStore = cookies();
    cookieStore.set('auth-token', 'valid-token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // One week
      path: '/',
    });
    redirect('/dashboard');
  }

  return { message: 'Invalid email or password.' };
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete('auth-token');
  redirect('/login');
}

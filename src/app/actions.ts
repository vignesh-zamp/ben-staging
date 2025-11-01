'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';

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
    redirect('/dashboard');
  }

  return { message: 'Invalid email or password.' };
}

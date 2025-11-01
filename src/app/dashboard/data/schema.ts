import { z } from 'zod';

export const taskSchema = z.object({
  id: z.string(),
  task: z.string(),
  status: z.string(),
  dueDate: z.string(),
  order: z.string(),
  stock: z.string(),
  customer: z.object({
    name: z.string(),
    email: z.string(),
  }),
  assignedTo: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

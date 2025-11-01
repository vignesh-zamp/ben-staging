import { z } from 'zod';

export const taskSchema = z.object({
  id: z.string(),
  task: z.string(),
  status: z.string(),
  dueDate: z.string(),
  order: z.string(),
  stock: z.string().optional(),
  customer: z.object({
    name: z.string(),
    email: z.string(),
  }),
  assignedTo: z.string().optional(),
  deliveryDate: z.string().optional(),
  reminders: z.string().optional(),
});

export type Task = z.infer<typeof taskSchema>;

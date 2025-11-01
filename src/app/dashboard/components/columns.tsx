'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CheckCircle, Circle, XCircle, Clock, Ban } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from './data-table-column-header';
import { Task } from '../data/schema';
import { DataTableRowActions } from './data-table-row-actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { format } from 'date-fns';

export const statuses = [
  { value: 'Completed', label: 'Completed', icon: CheckCircle },
  { value: 'In Progress', label: 'In Progress', icon: Clock },
  { value: 'Pending', label: 'Pending', icon: Circle },
  { value: 'Canceled', label: 'Canceled', icon: XCircle },
];

const assignedToAvatars = PlaceHolderImages.filter(img => img.id.startsWith('user-'));

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'task',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] truncate font-medium">
            {row.getValue('task')}
          </span>
        </div>
      );
    },
    enableSorting: true,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status')
      );
      
      let variant: 'outline' | 'secondary' | 'default' | 'destructive' = 'outline';
      if (status?.value === 'Completed') variant = 'default';
      if (status?.value === 'In Progress') variant = 'secondary';
      if (status?.value === 'Canceled') variant = 'destructive';
      
      if (!status) {
        return null;
      }

      return (
        <Badge variant={variant} className="whitespace-nowrap">
          {status.icon && <status.icon className="mr-2 h-4 w-4" />}
          <span>{status.label}</span>
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'dueDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Due Date" />
    ),
    cell: ({ row }) => {
        const date = new Date(row.getValue('dueDate'));
        return <div className="whitespace-nowrap">{format(date, 'MMM d, yyyy')}</div>;
    },
  },
  {
    accessorKey: 'order',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('order')}</div>,
  },
    {
    accessorKey: 'stock',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Stock #" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('stock')}</div>,
  },
  {
    accessorKey: 'customer',
    header: 'Customer',
    cell: ({ row }) => {
      const customer = row.getValue('customer') as {name: string, email: string};
      return (
        <div>
          <div className="font-medium">{customer.name}</div>
          <div className="text-sm text-muted-foreground">{customer.email}</div>
        </div>
      )
    }
  },
  {
    accessorKey: 'assignedTo',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Assigned To" />
    ),
    cell: ({ row }) => {
      const assigneeId = row.getValue('assignedTo') as string;
      const assigneeName = assigneeId.charAt(0).toUpperCase() + assigneeId.slice(1);
      const avatar = assignedToAvatars.find(a => a.id === `user-${assigneeId}`);
      
      return (
        <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
                {avatar && <AvatarImage src={avatar.imageUrl} alt={assigneeName} />}
                <AvatarFallback>{assigneeId.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span>{assigneeName}</span>
        </div>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

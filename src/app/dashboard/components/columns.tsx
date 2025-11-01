'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Pencil, MessageSquare, MessageSquareWarning, Link as LinkIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from './data-table-column-header';
import { Task } from '../data/schema';
import { DataTableRowActions } from './data-table-row-actions';
import { format } from 'date-fns';
import Link from 'next/link';

export const columns: ColumnDef<Task>[] = [
  {
    id: 'comments',
    cell: ({ row }) => {
      const hasWarning = row.original.id === "TASK-5678" || row.original.id === "TASK-1121";
      return (
        <div className="text-muted-foreground">
          {hasWarning ? <MessageSquareWarning className="h-4 w-4 text-red-500" /> : <MessageSquare className="h-4 w-4" />}
        </div>
      );
    },
    header: '',
  },
  {
    id: 'edit',
    cell: ({ row }) => (
      <div className="flex items-center gap-1 text-muted-foreground">
        <Pencil className="h-3 w-3" />
        <span className="text-xs">EDIT TASK</span>
      </div>
    ),
    header: '',
  },
  {
    accessorKey: 'task',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task" />
    ),
    cell: ({ row }) => {
      const task = row.original;
      const link = task.id === 'TASK-7878' ? `/dashboard/order/${task.order}` : '#';
      return (
        <Link href={link} className="font-medium text-primary hover:underline whitespace-nowrap">
          {row.getValue('task')}
        </Link>
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
      const status = row.getValue('status') as string;
      return (
        <Badge variant={status === 'Incomplete' ? 'destructive' : 'default'} className="whitespace-nowrap bg-[#3a3a3a] text-white">
          {status}
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
        return <div className="whitespace-nowrap">{format(date, "MMM d'th' yyyy, hh:mm aaaaa'm'")}</div>;
    },
  },
  {
    accessorKey: 'order',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order" />
    ),
    cell: ({ row }) => (
        <Link href="#" className="text-primary hover:underline flex items-center gap-1">
            <LinkIcon className="h-3 w-3" />
            {row.getValue('order')}
        </Link>
    ),
  },
    {
    accessorKey: 'stock',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Stock" />
    ),
    cell: ({ row }) => <div className="whitespace-nowrap">{row.getValue('stock')}</div>,
  },
  {
    accessorKey: 'customer',
    header: 'Customer',
    cell: ({ row }) => {
      const customer = row.getValue('customer') as {name: string, email: string};
      const task = row.original;
      const link = task.id === 'TASK-7878' ? `/dashboard/order/${task.order}` : '#';
      return (
        <Link href={link} className="text-primary hover:underline whitespace-nowrap">
          {customer.name}
        </Link>
      )
    }
  },
  {
    accessorKey: 'assignedTo',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Assigned To" />
    ),
    cell: ({ row }) => {
      return <div className="whitespace-nowrap">{row.getValue('assignedTo') || ''}</div>;
    },
  },
    {
    accessorKey: 'deliveryDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Delivery Date" />
    ),
    cell: ({ row }) => {
        const dateStr = row.getValue('deliveryDate') as string | undefined;
        if (!dateStr) return null;
        const date = new Date(dateStr);
        return <div className="whitespace-nowrap">{format(date, "MMM d'th' yyyy, hh:mm aaaaa'm'")}</div>;
    },
  },
   {
    accessorKey: 'reminders',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reminders" />
    ),
    cell: ({ row }) => <div className="whitespace-nowrap">{row.getValue('reminders') || ''}</div>,
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { taskSchema } from './data/schema';
import { Button } from '@/components/ui/button';
import { User, Lock, MoreVertical } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'src/app/dashboard/data/tasks.json')
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function DashboardPage() {
  const tasks = await getTasks();

  return (
    <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-white">Tasks</h1>
                <Button variant="outline" className="bg-card text-card-foreground">BULK ASSIGN</Button>
            </div>
            <div className="flex-grow"></div>
            <div className="flex flex-wrap items-center gap-2">
                <Button variant="secondary" className="bg-primary text-primary-foreground">
                    <User className="mr-2 h-4 w-4" />
                    MY TASKS
                </Button>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <span className="whitespace-nowrap">Timezone</span>
                    <Select defaultValue="america-toronto">
                        <SelectTrigger className="w-[180px] bg-card text-card-foreground">
                            <SelectValue placeholder="Select a timezone" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="america-toronto">America/Toronto</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="flex items-center rounded-md bg-card p-1">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted/50 hover:text-white">NONE</Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted/50 hover:text-white">24 HOURS</Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted/50 hover:text-white">7 DAYS</Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted/50 hover:text-white">30 DAYS</Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted/50 hover:text-white">60 DAYS</Button>
                </div>
                <Button variant="outline" className="bg-card text-card-foreground">SAVED TABS</Button>
                <Button variant="default" className="bg-primary text-primary-foreground">+ NEW TAB</Button>
            </div>
        </div>

        <div className="flex items-center gap-4 border-b border-border pb-2">
            <div className="flex items-center gap-2 text-sm">
                <Lock className="h-4 w-4 text-white" />
                <span className="font-medium text-white">NEW TAB</span>
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">NEW TAB</span>
        </div>

        <DataTable data={tasks} columns={columns} />
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
            <p>Owned by Ben Guest</p>
            <p>1–50 of 1582</p>
        </div>
    </div>
  );
}

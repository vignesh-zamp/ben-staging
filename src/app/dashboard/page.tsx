import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { taskSchema } from './data/schema';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Simulate fetching data
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
    <Tabs defaultValue="my_tasks" className="w-full">
      <TabsList className="grid w-full max-w-md grid-cols-2">
        <TabsTrigger value="my_tasks">My Tasks</TabsTrigger>
        <TabsTrigger value="saved_tabs">Saved Tabs</TabsTrigger>
      </TabsList>
      <TabsContent value="my_tasks">
          <DataTable data={tasks} columns={columns} />
      </TabsContent>
      <TabsContent value="saved_tabs">
        <Card>
            <CardHeader>
                <CardTitle>Saved Tabs</CardTitle>
                <CardDescription>This is a placeholder for saved tabs content.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Your saved task views will appear here.</p>
            </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

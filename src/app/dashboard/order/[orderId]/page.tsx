import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ChevronRight,
  Clock,
  MoreHorizontal,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const identityTasks = [
    {
        team: "In-sale",
        assignedTo: "Christian Volfson",
        task: "Post-deposit customer call",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Complete",
        stateDate: "October 22, 2025 8:09 PM",
        documents: "-",
        dueDate: "-",
    },
    {
        team: "In-sale",
        assignedTo: "Christian Volfson",
        task: "Co-buyer driver license verification",
        badge: "EXT",
        badgeColor: "bg-blue-500",
        state: "Complete",
        stateDate: "October 22, 2025 8:25 PM",
        documents: "1/1 file(s)",
        dueDate: "-",
    },
    {
        team: "In-sale",
        assignedTo: "Christian Volfson",
        task: "Driver license",
        badge: "EXT",
        badgeColor: "bg-blue-500",
        state: "Complete",
        stateDate: "October 22, 2025 8:25 PM",
        documents: "1/1 file(s)",
        dueDate: "-",
    }
]

export default function OrderDetailsPage({
  params,
}: {
  params: { orderId: string };
}) {
  return (
    <div className="text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <Link href="#" className="text-primary hover:underline">
            Orders
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold text-primary">Grant Michael (#72737)</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold text-white">C-KKZ9X4MH</span>
          <Badge className="bg-yellow-400 text-black">BOS Sent</Badge>
        </div>
        <div className="flex items-center gap-2">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold">UNLOCK DEAL</Button>
            <Button variant="outline" className="text-white border-white/50">MORE</Button>
        </div>
      </div>

      <div className="mt-4 border-b border-border">
          <div className="flex items-center">
              <Link href="#" className="py-2 px-4 text-sm text-muted-foreground">PURCHASE BUILDER</Link>
              <Link href="#" className="py-2 px-4 text-sm text-primary border-b-2 border-primary font-semibold">TASKS & DOCUMENTS</Link>
              <Link href="#" className="py-2 px-4 text-sm text-muted-foreground">NOTES</Link>
          </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card">
            <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">Tasks completed</p>
                <p className="text-2xl font-bold">22/26</p>
            </CardContent>
        </Card>
        <Card className="bg-card">
            <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">Days until delivery</p>
                <p className="text-2xl font-bold">-8 days</p>
            </CardContent>
        </Card>
        <Card className="bg-card">
            <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">Days sale pending</p>
                <p className="text-2xl font-bold">10 days</p>
            </CardContent>
        </Card>
        <Card className="bg-card">
            <CardContent className="p-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <p>Time since last activity</p>
                    <Clock className="h-4 w-4" />
                </div>
                <p className="text-2xl font-bold">8 days</p>
            </CardContent>
        </Card>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">ADD NEW TASK</Button>
            <Button variant="outline" className="text-white bg-card border-border">BULK ASSIGN TASKS</Button>
            <Button variant="outline" className="text-white bg-card border-border">DOWNLOAD</Button>
        </div>
        <Link href="#" className="text-sm text-primary font-semibold hover:underline">
            VIEW TASK HISTORY
        </Link>
      </div>

      <div className="mt-6 rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Identity</h2>
              <div className="flex items-center gap-2 text-sm text-green-500 font-semibold">
                  <CheckCircle2 className="h-4 w-4"/>
                  <span>3/3 Tasks Complete</span>
              </div>
          </div>
          <div className="p-4">
              <Table>
                  <TableHeader>
                      <TableRow className="border-b-0">
                          <TableHead className="text-muted-foreground">Team</TableHead>
                          <TableHead className="text-muted-foreground">Assigned to</TableHead>
                          <TableHead className="text-muted-foreground">Task</TableHead>
                          <TableHead className="text-muted-foreground">State</TableHead>
                          <TableHead className="text-muted-foreground">Documents</TableHead>
                          <TableHead className="text-muted-foreground">Due Date</TableHead>
                          <TableHead className="text-muted-foreground">Actions</TableHead>
                          <TableHead className="text-muted-foreground">Notes</TableHead>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      {identityTasks.map(task => (
                        <TableRow key={task.task} className="border-border">
                            <TableCell>{task.team}</TableCell>
                            <TableCell>{task.assignedTo}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Badge className={`${task.badgeColor} text-white`}>{task.badge}</Badge>
                                    <span>{task.task}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="text-green-500">{task.state}</div>
                                <div className="text-muted-foreground text-xs">{task.stateDate}</div>
                            </TableCell>
                            <TableCell>
                                {task.documents !== "-" ? 
                                <Link href="#" className="text-primary hover:underline">{task.documents}</Link> 
                                : "-"}
                            </TableCell>
                            <TableCell>{task.dueDate}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <MessageSquare className="h-5 w-5" />
                                    <MoreHorizontal className="h-5 w-5" />
                                </div>
                            </TableCell>
                             <TableCell></TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </div>
      </div>
    </div>
  );
}

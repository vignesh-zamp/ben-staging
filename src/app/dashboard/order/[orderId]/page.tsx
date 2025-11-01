import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ChevronRight,
  Clock,
  MoreHorizontal,
  MessageSquare,
  CheckCircle2,
  ChevronUp,
  ChevronDown,
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
        task: "Driver license",
        badge: "EXT",
        badgeColor: "bg-blue-500",
        state: "Complete",
        stateDate: "October 22, 2025 8:25 PM",
        documents: "1/1 file(s)",
        dueDate: "-",
    }
];

const tradeInTasks = [
    {
        team: "In-sale",
        assignedTo: "Christian Volfson",
        task: "Trade-in lien check",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Complete",
        stateDate: "October 24, 2025 6:46 PM",
        documents: "1/1 file(s)",
        dueDate: "-",
    },
    {
        team: "Market supply",
        assignedTo: "Christian Volfson",
        task: "Trade-in ownership",
        badge: "EXT",
        badgeColor: "bg-blue-500",
        state: "Complete",
        stateDate: "October 22, 2025 9:02 PM",
        documents: "1/1 file(s)",
        dueDate: "-",
    },
    {
        team: "Customer",
        assignedTo: "ASSIGN ADVISOR",
        task: "Trade-in appraisal",
        badge: "EXT",
        badgeColor: "bg-blue-500",
        state: "Complete",
        stateDate: "October 22, 2025 8:25 PM",
        documents: "-",
        dueDate: "-",
    }
];

const financingTasks = [
    {
        team: "Underwriting",
        assignedTo: "Christian Volfson",
        task: "Submit to lender",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Complete",
        stateDate: "October 22, 2025 9:02 PM",
        documents: "-",
        dueDate: "-",
        hasWarning: false,
    },
    {
        team: "Underwriting",
        assignedTo: "ASSIGN ADVISOR",
        task: "Finance application",
        badge: "EXT",
        badgeColor: "bg-blue-500",
        state: "Complete",
        stateDate: "October 22, 2025 7:02 AM",
        documents: "-",
        dueDate: "-",
        hasWarning: false,
    },
    {
        team: "Underwriting",
        assignedTo: "Abhi Shetty",
        task: "Finance stipulation verification",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Complete",
        stateDate: "October 24, 2025 6:48 PM",
        documents: "1/1 file(s)",
        dueDate: "-",
        hasWarning: true,
    },
    {
        team: "In-sale",
        assignedTo: "Christian Volfson",
        task: "Communicate decision to customer",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Complete",
        stateDate: "October 24, 2025 6:48 PM",
        documents: "-",
        dueDate: "-",
        hasWarning: false,
    },
    {
        team: "Underwriting",
        assignedTo: "Christian Volfson",
        task: "Verify financing complete",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Complete",
        stateDate: "October 24, 2025 6:48 PM",
        documents: "-",
        dueDate: "-",
        hasWarning: false,
    }
];

const contractSigningTasks = [
    {
        team: "Deal fund",
        assignedTo: "Piranave Chandraphalan",
        task: "Verify and send BOS",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Needs Review",
        stateDate: "",
        documents: "1/1 file(s)",
        dueDate: "October 25, 2025 9:09 AM",
        actions: "REVIEW",
    },
    {
        team: "Underwriting",
        assignedTo: "Jan Elijah Pilares",
        task: "Finance contract generation",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Complete",
        stateDate: "October 24, 2025 8:42 PM",
        documents: "1/1 file(s)",
        dueDate: "-",
    },
    {
        team: "Underwriting",
        assignedTo: "ASSIGN ADVISOR",
        task: "Bill of Sale generation",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Complete",
        stateDate: "October 24, 2025 8:42 PM",
        documents: "-",
        dueDate: "-",
    },
    {
        team: "Underwriting",
        assignedTo: "ASSIGN ADVISOR",
        task: "Upload unsigned contract",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Complete",
        stateDate: "October 25, 2025 4:33 AM",
        documents: "-",
        dueDate: "-",
    },
    {
        team: "Customer",
        assignedTo: "ASSIGN ADVISOR",
        task: "Contract signing",
        badge: "EXT",
        badgeColor: "bg-blue-500",
        state: "Complete",
        stateDate: "October 25, 2025 5:09 AM",
        documents: "-",
        dueDate: "-",
    },
];

const paymentTasks = [
    {
        team: "In-sale",
        assignedTo: "Christian Volfson",
        task: "Void Cheque or Direct Deposit Form",
        badge: "EXT",
        badgeColor: "bg-blue-500",
        state: "Complete",
        stateDate: "October 22, 2025 9:02 PM",
        documents: "1/1 file(s)",
        dueDate: "-",
    }
];

const proofOfInsuranceTasks = [
    {
        team: "In-sale",
        assignedTo: "Christian Volfson",
        task: "Proof of insurance",
        badge: "EXT",
        badgeColor: "bg-blue-500",
        state: "Complete",
        stateDate: "October 24, 2025 6:49 PM",
        documents: "1/1 file(s)",
        dueDate: "-",
    }
];

const licensingTasks = [
    {
        team: "Licensing",
        assignedTo: "ASSIGN ADVISOR",
        task: "Registration",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Incomplete",
        stateDate: "",
        documents: "-",
        dueDate: "October 25, 2025 1:30 AM",
    }
];

const dealVerificationTasks = [
    {
        team: "In-sale",
        assignedTo: "ASSIGN ADVISOR",
        task: "Verify underwriting complete",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Incomplete",
        stateDate: "",
        documents: "-",
        dueDate: "October 25, 2025 5:09 AM",
    },
    {
        team: "Deal fund",
        assignedTo: "Jan Elijah Pilares",
        task: "Deal audit",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Complete",
        stateDate: "October 25, 2025 4:35 AM",
        documents: "-",
        dueDate: "",
    },
    {
        team: "In-sale",
        assignedTo: "Christian Volfson",
        task: "Ready for Deal Ops",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Complete",
        stateDate: "October 22, 2025 9:20 PM",
        documents: "-",
        dueDate: "",
    },
    {
        team: "Deal fund",
        assignedTo: "Piranave Chandraphalan",
        task: "BOS and financing complete audit",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Complete",
        stateDate: "October 25, 2025 4:33 AM",
        documents: "-",
        dueDate: "",
    },
];

const productionTasks = [
    {
        team: "In-sale",
        assignedTo: "Christian Volfson",
        task: "Good to produce",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Complete",
        stateDate: "October 22, 2025 9:20 PM",
        documents: "-",
        dueDate: "",
    }
];

const crosslistedVehicleTransportTasks = [
    {
        team: "In-sale",
        assignedTo: "Christian Volfson",
        task: "Transport vehicle",
        badge: "INT",
        badgeColor: "bg-red-500",
        state: "Incomplete",
        stateDate: "",
        documents: "-",
        dueDate: "October 25, 2025 6:48 PM",
    }
];

export default function OrderDetailsPage({
  params,
}: {
  params: { orderId: string };
}) {
  return (
    <div className="text-white space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <Link href="#" className="text-primary hover:underline">
            Orders
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold text-primary">Alison Mullen (#72590)</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold text-white">C-YRSRVHD6</span>
          <Badge className="bg-yellow-400 text-black">BOS Sent</Badge>
        </div>
        <div className="flex items-center gap-2">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold">UNLOCK DEAL</Button>
            <Button variant="outline" className="text-white border-white/50">MORE</Button>
        </div>
      </div>

      <div className="border-b border-border">
          <div className="flex items-center">
              <Link href="#" className="py-2 px-4 text-sm text-muted-foreground">PURCHASE BUILDER</Link>
              <Link href="#" className="py-2 px-4 text-sm text-primary border-b-2 border-primary font-semibold">TASKS & DOCUMENTS</Link>
              <Link href="#" className="py-2 px-4 text-sm text-muted-foreground">NOTES</Link>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card">
            <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">Tasks completed</p>
                <p className="text-2xl font-bold">12/17</p>
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
                <p className="text-2xl font-bold">12 days</p>
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

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">ADD NEW TASK</Button>
            <Button variant="outline" className="text-white bg-card border-border">BULK ASSIGN TASKS</Button>
            <Button variant="outline" className="text-white bg-card border-border">DOWNLOAD</Button>
        </div>
        <Link href="#" className="text-sm text-primary font-semibold hover:underline">
            VIEW TASK HISTORY
        </Link>
      </div>

      <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Identity</h2>
              <div className="flex items-center gap-2 text-sm text-green-500 font-semibold">
                  <CheckCircle2 className="h-4 w-4"/>
                  <span>2/2 Tasks Complete</span>
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
      
      <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Trade-in</h2>
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
                      {tradeInTasks.map(task => (
                        <TableRow key={task.task} className="border-border">
                            <TableCell>{task.team}</TableCell>
                            <TableCell>
                                {task.assignedTo === 'ASSIGN ADVISOR' ? (
                                    <Link href="#" className="text-primary hover:underline font-semibold">{task.assignedTo}</Link>
                                ) : (
                                    task.assignedTo
                                )}
                            </TableCell>
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

      <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Financing</h2>
              <div className="flex items-center gap-2 text-sm text-green-500 font-semibold">
                  <CheckCircle2 className="h-4 w-4"/>
                  <span>5/5 Tasks Complete</span>
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
                      {financingTasks.map(task => (
                        <TableRow key={task.task} className="border-border">
                            <TableCell>{task.team}</TableCell>
                            <TableCell>
                                {task.assignedTo === 'ASSIGN ADVISOR' ? (
                                    <Link href="#" className="text-primary hover:underline font-semibold">{task.assignedTo}</Link>
                                ) : (
                                    task.assignedTo
                                )}
                            </TableCell>
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
                                    <div className="relative">
                                        <MessageSquare className="h-5 w-5" />
                                        {task.hasWarning && <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>}
                                    </div>
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

      <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Contract Signing</h2>
              <div className="flex items-center gap-2 text-sm text-yellow-500 font-semibold">
                  <span>4/5 Tasks Complete</span>
                  <ChevronUp className="h-4 w-4"/>
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
                      {contractSigningTasks.map(task => (
                        <TableRow key={task.task} className="border-border">
                            <TableCell>{task.team}</TableCell>
                            <TableCell>
                                {task.assignedTo === 'ASSIGN ADVISOR' ? (
                                    <Link href="#" className="text-primary hover:underline font-semibold">{task.assignedTo}</Link>
                                ) : (
                                    task.assignedTo
                                )}
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Badge className={`${task.badgeColor} text-white`}>{task.badge}</Badge>
                                    <span>{task.task}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                {task.state === 'Needs Review' ? (
                                    <div className="text-yellow-500">{task.state}</div>
                                ) : (
                                    <div className="text-green-500">{task.state}</div>
                                )}
                                <div className="text-muted-foreground text-xs">{task.stateDate}</div>
                            </TableCell>
                            <TableCell>
                                {task.documents !== "-" ? 
                                <Link href="#" className="text-primary hover:underline">{task.documents}</Link> 
                                : "-"}
                            </TableCell>
                            <TableCell className={task.state === 'Needs Review' ? 'text-red-500' : ''}>{task.dueDate}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    {task.actions === 'REVIEW' ? (
                                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs h-auto py-1 px-4">REVIEW</Button>
                                    ) : (
                                        <MessageSquare className="h-5 w-5" />
                                    )}
                                    <MoreHorizontal className="h-5 w-5" />
                                </div>
                            </TableCell>
                             <TableCell>
                                {task.actions !== 'REVIEW' && <MessageSquare className="h-5 w-5 invisible" /> }
                             </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </div>
      </div>

      <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Payment</h2>
              <div className="flex items-center gap-2 text-sm text-green-500 font-semibold">
                   <CheckCircle2 className="h-4 w-4"/>
                  <span>1/1 Tasks Complete</span>
                  <ChevronUp className="h-4 w-4 text-muted-foreground"/>
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
                      {paymentTasks.map(task => (
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
                                <Link href="#" className="text-primary hover:underline">{task.documents}</Link>
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

      <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Ancillary Products</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                  <span>0 tasks</span>
                  <ChevronUp className="h-4 w-4"/>
              </div>
          </div>
          <div className="p-4 text-center text-muted-foreground">
              No tasks have been created for this category
          </div>
      </div>

      <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Proof of Insurance</h2>
              <div className="flex items-center gap-2 text-sm text-green-500 font-semibold">
                  <CheckCircle2 className="h-4 w-4"/>
                  <span>1/1 Tasks Complete</span>
                  <ChevronUp className="h-4 w-4 text-muted-foreground"/>
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
                      {proofOfInsuranceTasks.map(task => (
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
                                <Link href="#" className="text-primary hover:underline">{task.documents}</Link>
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

       <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Licensing</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                  <span>0/1 Tasks Complete</span>
                  <ChevronUp className="h-4 w-4"/>
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
                      {licensingTasks.map(task => (
                        <TableRow key={task.task} className="border-border">
                            <TableCell>{task.team}</TableCell>
                            <TableCell>
                               <Link href="#" className="text-primary hover:underline font-semibold">{task.assignedTo}</Link>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Badge className={`${task.badgeColor} text-white`}>{task.badge}</Badge>
                                    <span>{task.task}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="text-blue-500">{task.state}</div>
                            </TableCell>
                            <TableCell>{task.documents}</TableCell>
                            <TableCell className="text-red-500">{task.dueDate}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Button className="bg-green-600 hover:bg-green-700 text-white text-xs h-auto py-1 px-4">COMPLETE</Button>
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

       <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Deal Verification</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                  <span>3/4 Tasks Complete</span>
                  <ChevronUp className="h-4 w-4"/>
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
                      {dealVerificationTasks.map(task => (
                        <TableRow key={task.task} className="border-border">
                            <TableCell>{task.team}</TableCell>
                            <TableCell>
                                {task.assignedTo === 'ASSIGN ADVISOR' ? (
                                    <Link href="#" className="text-primary hover:underline font-semibold">{task.assignedTo}</Link>
                                ) : (
                                    task.assignedTo
                                )}
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Badge className={`${task.badgeColor} text-white`}>{task.badge}</Badge>
                                    <span>{task.task}</span>
                                </div>
                            </TableCell>
                             <TableCell>
                                {task.state === 'Incomplete' ? (
                                    <div className="text-blue-500">{task.state}</div>
                                ) : (
                                    <div className="text-green-500">{task.state}</div>
                                )}
                                {task.stateDate && <div className="text-muted-foreground text-xs">{task.stateDate}</div>}
                            </TableCell>
                            <TableCell>{task.documents}</TableCell>
                            <TableCell className={task.state === 'Incomplete' ? 'text-red-500' : ''}>
                                {task.dueDate ? task.dueDate : <Link href="#" className="text-primary hover:underline">Add due date</Link>}
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                     {task.state === 'Incomplete' ? (
                                        <Button className="bg-green-600 hover:bg-green-700 text-white text-xs h-auto py-1 px-4">COMPLETE</Button>
                                    ) : <div className="w-[84px]"></div>}
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

       <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Production</h2>
              <div className="flex items-center gap-2 text-sm text-green-500 font-semibold">
                  <CheckCircle2 className="h-4 w-4"/>
                  <span>1/1 Tasks Complete</span>
                  <ChevronUp className="h-4 w-4 text-muted-foreground"/>
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
                      {productionTasks.map(task => (
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
                            <TableCell>{task.documents}</TableCell>
                            <TableCell>
                                <Link href="#" className="text-primary hover:underline">Add due date</Link>
                            </TableCell>
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

       <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Crosslisted Vehicle Transport</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                  <span>0/1 Tasks Complete</span>
                  <ChevronUp className="h-4 w-4"/>
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
                      {crosslistedVehicleTransportTasks.map(task => (
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
                                <div className="text-blue-500">{task.state}</div>
                            </TableCell>
                            <TableCell>{task.documents}</TableCell>
                            <TableCell className="text-red-500">{task.dueDate}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Button className="bg-green-600 hover:bg-green-700 text-white text-xs h-auto py-1 px-4">COMPLETE</Button>
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

       <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Delivery</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                  <span>0 tasks</span>
                  <ChevronDown className="h-4 w-4"/>
              </div>
          </div>
      </div>

       <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Return</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                  <span>0 tasks</span>
                  <ChevronDown className="h-4 w-4"/>
              </div>
          </div>
      </div>

      <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Exchange</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                  <span>0 tasks</span>
                  <ChevronDown className="h-4 w-4"/>
              </div>
          </div>
      </div>

       <div className="rounded-lg bg-card border border-border">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
              <h2 className="font-semibold text-white">Other</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                  <span>0 tasks</span>
                  <ChevronDown className="h-4 w-4"/>
              </div>
          </div>
      </div>

    </div>
  );
}



'use client';

import * as React from 'react';
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
  ZoomIn,
  ZoomOut,
  X,
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
import { notFound } from 'next/navigation';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const doc1 = PlaceHolderImages.find((img) => img.id === 'document-1')?.imageUrl || '';
const doc2 = PlaceHolderImages.find((img) => img.id === 'document-2')?.imageUrl || '';
const doc3 = PlaceHolderImages.find((img) => img.id === 'document-3')?.imageUrl || '';
const doc4 = PlaceHolderImages.find((img) => img.id === 'document-4')?.imageUrl || '';
const doc5 = PlaceHolderImages.find((img) => img.id === 'document-5')?.imageUrl || '';
const doc6 = PlaceHolderImages.find((img) => img.id === 'document-6')?.imageUrl || '';
const doc7 = PlaceHolderImages.find((img) => img.id === 'document-7')?.imageUrl || '';
const doc8 = PlaceHolderImages.find((img) => img.id === 'document-8')?.imageUrl || '';


const orderData: { [key: string]: any } = {
    'C-KKZ9X4MH': {
        customerName: 'Grant Michael',
        stock: '72737',
        status: 'BOS Sent',
        statusColor: 'bg-blue-500 text-white',
        stats: {
            completed: '12/17',
            deliveryDays: '-8 days',
            pendingDays: '12 days',
            lastActivity: '8 days',
        },
        sections: [
            {
                title: 'Identity',
                completed: '2/2',
                status: 'Complete',
                statusColor: 'text-green-500',
                tasks: [
                    { team: "In-sale", assignedTo: "Christian Volfson", task: "Post-deposit customer call", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "October 22, 2025 8:09 PM", documents: "-", dueDate: "-", },
                    { team: "In-sale", assignedTo: "Christian Volfson", task: "Driver license", badge: "EXT", badgeColor: "bg-blue-500", state: "Complete", stateDate: "October 22, 2025 8:25 PM", documents: "1/1 file(s)", dueDate: "-", documentUrl: doc1 }
                ]
            },
            {
                title: 'Trade-in',
                completed: '3/3',
                status: 'Complete',
                statusColor: 'text-green-500',
                tasks: [
                    { team: "In-sale", assignedTo: "Christian Volfson", task: "Trade-in lien check", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "October 24, 2025 6:46 PM", documents: "1/1 file(s)", dueDate: "-", documentUrl: doc2 },
                    { team: "Market supply", assignedTo: "Christian Volfson", task: "Trade-in ownership", badge: "EXT", badgeColor: "bg-blue-500", state: "Complete", stateDate: "October 22, 2025 9:02 PM", documents: "1/1 file(s)", dueDate: "-", documentUrl: doc3 },
                    { team: "Customer", assignedTo: "ASSIGN ADVISOR", task: "Trade-in appraisal", badge: "EXT", badgeColor: "bg-blue-500", state: "Complete", stateDate: "October 22, 2025 8:25 PM", documents: "-", dueDate: "-", }
                ]
            },
            {
                title: 'Financing',
                completed: '5/5',
                status: 'Complete',
                statusColor: 'text-green-500',
                tasks: [
                    { team: "Underwriting", assignedTo: "Christian Volfson", task: "Submit to lender", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "October 22, 2025 9:02 PM", documents: "-", dueDate: "-", hasWarning: false, },
                    { team: "Underwriting", assignedTo: "ASSIGN ADVISOR", task: "Finance application", badge: "EXT", badgeColor: "bg-blue-500", state: "Complete", stateDate: "October 22, 2025 7:02 AM", documents: "-", dueDate: "-", hasWarning: false, },
                    { team: "Underwriting", assignedTo: "Abhi Shetty", task: "Finance stipulation verification", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "October 24, 2025 6:48 PM", documents: "1/1 file(s)", dueDate: "-", hasWarning: true, documentUrl: doc4 },
                    { team: "In-sale", assignedTo: "Christian Volfson", task: "Communicate decision to customer", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "October 24, 2025 6:48 PM", documents: "-", dueDate: "-", hasWarning: false, },
                    { team: "Underwriting", assignedTo: "Christian Volfson", task: "Verify financing complete", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "October 24, 2025 6:48 PM", documents: "-", dueDate: "-", hasWarning: false, }
                ]
            },
            {
                title: 'Contract Signing',
                completed: '4/5',
                status: 'Incomplete',
                statusColor: 'text-blue-500',
                tasks: [
                    { team: "Deal fund", assignedTo: "Piranave Chandraphalan", task: "Verify and send BOS", badge: "INT", badgeColor: "bg-red-500", state: "Needs Review", stateDate: "", documents: "1/1 file(s)", dueDate: "October 25, 2025 9:09 AM", actions: "REVIEW", documentUrl: doc5 },
                    { team: "Underwriting", assignedTo: "Jan Elijah Pilares", task: "Finance contract generation", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "October 24, 2025 8:42 PM", documents: "1/1 file(s)", dueDate: "-", documentUrl: doc6 },
                    { team: "Underwriting", assignedTo: "ASSIGN ADVISOR", task: "Bill of Sale generation", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "October 24, 2025 8:42 PM", documents: "-", dueDate: "-", },
                    { team: "Underwriting", assignedTo: "ASSIGN ADVISOR", task: "Upload unsigned contract", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "October 25, 2025 4:33 AM", documents: "-", dueDate: "-", },
                    { team: "Customer", assignedTo: "ASSIGN ADVISOR", task: "Contract signing", badge: "EXT", badgeColor: "bg-blue-500", state: "Complete", stateDate: "October 25, 2025 5:09 AM", documents: "-", dueDate: "-", },
                ]
            },
            {
                title: 'Payment',
                completed: '1/1',
                status: 'Complete',
                statusColor: 'text-green-500',
                tasks: [
                    { team: "In-sale", assignedTo: "Christian Volfson", task: "Void Cheque or Direct Deposit Form", badge: "EXT", badgeColor: "bg-blue-500", state: "Complete", stateDate: "October 22, 2025 9:02 PM", documents: "1/1 file(s)", dueDate: "-", documentUrl: doc7 }
                ]
            },
            {
                title: 'Ancillary Products',
                completed: '0',
                status: 'No tasks',
                tasks: []
            },
            {
                title: 'Proof of Insurance',
                completed: '1/1',
                status: 'Complete',
                statusColor: 'text-green-500',
                tasks: [
                    { team: "In-sale", assignedTo: "Christian Volfson", task: "Proof of insurance", badge: "EXT", badgeColor: "bg-blue-500", state: "Complete", stateDate: "October 24, 2025 6:49 PM", documents: "1/1 file(s)", dueDate: "-", documentUrl: doc8 }
                ]
            },
             {
                title: 'Licensing',
                completed: '0/1',
                status: 'Incomplete',
                tasks: [
                    { team: "Licensing", assignedTo: "ASSIGN ADVISOR", task: "Registration", badge: "INT", badgeColor: "bg-red-500", state: "Incomplete", stateDate: "", documents: "-", dueDate: "October 25, 2025 1:30 AM", actions: 'COMPLETE', }
                ]
            },
            {
                title: 'Deal Verification',
                completed: '3/4',
                status: 'Incomplete',
                tasks: [
                     { team: "In-sale", assignedTo: "ASSIGN ADVISOR", task: "Verify underwriting complete", badge: "INT", badgeColor: "bg-red-500", state: "Incomplete", stateDate: "", documents: "-", dueDate: "October 25, 2025 5:09 AM", actions: 'COMPLETE' },
                    { team: "Deal fund", assignedTo: "Jan Elijah Pilares", task: "Deal audit", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "October 25, 2025 4:35 AM", documents: "-", dueDate: "", },
                    { team: "In-sale", assignedTo: "Christian Volfson", task: "Ready for Deal Ops", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "October 22, 2025 9:20 PM", documents: "-", dueDate: "", },
                    { team: "Deal fund", assignedTo: "Piranave Chandraphalan", task: "BOS and financing complete audit", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "October 25, 2025 4:33 AM", documents: "-", dueDate: "", },
                ]
            },
            {
                title: 'Production',
                completed: '1/1',
                status: 'Complete',
                statusColor: 'text-green-500',
                tasks: [
                    { team: "In-sale", assignedTo: "Christian Volfson", task: "Good to produce", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "October 22, 2025 9:20 PM", documents: "-", dueDate: "", }
                ]
            },
            {
                title: 'Crosslisted Vehicle Transport',
                completed: '0/1',
                status: 'Incomplete',
                tasks: [
                     { team: "In-sale", assignedTo: "Christian Volfson", task: "Transport vehicle", badge: "INT", badgeColor: "bg-red-500", state: "Incomplete", stateDate: "", documents: "-", dueDate: "October 25, 2025 6:48 PM", actions: 'COMPLETE' }
                ]
            },
            { title: 'Delivery', completed: '0', status: 'No tasks', tasks: [] },
            { title: 'Return', completed: '0', status: 'No tasks', tasks: [] },
            { title: 'Exchange', completed: '0', status: 'No tasks', tasks: [] },
            { title: 'Other', completed: '0', status: 'No tasks', tasks: [] },
        ]
    },
    'C-YRSRVHD6': {
        customerName: 'Alison Mullen',
        stock: '72590',
        status: 'BOS Sent',
        statusColor: 'bg-blue-500 text-white',
        stats: {
            completed: '19/23',
            deliveryDays: '-18 days',
            pendingDays: '21 days',
            lastActivity: '3 days',
        },
        sections: [
             {
                title: 'Identity',
                completed: '2/2',
                status: 'Complete',
                statusColor: 'text-green-500',
                tasks: [
                    { team: "Acquisition", assignedTo: "Shyda Gonzales", task: "Drivers License Verification", badge: "EXT", badgeColor: "bg-blue-500", state: "Complete", stateDate: "", documents: "1/1 file(s)", dueDate: "-", documentUrl: "/alison1.png" },
                    { team: "Acquisition", assignedTo: "Khushi Patel", task: "Drivers License Verification (second approval)", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "", documents: "-", dueDate: "-", }
                ]
            },
            {
                title: 'Contract Signing',
                completed: '4/4',
                status: 'Complete',
                statusColor: 'text-green-500',
                tasks: [
                    { team: "Acquisition", assignedTo: "Stephen Zhang", task: "APV9T Signed Form", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "", documents: "1/1 file(s)", dueDate: "-", documentUrl: "/alison2.png"},
                    { team: "Accounting", assignedTo: "Khushi Patel", task: "Upload Signed Bill of Sale (second approval)", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "", documents: "-", dueDate: "-", hasWarning: true},
                    { team: "Acquisition", assignedTo: "ASSIGN ADVISOR", task: "Bill of Sale Generation", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "", documents: "-", dueDate: "-"},
                    { team: "Acquisition", assignedTo: "ASSIGN ADVISOR", task: "Upload Signed Bill of Sale", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "", documents: "1/1 file(s)", dueDate: "-", documentUrl: "/alison3.png"},
                ]
            },
            {
                title: 'Payment',
                completed: '4/4',
                status: 'Complete',
                statusColor: 'text-green-500',
                tasks: [
                    { team: "Acquisition", assignedTo: "Shyda Gonzales", task: "Void Cheque or Direct Deposit Form", badge: "EXT", badgeColor: "bg-blue-500", state: "Complete", stateDate: "", documents: "1/1 file(s)", dueDate: "-", documentUrl: "/alison4.png" },
                    { team: "Acquisition", assignedTo: "Khushi Patel", task: "Void Cheque or Direct Deposit Form (second approval)", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "", documents: "-", dueDate: "-", },
                    { team: "Accounting", assignedTo: "Khushi Patel", task: "Prepare Customer Payment", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "", documents: "-", dueDate: "-", },
                    { team: "Accounting", assignedTo: "Dishal Acharya", task: "Approve Customer Payment (second approval)", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "", documents: "-", dueDate: "-", },
                ]
            },
            {
                title: 'Ancillary Products',
                completed: '0/1',
                status: 'Incomplete',
                statusColor: 'text-blue-500',
                tasks: [
                    { team: "Customer", assignedTo: "ASSIGN ADVISOR", task: "Supporting Document", badge: "EXT", badgeColor: "bg-blue-500", state: "Incomplete", stateDate: "", documents: "0/1 file(s)", dueDate: "October 21, 2025 7:30 AM", documentUrl: "/alison5.png" }
                ]
            },
            {
                title: 'Deal Verification',
                completed: '1/1',
                status: 'Complete',
                statusColor: 'text-green-500',
                tasks: [
                    { team: "Market supply", assignedTo: "ASSIGN ADVISOR", task: "Verify Carfax", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "", documents: "-", dueDate: "-", hasNote: true },
                ]
            },
            {
                title: 'Vehicle Documents',
                completed: '4/4',
                status: 'Complete',
                statusColor: 'text-green-500',
                tasks: [
                    { team: "Acquisition", assignedTo: "Shyda Gonzales", task: "Proof of Ownership", badge: "EXT", badgeColor: "bg-blue-500", state: "Complete", stateDate: "", documents: "1/1 file(s)", dueDate: "-", hasNote: true, hasWarning: true, documentUrl: "/alison8.png" },
                    { team: "Acquisition", assignedTo: "Shyda Gonzales", task: "Lien Check", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "", documents: "1/1 file(s)", dueDate: "-", hasNote: true, documentUrl: "/alison7.png" },
                    { team: "Acquisition", assignedTo: "Khushi Patel", task: "Lien Check (second approval)", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "", documents: "-", dueDate: "-", hasNote: true },
                    { team: "Acquisition", assignedTo: "Khushi Patel", task: "Proof of Ownership (second approval)", badge: "INT", badgeColor: "bg-red-500", state: "Complete", stateDate: "", documents: "-", dueDate: "-", hasNote: true },
                ]
            },
             {
                title: 'Corporate Information',
                completed: '2/2',
                status: 'Complete',
                statusColor: 'text-green-500',
                tasks: [
                    { team: "Acquisition", assignedTo: "Shyda Gonzales", task: "Articles of Incorporation", badge: "EXT", badgeColor: "bg-blue-500", state: "Complete", stateDate: "", documents: "1/1 file(s)", dueDate: "-", hasNote: true, documentUrl: "/alison8.png" },
                    { team: "Acquisition", assignedTo: "Junaid Khan", task: "HST Government Document", badge: "EXT", badgeColor: "bg-blue-500", state: "Complete", stateDate: "", documents: "1/1 file(s)", dueDate: "-", hasNote: true, hasWarning: true, documentUrl: "/alison9.png" },
                ],
                footerLink: "VIEW DELETED TASKS"
            },
        ]
    }
};

function DocumentViewer({
  imageUrl,
  isOpen,
  onClose,
}: {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [scale, setScale] = React.useState(1);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const imgRef = React.useRef<HTMLImageElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      setScale((s) => Math.min(s + 0.1, 3));
    } else {
      setScale((s) => Math.max(s - 0.1, 0.5));
    }
  };

  React.useEffect(() => {
    // Reset on open
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] bg-card/80 backdrop-blur-sm p-0 flex flex-col">
        <div className="flex-shrink-0 flex items-center justify-end p-2 space-x-2 bg-card/50">
           <Button variant="ghost" size="icon" onClick={() => setScale(s => Math.max(s - 0.2, 0.5))}>
             <ZoomOut className="h-5 w-5" />
           </Button>
           <Button variant="ghost" size="icon" onClick={() => setScale(s => Math.min(s + 0.2, 3))}>
             <ZoomIn className="h-5 w-5" />
           </Button>
           <Button variant="ghost" size="icon" onClick={onClose}>
             <X className="h-5 w-5" />
           </Button>
        </div>
        <div className="flex-grow overflow-auto" onWheel={handleWheel}>
          <div
            className="flex items-center justify-center w-full h-full p-4"
          >
            <Image
              ref={imgRef}
              src={imageUrl}
              alt="Document"
              width={800}
              height={1100}
              className="object-contain transition-transform duration-200"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


export default function OrderDetailsPage({
  params,
}: {
  params: { orderId: string };
}) {
  const [viewingImage, setViewingImage] = React.useState<string | null>(null);
  const data = orderData[params.orderId];

  if (!data) {
    notFound();
  }

  return (
    <div className="text-white space-y-6">
      <DocumentViewer 
        isOpen={!!viewingImage}
        onClose={() => setViewingImage(null)}
        imageUrl={viewingImage || ''}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/dashboard" className="text-primary hover:underline">
            Orders
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold text-primary">{data.customerName} (#{data.stock})</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold text-white">{params.orderId}</span>
          <Badge className={data.statusColor}>{data.status}</Badge>
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
                <p className="text-2xl font-bold">{data.stats.completed}</p>
            </CardContent>
        </Card>
        <Card className="bg-card">
            <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">Days until delivery</p>
                <p className="text-2xl font-bold">{data.stats.deliveryDays}</p>
            </CardContent>
        </Card>
        <Card className="bg-card">
            <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">Days sale pending</p>
                <p className="text-2xl font-bold">{data.stats.pendingDays}</p>
            </CardContent>
        </Card>
        <Card className="bg-card">
            <CardContent className="p-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <p>Time since last activity</p>
                    <Clock className="h-4 w-4" />
                </div>
                <p className="text-2xl font-bold">{data.stats.lastActivity}</p>
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
      
      {data.sections.map((section: any, index: number) => (
        <div key={index} className="rounded-lg bg-card border border-border">
            <div className="flex items-center justify-between p-4 bg-muted/20 rounded-t-lg">
                <h2 className="font-semibold text-white">{section.title}</h2>
                 <div className={`flex items-center gap-2 text-sm font-semibold ${section.statusColor || 'text-muted-foreground'}`}>
                    {section.status === 'Complete' && <CheckCircle2 className="h-4 w-4"/>}
                    <span>
                        {section.completed === '0' ? `${section.completed} tasks` : `${section.completed} Tasks Complete`}
                    </span>
                    {section.tasks.length > 0 && <ChevronUp className="h-4 w-4"/>}
                    {section.tasks.length === 0 && <ChevronDown className="h-4 w-4"/>}
                </div>
            </div>
            {section.tasks.length > 0 ? (
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
                            {section.tasks.map((task: any, taskIndex: number) => (
                                <TableRow key={taskIndex} className="border-border">
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
                                        <div className={
                                            task.state === 'Complete' ? 'text-green-500' :
                                            task.state === 'Needs Review' ? 'text-blue-500' :
                                            'text-blue-500'
                                        }>{task.state}</div>
                                        {task.stateDate && <div className="text-muted-foreground text-xs">{task.stateDate}</div>}
                                    </TableCell>
                                    <TableCell>
                                        {task.documentUrl ? 
                                        <button onClick={() => setViewingImage(task.documentUrl)} className="text-primary hover:underline">{task.documents}</button> 
                                        : task.documents}
                                    </TableCell>
                                    <TableCell className={
                                        task.state === 'Needs Review' || (task.state === 'Incomplete' && task.dueDate) ? 'text-red-500' : ''
                                    }>
                                        {task.dueDate ? task.dueDate : <Link href="#" className="text-primary hover:underline">Add due date</Link>}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            {task.actions === 'REVIEW' && <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs h-auto py-1 px-4">REVIEW</Button>}
                                            {task.actions === 'COMPLETE' && <Button className="bg-green-600 hover:bg-green-700 text-white text-xs h-auto py-1 px-4">COMPLETE</Button>}
                                            {!task.actions && <div className="w-[84px] invisible"></div>}
                                            <div className="relative">
                                                <MessageSquare className="h-5 w-5" />
                                                {(task.hasWarning || task.hasNote) && <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>}
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
            ) : (
                <div className="p-4 text-center text-muted-foreground">
                    No tasks have been created for this category
                </div>
            )}
            {section.footerLink && (
              <div className="p-4 text-center border-t border-border">
                <Link href="#" className="text-sm text-primary font-semibold hover:underline">
                    {section.footerLink}
                </Link>
              </div>
            )}
        </div>
      ))}
    </div>
  );
}

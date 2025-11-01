import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ClutchLogo } from '@/components/icons/clutch-logo';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Plus, Settings } from 'lucide-react';

const navItems = [
  { href: '#', label: 'Vehicles' },
  { href: '#', label: 'Orders' },
  { href: '#', label: 'STC' },
  { href: '/dashboard', label: 'Tasks' },
  { href: '#', label: 'Financing' },
  { href: '#', label: 'Users' },
  { href: '#', label: 'Companies' },
  { href: '#', label: 'Locations' },
  { href: '#', label: 'Helpers' },
  { href: '#', label: 'Lookups' },
  { href: '#', label: 'Scheduling' },
  { href: '#', label: 'Lifecycle' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userAvatar = PlaceHolderImages.find((img) => img.id === 'user-benjamin');

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-secondary px-4 md:px-6 z-10">
        <div className="flex items-center gap-6">
           <Link href="/dashboard" className="text-secondary-foreground">
              <ClutchLogo className="h-8 w-auto" />
           </Link>
        </div>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
           {navItems.map((item) => (
             <Link
              key={item.label}
              href={item.href}
              className={`relative py-5 text-sm font-medium transition-colors hover:text-primary ${
                item.label === 'Tasks' ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white">
              <Plus className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <Settings className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                     {userAvatar && <AvatarImage src={userAvatar.imageUrl} alt="User Avatar" />}
                    <AvatarFallback>B</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/login">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  );
}

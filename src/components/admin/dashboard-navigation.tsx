"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import {
  BookTextIcon,
  LineChartIcon,
  LogOutIcon,
  MenuIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const DashboardNavigation: React.FC = () => {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <>
      <aside className="hidden min-h-screen w-64 flex-col border-r bg-background p-4 md:flex">
        <Image
          src={"/logo.svg"}
          alt="PaMaMe Logo"
          width={500}
          height={500}
          className="h-auto w-full"
          priority
        />
        <nav className="mt-8 space-y-1">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <BookTextIcon className="h-5 w-5" />
            Registrations
          </Link>
        </nav>
        <div className="mt-auto flex flex-col gap-y-4">
          <div className="flex select-none items-center gap-2">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src="/logo.svg" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5">
              <span className="text-sm font-medium">Pamame</span>
              <span className="text-xs text-muted-foreground">Admin</span>
            </div>
          </div>
          <Button
            variant={"outline"}
            onClick={logout}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <LogOutIcon className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>
      <div className="flex w-full border-b md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"}>
              <MenuIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="m-2 w-56 md:hidden">
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push("/admin/dashboard")}>
                <LineChartIcon className="mr-2 h-4 w-4" />
                <span>Analytics</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push("/admin/dashboard/registration")}
              >
                <BookTextIcon className="mr-2 h-4 w-4" />
                <span>Registrations</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="flex justify-between p-2">
              <div className="flex select-none items-center gap-2">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src="/logo.svg" alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5">
                  <span className="text-sm font-medium">Pamame</span>
                  <span className="text-xs text-muted-foreground">Admin</span>
                </div>
              </div>
              <Button variant={"ghost"} onClick={logout}>
                <LogOutIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default DashboardNavigation;

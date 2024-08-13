"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/auth-context";
import { LogIn } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminLogin: React.FC = () => {
  const { isAuthenticated, login, loading } = useAuth();
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.push("/admin/dashboard");
    }
  }, [isAuthenticated, loading, router]);

  const handleLogin = async () => {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      login(); // This sets isAuthenticated to true
      setTimeout(() => {
        router.push("/admin/dashboard");
      }, 100);
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Invalid credentials!",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex h-dvh w-full flex-col items-center justify-center p-8">
        <Card className="flex w-full min-w-[250px] max-w-[350px] flex-col items-center drop-shadow">
          <CardHeader className="flex w-full flex-col items-center">
            <Skeleton className="h-[100px] w-[80%]" />
          </CardHeader>
          <CardContent className="flex w-full flex-col gap-y-2">
            <Skeleton className="h-[30px] w-full" />
            <Skeleton className="h-[30px] w-full" />
          </CardContent>
          <CardFooter className="mt-4 flex w-full justify-center">
            <Skeleton className="h-[50px] w-[50%]" />
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center p-8">
      <Card className="flex w-full min-w-[250px] max-w-[350px] flex-col items-center drop-shadow">
        <CardHeader className="flex flex-col items-center">
          <Image
            src={"/logo.svg"}
            alt="PaMaMe Logo"
            width={500}
            height={500}
            className="h-auto w-auto"
            priority
          />
        </CardHeader>
        <CardContent className="flex w-full flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter username here"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="**************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="mt-4">
          <Button onClick={handleLogin}>
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminLogin;

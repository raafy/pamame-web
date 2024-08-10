"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import { LogIn } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

const LoginCard: React.FC = () => {
  const { login } = useAuth();
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      login();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Invalid credentials!",
      });
    }
  };

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center p-8">
      <Card className="flex w-full min-w-[250px] max-w-[350px] flex-col items-center drop-shadow">
        <CardHeader className="flex flex-col items-center">
          <Image src={Logo} alt="PaMaMe Logo" />
        </CardHeader>
        <CardContent className="flex w-full flex-col gap-y-2">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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

export default LoginCard;

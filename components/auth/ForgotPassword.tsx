"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";
import { validateEmail } from "@/lib/regex";
import { useRouter } from "next/navigation";
import * as React from "react";

const ForgotPassword = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  function onSubmit() {
    if (!validateEmail(email) && !name) {
      toast({
        variant: "destructive",
        title: "Invalid credentials.",
        description: "Make sure to enter correct email and user's name.",
      });
      return;
    }

    console.log(email, name);
    // router.push("/auth/reset-password");
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="link"
          className="ml-auto underline text-sm font-normal p-0"
        >
          Forgot your password?
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Refresh password</SheetTitle>
          <SheetDescription>
            Enter your name and email below to reset your password. Make sure to
            check your spam folder if you don&apos;t see the email.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Pedro Duarte"
              className="col-span-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              minLength={8}
              maxLength={50}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="col-span-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={50}
            />
          </div>
        </div>

        <SheetFooter>
          <Button type="button" onClick={onSubmit}>
            Submit
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ForgotPassword;

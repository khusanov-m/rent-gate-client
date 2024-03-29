"use client";

import { LoginAction } from "@/queries/auth/login";
import { loginSchema, loginSchemaType } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { PasswordInput } from "../ui/password-input";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { useToast } from "../ui/use-toast";
import ForgotPasswordForm from "./forgot-password-form";

export const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleLogin, isPending, data } = LoginAction();
  function onSubmit(values: loginSchemaType) {
    console.log("Login form submitted");

    handleLogin(values, {
      onSuccess() {
        router.push("/");
      },
      onError(error) {
        toast({
          variant: "destructive",
          title: "Invalid credentials.",
          description:
            error.message || "Make sure to enter correct email and password.",
        });
      },
    });
  }

  return (
    <Sheet>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="m@example.com"
                      required
                      type="email"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="password"
                    className="flex items-center justify-between"
                  >
                    Password
                    <SheetTrigger asChild>
                      <Button
                        variant="link"
                        className="ml-auto underline text-sm font-normal p-0"
                      >
                        Forgot your password?
                      </Button>
                    </SheetTrigger>
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      required
                      id="password"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </>
            ) : (
              "Login"
            )}
          </Button>
          <div className="relative">
            <Button
              className="w-full"
              variant="outline"
              disabled={isPending || true}
            >
              Login with Google
            </Button>
            <Badge className="absolute -translate-y-1/2 right-2 top-1/2 text-center pointer-events-none">
              Soon
            </Badge>
          </div>
        </form>
      </Form>

      <ForgotPasswordForm />
    </Sheet>
  );
};

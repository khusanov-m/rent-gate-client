"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";
import { ForgotPasswordAction } from "@/queries/auth/forgot-password";
import { forgotPasswordSchema, forgotPasswordSchemaType } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const ForgotPasswordForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<forgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const { handleForgotPassword, isPending, data, error } =
    ForgotPasswordAction();
  function onSubmit(values: forgotPasswordSchemaType) {
    handleForgotPassword(values, {
      onSuccess: (data) => {
        toast({
          title: "Success",
          description:
            data || "Password reset code has been sent to your email.",
        });
        router.push("/auth/reset-password");
      },
    });
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Refresh password</SheetTitle>
        <SheetDescription>
          Enter your name and email below to reset your password. Make sure to
          check your spam folder if you don&apos;t see the email.
        </SheetDescription>
      </SheetHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="m@example.com"
                      required
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Your first and lastname indicated during registration
                    separated by a space.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
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

          <SheetFooter>
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </SheetFooter>
        </form>
      </Form>
    </SheetContent>
  );
};

export default ForgotPasswordForm;

"use client";

import { VerifyEmailAction } from "@/queries/auth/verify-email";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast as sooner } from "sonner";
import { z } from "zod";
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
import { useToast } from "../ui/use-toast";

const codeSchema = z.object({
  code: z.string(),
});
type codeSchemaType = z.infer<typeof codeSchema>;

export const VerifyForm = () => {
  const rotuer = useRouter();
  const { toast } = useToast();

  const form = useForm<codeSchemaType>({
    resolver: zodResolver(codeSchema),
    defaultValues: {
      code: "",
    },
  });

  const { handleVerify, data, isPending, error } = VerifyEmailAction();
  function onSubmit(value: codeSchemaType) {
    sooner("Verification on progress", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "OK",
        onClick: () => console.log("OK"),
      },
      position: "top-right",
    });

    handleVerify(value.code, {
      onSuccess() {
        toast({
          title: "Email Verified",
          description: "Your email has been verified successfully!",
        });
        rotuer.push("/auth/login");
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="rounded-md shadow-sm -space-y-px">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Verification code</FormLabel>
                <FormControl>
                  <Input
                    placeholder="6u37zEw2QOR181Ntf..."
                    required
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link
              className="font-medium text-amber-600 hover:text-amber-500"
              href="#"
            >
              Resend Code
            </Link>
          </div>
          <div className="text-sm">
            <Link
              className="font-medium text-amber-600 hover:text-amber-500"
              href="login"
            >
              Back to Login
            </Link>
          </div>
        </div>
        <div>
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </>
            ) : (
              "Verify"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

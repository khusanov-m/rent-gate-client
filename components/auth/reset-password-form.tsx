import { ResetPasswordAction } from "@/queries/auth/reset-password";
import { resetPasswordSchema, resetPasswordSchemaType } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

export const ResetPasswordForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email");
  const token = params.get("rstToken");

  const form = useForm<resetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  const { handleResetPassword, data, error, isPending } = ResetPasswordAction();

  function onSubmit(values: resetPasswordSchemaType) {
    console.log("Reset password form submitted");
    handleResetPassword(
      { id: token ?? "", data: values },
      {
        onSuccess(data, variables, context) {
          toast({
            title: "Success",
            description: data || "Password reset successful.",
          });
          navigateToLogin();
        },
      }
    );
  }

  function navigateToLogin() {
    router.push("/auth/login");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            name=""
            render={() => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="m@example.com"
                    autoComplete="email"
                    value={
                      email ??
                      "Email is not provided. Please go back and try again."
                    }
                    type="email"
                    disabled
                  />
                </FormControl>
                <FormDescription className="ml-auto w-fit">
                  <Button
                    onClick={navigateToLogin}
                    variant={"ghost"}
                    size={"sm"}
                    type="button"
                  >
                    Incorrect email?
                  </Button>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    required
                    type="password"
                    autoComplete="new-password"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input
                    required
                    type="password"
                    autoComplete="new-password"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

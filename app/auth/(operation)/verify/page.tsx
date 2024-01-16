"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import * as React from "react";
import { toast } from "sonner";

export default function Verify() {
  const [code, setCode] = React.useState<string>("");

  const onToast = () => {
    console.log("code", code);

    toast("Verification on progress", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "OK",
        onClick: () => console.log("OK"),
      },
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-12 bg-gray-50 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
              Verify Your Email
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Please enter the verification code we sent to your email address.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <Label htmlFor="verification-code">Verification Code</Label>
                <Input
                  id="verification-code"
                  name="verification-code"
                  placeholder="Verification code"
                  required
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
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
              <Button className="w-full" onClick={onToast}>
                Verify
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

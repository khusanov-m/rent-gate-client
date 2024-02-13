import { VerifyForm } from "@/components/auth/verify-form";

export default function VerifyPage() {
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
          <div className="mt-8">
            <VerifyForm />
          </div>
        </div>
      </div>
    </>
  );
}

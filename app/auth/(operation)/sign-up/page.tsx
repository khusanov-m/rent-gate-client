import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Let&apos;s get you all set up so you can enjoy the benefits of
              being a member.
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </>
  );
}

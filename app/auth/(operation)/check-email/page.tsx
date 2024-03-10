export default function CheckEmailPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-12 bg-gray-50 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="max-w-md w-full space-y-8">
          <div className="space-y-3">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
              Check Your Email
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              We&apos;ve sent you a link to reset your password.
            </p>
            <ul className="list-disc">
              <li>Click the link in the email we sent you.</li>
              <li>
                Check your spam folder if you don&apos;t see the email in your
                inbox.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

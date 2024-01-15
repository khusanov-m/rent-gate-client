import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[calc(100svh-56px)]">
        <div className="hidden bg-gray-100 lg:block dark:bg-gray-800">
          <Image
            alt="Image"
            className="h-full w-full object-cover"
            height="1080"
            src="/placeholder.svg"
            style={{
              aspectRatio: "1920/1080",
              objectFit: "cover",
            }}
            width="1920"
          />
        </div>

        {children}
      </div>
    </>
  );
}

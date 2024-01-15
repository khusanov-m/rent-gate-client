import Image from "next/image";

export default function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full grid min-h-[calc(100svh-56px)] place-items-center">
        <div className="bg-gray-100 dark:bg-gray-800 inset-0 fixed">
          <Image
            alt="Image"
            className="h-full w-full object-cover"
            height="1080"
            src="/reset.png"
            style={{
              aspectRatio: "1920/1080",
              objectFit: "cover",
            }}
            width="1920"
          />
        </div>

        <div className="relative">{children}</div>
      </div>
    </>
  );
}

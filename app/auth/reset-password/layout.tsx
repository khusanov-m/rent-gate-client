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
            alt="A refined and elegant background image for a high-end vehicle rental platform's. The image convey reliability and premium quality, featuring a sleek, modern design with a luxurious feel. Incorporate muted, sophisticated color tones like deep blues, grays, or black, and subtle, abstract patterns or textures that suggest luxury and professionalism. Elements like silhouettes of premium cars or abstract geometric shapes, and mature aesthetic."
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

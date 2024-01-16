import Image from "next/image";
import { Suspense } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[calc(100svh-56px)]">
        <div className="hidden bg-gray-100 lg:block dark:bg-gray-800">
          <Suspense fallback={<>LOADING</>}>
            <Image
              alt="A scenic view of a car driving on a coastal road. The road is winding, hugging the contours of a sandy beach on one side, with the clear, blue ocean visible on the other. The sky is clear with a few fluffy clouds, and the sun is shining brightly, reflecting off the water. The car is a modern, sleek convertible, in a striking red color, adding a vibrant contrast to the natural blues and greens of the seascape. The scene conveys a sense of leisurely travel and the beauty of a coastal journey."
              className="h-full w-full object-cover"
              src="/login.png"
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              height="1080"
              width="1920"
              priority
            />
          </Suspense>
        </div>

        {children}
      </div>
    </>
  );
}

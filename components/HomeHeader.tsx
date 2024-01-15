import Image from "next/image";
import SearchVehicle from "./vehicle/SearchVehicle";

const HomeHeader = () => {
  return (
    <header className="relative w-full pt-12 md:pt-24 lg:pt-32 border-y">
      <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Ride in style with Vehicle Rental
          </h1>
          <div className="flex flex-col items-start space-y-4">
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We provide a wide range of vehicles for rent. Choose the one that
              suits your needs and enjoy a hassle-free rental experience.
            </p>

            <SearchVehicle />
          </div>
        </div>
        <Image
          alt="A modern and sophisticated vehicle showcase, set on a private, elegantly designed road. The scene is arranged like an exclusive exhibition, with a variety of vehicles lined up in a presentable manner. The lineup includes a sleek motorbike, a stylish car, a robust SUV, a large truck, and a spacious bus, each positioned to highlight its unique features. The road has a luxurious feel, with ambient lighting and a clean, minimalist design, creating an atmosphere of a high-end vehicle showcase rather than a public road. The style is modern, realistic, and refined, emphasizing the exclusivity of the setting."
          className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
          height="300"
          src="/home_main.png"
          width="1270"
        />
      </div>
    </header>
  );
};

export default HomeHeader;

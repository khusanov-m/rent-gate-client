import { Icons } from "../Icons";
import FeaturedVehicle from "./FeaturedVehicle";
import VehicleCategory from "./VehicleCategory";

const FEATURED = [
  {
    name: "Sedan Car",
    description: "Comfortable and fuel-efficient.",
    src: "/sedan.png",
    alt: "A modern, sleek sedan on a simple, plain background, portrayed in an ultra-realistic style. The sedan should display sophistication and comfort, with a focus on its elegant design and luxury features. The image should be dynamic and appealing, with the sedan as the sole focus, suitable for a high-end vehicle rental platform.",
  },
  {
    name: "Clubby Boat",
    description: "Luxurious and spacious.",
    src: "/boat.png",
    alt: "A luxurious boat on a simple, plain background, portrayed in an ultra-realistic style. The boat should be sleek and designed for leisure activities, with a focus on its elegance and comfort. The image should be dynamic and appealing, with the boat as the sole focus, suitable for a high-end vehicle rental platform.",
  },
  {
    name: "Muscle SUV",
    description: "Rugged and spacious.",
    src: "/suv.png",
    alt: "A rugged yet sophisticated SUV on a simple, plain background, portrayed in an ultra-realistic style. The SUV should showcase its off-road capabilities and spacious interior, with a focus on its robust design and luxury features. The image should be dynamic and appealing, with the SUV as the sole focus, suitable for a high-end vehicle rental platform.",
  },
  {
    name: "Sport Motorcycle",
    description: "Fast and thrilling.",
    src: "/bike.png",
    alt: "A stylish motorbike on a simple, plain background, portrayed in an ultra-realistic style. The motorbike should be streamlined for speed and agility, with a focus on its performance and sleek aesthetics. The image should be dynamic and appealing, with the motorbike as the sole focus, suitable for a high-end vehicle rental platform.",
  },
];

const CATEGORIES = [
  {
    path: "vehicles?type=car",
    icon: <Icons.Car className="h-6 w-6" />,
    name: "Cars",
  },
  {
    path: "vehicles?type=motorbike",
    icon: <Icons.Bike className="h-6 w-6" />,
    name: "Motorbikes",
  },
  {
    path: "vehicles?type=truck",
    icon: <Icons.Truck className="h-6 w-6" />,
    name: "Trucks",
  },
  {
    path: "vehicles?type=bus",
    icon: <Icons.Bus className="h-6 w-6" />,
    name: "Buses",
  },
];

const VehicleHomeSuggestions = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div className="flex-1 px-4 py-12 md:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold">Vehicle Categories</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((item) => (
            <VehicleCategory category={item} key={item.name} />
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold">Featured Vehicles</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {FEATURED.map((item) => (
            <FeaturedVehicle vehicle={item} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleHomeSuggestions;

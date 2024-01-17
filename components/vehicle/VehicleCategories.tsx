import { Icons } from "../Icons";
import VehicleCategory from "./VehicleCategory";

const CATEGORIES = [
  {
    path: "vehicles?type=car",
    icon: <Icons.Car className="h-6 w-6" />,
    name: "Cars",
  },
  {
    path: "vehicles?type=bike",
    icon: <Icons.Bike className="h-6 w-6" />,
    name: "Bikes",
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

const VehicleCategories = ({ className }: { className?: string }) => {
  return (
    <section className={className}>
      <div className="flex-1 px-4 py-12 md:px-6 lg:px-8 max-w-screen-xl mx-auto">
        {/* <h2 className="text-2xl font-bold">Vehicle Categories</h2> */}
        {/* sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 */}
        <div className="mt-6 grid gap-6 grid-cols-4 ">
          {CATEGORIES.map((item) => (
            <VehicleCategory category={item} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleCategories;

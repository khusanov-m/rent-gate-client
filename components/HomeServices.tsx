import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const OFFERS = [
  {
    title: "Rent a Car",
    description: "Find the perfect car for your next adventure.",
    src: "/placeholder.svg",
    alt: "Rent a Car",
  },
  {
    title: "Explore Water Fauna",
    description: "Dive into the deep and discover the beauty of marine life.",
    src: "/placeholder.svg",
    alt: "Explore Water Fauna",
  },
  {
    title: "Organize Trips",
    description: "Plan and book your ideal trip without leaving home.",
    src: "/placeholder.svg",
    alt: "Organize Trips",
  },
  {
    title: "Get a Private Driver",
    description: "Enjoy the luxury of a private driver for your travels.",
    src: "/placeholder.svg",
    alt: "Get a Private Driver",
  },
];

const HomeServices = () => {
  return (
    <div className="flex flex-wrap max-w-screen-xl mx-auto justify-between gap-6 px-4 py-6">
      {OFFERS.map((item) => (
        <Card
          key={item.title}
          className="w-full md:w-[calc(25%-1.5rem)] hover:rotate-2 hover:scale-105 transition-transform duration-200"
        >
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              alt={item.alt}
              className="aspect-square object-cover w-full"
              height="200"
              src={item.src}
              width="200"
            />
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HomeServices;

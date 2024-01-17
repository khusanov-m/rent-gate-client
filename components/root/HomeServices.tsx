import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const OFFERS = [
  {
    title: "Rent a Car",
    description: "Find the perfect car for your next adventure.",
    src: "/rent.png",
    alt: "A modern car rental service scene. A customer is standing at a counter where a friendly staff member is handing over car keys. In the background, through a large window, a variety of cars are visible, including sedans and SUVs. The interior is sleek and professional, with promotional posters for car rentals on the walls and a digital display showing car options and prices. The atmosphere is welcoming and efficient.",
  },
  {
    title: "Explore Water Fauna",
    description: "Dive into the deep and discover the beauty of marine life.",
    src: "/water.png",
    alt: "A marine explorer in a diving suit, swimming underwater in a vibrant and colorful coral reef. The scene is bustling with diverse marine life: bright tropical fish, gently swaying sea anemones, and a curious turtle. The water is crystal clear, revealing sun rays filtering through from the surface, creating a mesmerizing play of light. In the background, a majestic whale swims gracefully. The overall atmosphere is serene and full of wonder, showcasing the beauty of the underwater world.",
  },
  {
    title: "Organize Trips",
    description: "Plan and book your ideal trip without leaving home.",
    src: "/trip.png",
    alt: "A large, winding highway traverses through a picturesque countryside, filled with lush greenery and rolling hills under a clear blue sky. On this expansive multi-lane road, a bus and a sedan car are seen traveling side by side. The bus is notably large and adorned with vibrant, colorful designs, while the sedan is sleek, modern, and appears cutting-edge in design. This scenic road beautifully captures the essence of adventure and travel, with high attention to detail in the surrounding landscape and the vehicles.",
  },
  {
    title: "Get a Private Driver",
    description: "Enjoy the luxury of a private driver for your travels.",
    src: "/rent.png",
    alt: "A modern car rental service scene. A customer is standing at a counter where a friendly staff member is handing over car keys. In the background, through a large window, a variety of cars are visible, including sedans and SUVs. The interior is sleek and professional, with promotional posters for car rentals on the walls and a digital display showing car options and prices. The atmosphere is welcoming and efficient.",
  },
];

const HomeServices = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 max-w-screen-xl mx-auto justify-between gap-6 px-4 py-6",
        className
      )}
    >
      {OFFERS.map((item) => (
        <Card
          key={item.title}
          className="w-full lg:hover:rotate-2 lg:hover:scale-105 transition-transform duration-200 group"
        >
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <Image
              alt={item.alt}
              className="aspect-[16/9] object-cover w-full"
              src={item.src}
              height="1080"
              width="1920"
            />
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 px-6">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default HomeServices;

import Link from "next/link";
import { Card, CardContent } from "../ui/card";

const VehicleCategory = ({
  category,
}: {
  category: {
    name: string;
    icon: React.ReactNode;
    path: string;
  };
}) => {
  return (
    <Card className="bg-white transition-colors duration-200 hover:bg-slate-100">
      <Link href={category.path}>
        <CardContent className="flex items-center justify-center md:justify-start gap-4 p-2 md:p-6">
          {category.icon}
          <span className="hidden md:block">{category.name}</span>
        </CardContent>
      </Link>
    </Card>
  );
};
export default VehicleCategory;

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
    <Card>
      <Link href={category.path}>
        <CardContent className="flex items-center gap-4 pt-6">
          {category.icon}
          <span>{category.name}</span>
        </CardContent>
      </Link>
    </Card>
  );
};
export default VehicleCategory;

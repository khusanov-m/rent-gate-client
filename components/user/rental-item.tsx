import { cn, formatPrice } from "@/lib/utils";
import { RentalItem } from "@/types/order.type";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

export default function RentalItem({ item }: { item: RentalItem }) {
  return (
    <div className="p-2 rounded border border-gray-200">
      <p>Duration: {(item.duration / 24).toFixed(0)} Days</p>
      <p>Price: {formatPrice(item.total_amount)}</p>
      <div className="mb-3">
        Status:{" "}
        <Badge
          className={cn(
            item.status === "init" && "bg-yellow-500",
            item.status === "cancelled" && "bg-rose-600",
            item.status === "confirmed" && "bg-green-500"
          )}
        >
          {item.status}
        </Badge>
      </div>
      <Link
        href={`/vehicles/${item.vehicle_id}/invoice/${item.payment_id}`}
        className={buttonVariants({
          className: "flex items-center gap-1 w-full",
        })}
      >
        view
      </Link>
    </div>
  );
}

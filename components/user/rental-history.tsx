"use client";

import useGetRentals from "@/queries/orders/get-orders";
import RentalItem from "./rental-item";

export default function RentalHistory() {
  const { data, isLoading } = useGetRentals();

  console.log(data);

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <section className="space-y-4 py-10 px-2">
      <h2 className="text-lg font-semibold">Orders history</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 items-stretch gap-2">
        {data?.rental_history.map((rental) => (
          <RentalItem item={rental} key={rental.id} />
        ))}
      </div>
    </section>
  );
}

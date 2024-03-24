"use client";

import RentalItem from "@/components/user/rental-item";
import { getSearchParams } from "@/lib/utils";
import useGetRentals from "@/queries/orders/get-orders";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

export default function UserOrders() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  React.useEffect(() => {
    if (!page || !limit) {
      const params = getSearchParams(searchParams);
      if (!page) params.set("page", "1");
      if (!limit) params.set("limit", "5");
      router.replace(`?${params.toString()}`, {});
    }
  }, []);

  const status = searchParams.get("status");

  const { data, isError, isFetched, isLoading } = useGetRentals();

  const rentals = React.useMemo(() => {
    const arr = data?.rental_history.filter((order) => {
      const filterResuts = [];

      if (status) {
        filterResuts.push(status === order.status);
      }

      if (filterResuts.length === 0) return true;
      return filterResuts.every((result) => result);
    });

    return arr || [];
  }, [status, data?.rental_history]);

  const resetSorting = () => {
    const params = new URLSearchParams();
    searchParams.forEach((value, key) => {
      if (key !== "sortBy") {
        params.set(key, value);
      }
    });
    router.replace(`?${params.toString()}`, {});
  };

  return (
    <>
      {rentals.map((rental) => (
        <RentalItem item={rental} key={rental.id} />
      ))}
    </>
  );
}

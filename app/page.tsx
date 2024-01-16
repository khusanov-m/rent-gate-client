"use client";
// REMOVE USE CLIENT

import Footer from "@/components/Footer";
import OurCustomers from "@/components/info/OurCustomers";
import PerformanceSecurity from "@/components/info/PerformanceSecurity";
import SignUpCTA from "@/components/info/SignUpCTA";
import WhyWe from "@/components/info/WhyWe";
import HomeHeader from "@/components/root/HomeHeader";
import HomeServices from "@/components/root/HomeServices";
import { useQuery } from "@tanstack/react-query";

{
  /* REMOVE FROM */
}
export async function getPing() {
  const d = await fetch("http://144.91.121.27:8000/api/v1/ping", {
    method: "GET",
  });
  return await d.json();
}
{
  /* REMOVE TO */
}

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["ping"],
    queryFn: getPing,
  });

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* REMOVE FROM */}
        {isLoading && <p>LOADING</p>}
        {data && !isLoading && (
          <p>
            {data.status} {data.message}
          </p>
        )}
        {/* REMOVE TO */}
        <HomeHeader />
        <HomeServices className="pt-24" />
        <WhyWe />
        <OurCustomers />
        <PerformanceSecurity />
        <SignUpCTA />
        <Footer />
      </div>
    </>
  );
}

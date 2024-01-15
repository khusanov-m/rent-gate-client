import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import OurCustomers from "@/components/info/OurCustomers";
import PerformanceSecurity from "@/components/info/PerformanceSecurity";
import SignUpCTA from "@/components/info/SignUpCTA";
import WhyWe from "@/components/info/WhyWe";
import VehicleHomeSuggestions from "@/components/vehicle/VehicleHomeSuggestions";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <HomeHeader />
        <WhyWe />
        <VehicleHomeSuggestions />
        <OurCustomers />
        <PerformanceSecurity />
        <SignUpCTA />
        <Footer />
      </div>
    </>
  );
}

import OurCustomers from "@/components/info/OurCustomers";
import PerformanceSecurity from "@/components/info/PerformanceSecurity";
import SignUpCTA from "@/components/info/SignUpCTA";
import WhyWe from "@/components/info/WhyWe";
import Footer from "@/components/layout/Footer";
import HomeHeader from "@/components/root/HomeHeader";
import HomeServices from "@/components/root/HomeServices";
import SoonScreen from "@/components/screens/soon-page";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <HomeHeader />
        <HomeServices className="pt-24" />
        <div className="relative">
          <WhyWe />
          <SoonScreen />
        </div>
        <OurCustomers />
        <PerformanceSecurity />
        <SignUpCTA />
        <Footer />
      </div>
    </>
  );
}

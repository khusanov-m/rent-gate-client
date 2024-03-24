import Footer from "@/components/layout/Footer";
import HomeHeader from "@/components/root/HomeHeader";
import HomeServices from "@/components/root/HomeServices";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <HomeHeader />
        <HomeServices className="pt-24" />
        <Footer />
      </div>
    </>
  );
}

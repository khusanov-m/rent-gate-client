import Footer from "@/components/layout/Footer";

export default function VehiclesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-[calc(100svh-56px-65px)]">{children}</div>
      <Footer />
    </>
  );
}

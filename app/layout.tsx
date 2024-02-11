import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/lib/query-provider";
import { cn, makeMetaData } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster as SoonerToaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = makeMetaData();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen font-sans antialiased", inter.className)}
      >
        <Providers>
          <Toaster />
          <Navbar />
          {children}
          <SoonerToaster />
        </Providers>
      </body>
    </html>
  );
}

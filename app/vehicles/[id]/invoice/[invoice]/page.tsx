import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-3xl p-8 space-y-6">
        <CardHeader>
          <CardTitle>Receipt</CardTitle>
          <CardDescription>
            Billing address: 21 Random str. Tashkent 100000, Uzbekistan
          </CardDescription>
          <CardDescription>Status: Paid</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Vehicle Details</h3>
              <div className="flex items-center gap-4">
                <Image
                  alt="Car Image"
                  className="aspect-square rounded-lg object-cover"
                  height="100"
                  src="/placeholder.svg"
                  width="100"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-medium">Tesla Model 3</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Color: Red
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Pick-up & Drop-off</h3>
              <div className="space-y-1">
                <p className="text-sm">Pick-up: Jan 20, 2024, 10:00 AM</p>
                <p className="text-sm">Drop-off: Jan 27, 2024, 10:00 AM</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardContent>
          <h3 className="text-lg font-semibold">Payment Summary</h3>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <span>Rental Fee</span>
              <span>$700.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Insurance</span>
              <span>$100.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Add-ons</span>
              <span>$120.00</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between font-medium">
              <span>Total</span>
              <span>$920.00</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <CardDescription>
            Free cancelation available 1 day before
          </CardDescription>
          <Button className="w-full" variant="outline">
            Cancel
          </Button>
          <Button className="w-full" variant="outline">
            Contact Support
          </Button>
          <Button className="w-full">+200 RG Points</Button>
        </CardFooter>
      </Card>
    </main>
  );
}

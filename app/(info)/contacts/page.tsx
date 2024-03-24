import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function ContactsPage() {
  return (
    <div className="w-full py-6 space-y-6 md:py-12">
      <div className="container space-y-2 px-4 md:px-6">
        <div className="space-y-2">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We&apos;re here to help. Fill out the form below or contact us
              directly.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <p>+(998) 97 423-81-15</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p>rentgate@gmail.com</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Address</h4>
                    <p>Imaginary Street Rd, Taskent city, Uzbekistan</p>
                  </div>
                </div>

                <div className="">
                  <Image
                    alt="Map"
                    className="object-cover rounded-lg"
                    height="300"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/300",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[100px]"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center pb-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Questions & Answers
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Got a question? We&apos;ve got the answers.
            </h2>
          </div>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are some of the most common questions our customers ask. If you
            can&apos;t find the answer you&apos;re looking for, feel free to
            contact our support team.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid gap-2 py-8 border-t border-gray-200 dark:border-gray-800">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long does shipping take?</AccordionTrigger>
              <AccordionContent>
                Orders are typically processed within 24 hours. Once your order
                has been processed, shipping within the continental US takes 3
                to 7 business days. International shipping times may vary based
                on the destination.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent>
                We accept Visa, MasterCard, American Express, Discover, JCB, and
                Diners Club debit and credit cards. You can also pay using
                PayPal, Apple Pay, and Google Pay.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I return or exchange an item?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we accept returns and exchanges within 30 days of purchase.
                The item must be in its original condition with tags attached.
                Please contact our customer service team to initiate a return or
                exchange.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer international shipping to most countries. Shipping
                costs and delivery times may vary depending on the destination.
                You can check the shipping options during the checkout process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How can I track my order?</AccordionTrigger>
              <AccordionContent>
                Once your order has been shipped, you will receive a shipping
                confirmation email with a tracking number. You can use the
                tracking number to monitor the progress of your delivery.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

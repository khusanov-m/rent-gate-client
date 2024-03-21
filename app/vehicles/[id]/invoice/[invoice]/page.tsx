import { getPaymentInfoAPI } from "@/api/payment";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import InvoiceDataPage from "./invoice";

export default async function PaymentInvoicePage({
  params,
}: {
  params: { invoice: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["payment", params.invoice],
    queryFn: () => getPaymentInfoAPI(params.invoice),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <InvoiceDataPage id={params.invoice} />
    </HydrationBoundary>
  );
}

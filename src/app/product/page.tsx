import { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Incerto's Traces and Logs: Correlated and blazing fast.",
  description:
    "Distributed traces and centralized logs in a single dashboard, see everything the moment it happens.",
  openGraph: {
    title: "Incerto's Traces and Logs: Correlated and blazing fast.",
    description:
      "Distributed traces and centralized logs in a single dashboard, see everything the moment it happens.",
  },
};

export default function page({
  searchParams,
}: {
  searchParams: {
    product_name: string;
  };
}) {
  const productUrl = searchParams.product_name
    ? `/product/${searchParams.product_name}`
    : "/product/host_metrics";
  redirect(productUrl);
}

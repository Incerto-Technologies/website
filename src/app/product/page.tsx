import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Hero } from "@/components/templates/Product/Hero";
import { OtherProducts } from "@/components/templates/Product/OtherProducts";
import { Products } from "@/components/templates/Product/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ncerto's Traces and Logs: Correlated and blazing fast.",
  description:
    "Distributed traces and centralized logs in a single dashboard, see everything the moment it happens.",
  openGraph: {
    title: "ncerto's Traces and Logs: Correlated and blazing fast.",
    description:
      "Distributed traces and centralized logs in a single dashboard, see everything the moment it happens.",
  },
};

export default function page() {
  return (
    <DefaultLayout>
      <Hero />
      <Products />
      <OtherProducts />
    </DefaultLayout>
  );
}

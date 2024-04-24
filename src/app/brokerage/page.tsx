import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { BrokerageFooter } from "@/components/templates/brokerage/Footer";
import { Hero } from "@/components/templates/brokerage/Hero";
import { StickyContainer } from "@/components/templates/brokerage/StickyContainer";

export default function page() {
  return (
    <DefaultLayout>
      <Hero />
      <StickyContainer />
      <BrokerageFooter />
    </DefaultLayout>
  );
}

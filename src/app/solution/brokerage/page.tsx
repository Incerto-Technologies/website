import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { FaqContainer } from "@/components/templates/solution/brokerage/FaqContainer";
import { BrokerageFooter } from "@/components/templates/solution/brokerage/Footer";
import { FyersTestimonialCard } from "@/components/templates/solution/brokerage/FyersTestimonialCard";
import { Hero } from "@/components/templates/solution/brokerage/Hero";
import { StickyContainer } from "@/components/templates/solution/brokerage/StickyContainer";

export default function page() {
  return (
    <DefaultLayout>
      <Hero />
      <StickyContainer />
      <FyersTestimonialCard />
      <FaqContainer />
      <BrokerageFooter />
    </DefaultLayout>
  );
}

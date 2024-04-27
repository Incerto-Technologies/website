import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { SingleTestimonialCard } from "@/components/modules/SingleTestimonialCard";
import { CustomerImages } from "@/components/templates/solution/brokerage/CustomerImages";
import { FaqContainer } from "@/components/templates/solution/brokerage/FaqContainer";
import { BrokerageFooter } from "@/components/templates/solution/brokerage/Footer";
import { FyersTestimonialCard } from "@/components/templates/solution/brokerage/FyersTestimonialCard";
import { Hero } from "@/components/templates/solution/brokerage/Hero";
import { StickyContainer } from "@/components/templates/solution/brokerage/StickyContainer";

export default function page() {
  return (
    <DefaultLayout>
      <Hero />
      <CustomerImages />
      <StickyContainer />
      <FyersTestimonialCard />
      <FaqContainer />
      <BrokerageFooter />
    </DefaultLayout>
  );
}

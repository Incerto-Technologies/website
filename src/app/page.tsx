import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Features } from "@/components/templates/Homepage/Features";
import { FlowGraph } from "@/components/templates/Homepage/FlowGraph";
import { Hero } from "@/components/templates/Homepage/Hero";
import { Testimonial } from "@/components/templates/Homepage/Testimonial";
import { WhyUs } from "@/components/templates/Homepage/WhyUs";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <Features />
      <WhyUs />
      <FlowGraph />
      <Testimonial />
    </DefaultLayout>
  );
}

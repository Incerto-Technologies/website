import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Features } from "@/components/templates/Homepage/Features";
import { Hero } from "@/components/templates/Homepage/Hero";
import { TechnoMap } from "@/components/templates/Homepage/TechnoMap";
import { WhyUs } from "@/components/templates/Homepage/WhyUs";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <Features />
      <WhyUs />
      <TechnoMap />
    </DefaultLayout>
  );
}

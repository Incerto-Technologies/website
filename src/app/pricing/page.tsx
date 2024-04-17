import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Footer } from "@/components/modules/Footer";
import { PricingComparison } from "@/components/modules/PricingComparison";
import { PricingHero } from "@/components/modules/PricingHero";
import { PricingInfo } from "@/components/modules/PricingInfo";
import { PricingPriceChart } from "@/components/modules/PricingPriceChart";
import { PricingSelector } from "@/components/modules/PricingSelector";
import { GetInTouch } from "@/components/templates/About/GetInTouch";
import { FooterBackground } from "@/components/templates/Home/FooterBackground";

export default function page() {
  return (
    <DefaultLayout>
      <PricingHero />
      <PricingPriceChart />
      <PricingInfo />
      <PricingComparison />
      <PricingSelector />
      <div className="mt-[150px] md:mt-[200px]">
        <FooterBackground className="">
          {/* <FooterBackground className="bg-center md:bg-center xl:bg-top"> */}
          <GetInTouch />
          <Footer isBackground />
        </FooterBackground>
      </div>
    </DefaultLayout>
  );
}

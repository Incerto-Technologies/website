import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Footer } from "@/components/modules/Footer";
import { AboutHero } from "@/components/templates/About/AboutHero";
import { GetInTouch } from "@/components/templates/About/GetInTouch";
import { OurVision } from "@/components/templates/About/OurVision";
import { Team } from "@/components/templates/About/Team";
import { FooterBackground } from "@/components/templates/Home/FooterBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incerto | About Us",
  openGraph: {
    title: "Incerto | About Us",
  },
};

export default function page() {
  return (
    <DefaultLayout>
      <AboutHero />
      <OurVision />
      <Team />
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
// hi

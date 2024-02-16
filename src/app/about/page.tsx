import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Footer } from "@/components/modules/Footer";
import { AboutHero } from "@/components/templates/About/AboutHero";
import { GetInTouch } from "@/components/templates/About/GetInTouch";
import { OurVision } from "@/components/templates/About/OurVision";
import { Team } from "@/components/templates/About/Team";
import { FooterBackground } from "@/components/templates/Home/FooterBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Incerto: The team that makes it work.",
  description:
    "Core principles on which the company works and the team building it.",
  openGraph: {
    title: "Meet Incerto: The team that makes it work.",
    description:
      "Core principles on which the company works and the team building it.",
  },
};

export default function page() {
  return (
    <DefaultLayout>
      <AboutHero />
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

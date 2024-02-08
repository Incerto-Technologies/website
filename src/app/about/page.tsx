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
  description:
    "Elevate your online presence with our 'About Us' page. Seamlessly create and share your unique insights, stories, and expertise. Experience an intuitive platform that simplifies the blogging process. Start crafting engaging content and reaching your audience effortlessly. Begin your blogging journey today!",
  openGraph: {
    title: "Incerto | About Us",
    description:
      "Elevate your online presence with our 'About Us' page. Seamlessly create and share your unique insights, stories, and expertise. Experience an intuitive platform that simplifies the blogging process. Start crafting engaging content and reaching your audience effortlessly. Begin your blogging journey today!",
  },
};

export default function page() {
  return (
    <DefaultLayout>
      <AboutHero />
      <OurVision />
      <Team />
      <div className="mt-[150px] md:mt-[200px]">
        <FooterBackground className="bg-center md:bg-center xl:bg-top">
          <GetInTouch />
          <Footer isBackground />
        </FooterBackground>
      </div>
    </DefaultLayout>
  );
}
// hi

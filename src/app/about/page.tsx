import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { AboutHero } from "@/components/templates/About/AboutHero";
import { OurVision } from "@/components/templates/About/OurVision";
import { Team } from "@/components/templates/About/Team";
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
    </DefaultLayout>
  );
}
// hi

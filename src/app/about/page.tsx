import { DefaultLayout } from "@/components/layouts/DefaultLayout";
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
      <section className="flex h-full min-h-screen items-center justify-center bg-primary py-36">
        <h1 className="text-4xl font-bold text-white">About Us</h1>
      </section>
    </DefaultLayout>
  );
}
// hi

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { AddBlogForm } from "@/components/modules/AddBlogForm";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incerto | Add Blog",
  description:
    "Elevate your online presence with our 'Add Blog' page. Seamlessly create and share your unique insights, stories, and expertise. Experience an intuitive platform that simplifies the blogging process. Start crafting engaging content and reaching your audience effortlessly. Begin your blogging journey today!",
  openGraph: {
    title: "Incerto | Add Blog",
    description:
      "Elevate your online presence with our 'Add Blog' page. Seamlessly create and share your unique insights, stories, and expertise. Experience an intuitive platform that simplifies the blogging process. Start crafting engaging content and reaching your audience effortlessly. Begin your blogging journey today!",
  },
};

export default async function page() {
  return (
    <DefaultLayout>
      <ReduxProdiver>
        <section className="flex h-full min-h-screen items-center justify-center bg-primary py-36">
          <AddBlogForm />
        </section>
      </ReduxProdiver>
    </DefaultLayout>
  );
}

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { AddBlogForm } from "@/components/modules/AddBlogForm";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incerto | Add Blog",
  openGraph: {
    title: "Incerto | Add Blog",
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

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { AddBlogForm } from "@/components/modules/AddBlogForm";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";
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

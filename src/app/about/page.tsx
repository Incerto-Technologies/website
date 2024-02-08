import { DefaultLayout } from "@/components/layouts/DefaultLayout";

export default function page() {
  return (
    <DefaultLayout>
      <div className="flex min-h-screen w-full items-center justify-center">
        <h1 className="text-4xl font-semibold text-secondary">
          404 | No blog found
        </h1>
      </div>
    </DefaultLayout>
  );
}
// hi

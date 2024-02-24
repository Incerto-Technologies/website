import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { NotFound } from "@/components/modules/NotFound";
import Link from "next/link";

export default function page() {
  return (
    <DefaultLayout>
      <NotFound
        text={"Sorry, we can’t find the page you are looking for :("}
        btnText="Return to homepage"
        redirectPath="/"
      />
    </DefaultLayout>
  );
}

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Hero } from "@/components/templates/Product/Hero";
import { OtherProducts } from "@/components/templates/Product/OtherProducts";
import { Products } from "@/components/templates/Product/Products";

export default function page() {
  return (
    <DefaultLayout>
      <Hero />
      <Products />
      <OtherProducts />
    </DefaultLayout>
  );
}

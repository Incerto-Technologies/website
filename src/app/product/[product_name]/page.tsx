import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Hero } from "@/components/templates/Product/Hero";
import { OtherProducts } from "@/components/templates/Product/OtherProducts";
import { Products } from "@/components/templates/Product/Products";
import { productsName } from "@/data/navRoutes";
import { getProductData } from "@/utils/getProductData";
import { Metadata } from "next";
import { Suspense } from "react";
type Props = {
  params: { product_name: string };
};

export const revalidate = 30;

export async function generateStaticParams() {
  return productsName.map((product) => ({
    product_name: product,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productData = getProductData(params.product_name);
  return {
    title: productData.hero.title.replaceAll("/", ""),
    description: productData.hero.description.replaceAll("/", ""),
    openGraph: {
      title: productData.hero.title.replaceAll("/", ""),
      description: productData.hero.description.replaceAll("/", ""),
      images: [productData.hero.video.thumbnail],
    },
  };
}

export default function page({
  params,
}: {
  params: {
    product_name: string;
  };
}) {
  return (
    <DefaultLayout>
      <Hero productName={params.product_name} />
      <Products productName={params.product_name} />
      <Suspense>
        <OtherProducts productName={params.product_name} />
      </Suspense>
    </DefaultLayout>
  );
}

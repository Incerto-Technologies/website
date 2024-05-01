"use client";
import React from "react";
import Video from "next-video";
import { useSearchParams } from "next/navigation";
import { getProductData } from "@/utils/getProductData";
import Link from "next/link";
import { useRouter } from "next/navigation";
export const Hero = () => {
  const searchParams = useSearchParams();
  const productData = getProductData(searchParams.get("product_name"));
  const router = useRouter();
  return (
    <div
      className={`bg-[url("/backgrounds/product-mobile.png")] bg-cover bg-no-repeat pt-[200px] md:bg-[url("/backgrounds/product.png")] md:bg-cover md:bg-left-top md:pt-[150px]`}
    >
      <div className="flex items-center justify-center">
        {productData.hero.icon({ size: "24" })}
        <p className="ml-[8px] font-semibold leading-5 tracking-[-0.32px] text-white">
          {productData.hero.icon_title}{" "}
        </p>
      </div>
      <div className="mt-[40px] px-5">
        <h1 className="mx-auto max-w-[750px] text-center text-[34px] font-semibold leading-10 tracking-[-0.68px] md:text-[44px] md:leading-[60px]">
          <span className="product-title">
            {productData.hero.title.split("/")[0]}
          </span>{" "}
          {productData.hero.title.split("/")[1]}
        </h1>
        <p className="mt-[32px] text-center font-medium leading-[26px] tracking-wide md:mt-[34px] md:leading-7">
          {productData.hero.description}
        </p>
        <div className="mt-[24px] flex flex-col items-center justify-center gap-[10px] md:mt-[26px] md:flex-row">
          <Link
            href={productData.hero.btnLink}
            className="rounded-[14px] border-[0.5px] border-[#888888] px-[22px] py-[12px] font-bold tracking-[1%] text-secondary transition-all ease-in hover:bg-[#EDEDED] hover:text-[#0a0a0a]"
          >
            <p>{productData.hero.btnName}</p>
          </Link>
          <button
            onClick={() => {
              router.push("/#contact");
            }}
            className="rounded-[14px] bg-accent px-[22px] py-[12px] font-bold tracking-[1%] text-secondary transition-all duration-200  ease-in  hover:bg-[#035749]"
          >
            <div className="flex items-center justify-center gap-2.5">
              <p> Book a Demo</p>
            </div>
          </button>
        </div>
      </div>

      <div className="mx-auto mt-[145px] w-full max-w-[980px] overflow-hidden rounded-[20px] px-[20px] md:mt-[110px] md:px-10">
        {/* <video controls>
          <source
            src={productData.hero.video.src}
            type={productData.hero.video.type}
          />
        </video> */}
        <Video
          src={productData.hero.video.src}
          accentColor="#0F937C"
          primaryColor="#fff"
          poster={productData.hero.video.thumbnail}
        />
      </div>
    </div>
  );
};

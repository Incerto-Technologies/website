import { productData } from "@/data/product";
import React from "react";
import Video from "next-video";
export const Hero = () => {
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
        <h1 className="text-center text-[34px] font-semibold leading-10 tracking-[-0.68px] md:text-[44px] md:leading-[60px]">
          <span className="product-title">
            {productData.hero.title.split("/")[0]}
          </span>{" "}
          {productData.hero.title.split("/")[1]}
        </h1>
        <p className="mt-[32px] text-center font-medium leading-[26px] tracking-wide md:mt-[34px] md:leading-7">
          {productData.hero.description}
        </p>
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

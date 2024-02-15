import { VideoPlayer } from "@/components/elements/VideoPlayer";
import React from "react";

export const Hero = () => {
  return (
    <div
      className={`min-h-screen bg-[url("/backgrounds/product-mobile.png")] bg-cover bg-no-repeat pt-[200px] md:bg-[url("/backgrounds/product.png")] md:bg-cover md:bg-left-top md:pt-[150px]`}
    >
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.54027 11.1201C0.860273 11.4501 0.860273 18.2601 5.54027 18.5901H7.46031"
            stroke="#00FF99"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.59003 11.1196C2.38003 2.18966 15.92 -1.38034 17.47 7.99966C21.8 8.54966 23.55 14.3196 20.27 17.1896C19.27 18.0996 17.98 18.5996 16.63 18.5896H16.54"
            stroke="#00FF99"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 16.5303C17 17.2703 16.84 17.9703 16.54 18.5903C16.46 18.7703 16.37 18.9403 16.27 19.1003C15.41 20.5503 13.82 21.5303 12 21.5303C10.18 21.5303 8.58998 20.5503 7.72998 19.1003C7.62998 18.9403 7.54002 18.7703 7.46002 18.5903C7.16002 17.9703 7 17.2703 7 16.5303C7 13.7703 9.24 11.5303 12 11.5303C14.76 11.5303 17 13.7703 17 16.5303Z"
            stroke="#00FF99"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.4399 16.5298L11.4299 17.5199L13.5599 15.5498"
            stroke="#00FF99"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="ml-[8px] font-semibold leading-5 tracking-[-0.32px] text-white">
          Cloud Metrics
        </p>
      </div>
      <div className="mt-[40px] px-5">
        <h1 className="text-center text-[34px] font-semibold leading-10 tracking-[-0.68px] md:text-[44px] md:leading-[60px]">
          <span className="product-title">Revolutionize</span> your digital saas
          products
        </h1>
        <p className="mt-[32px] text-center font-medium leading-[26px] tracking-wide md:mt-[34px] md:leading-7">
          Build observability that adapts to your infra, not the other way
          around
        </p>
      </div>

      <div className="mx-auto mt-[145px] w-full max-w-[980px] px-[20px] md:mt-[110px] md:px-10">
        <video controls>
          <source src="/video/product1.mp4" type="video/mp4" />
        </video>
        {/*       <VideoPlayer /> */}
      </div>
    </div>
  );
};

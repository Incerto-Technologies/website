import Image from "next/image";
import React from "react";

const imageUrls = [
  "/images/brokerage/sebi.png",
  "/images/brokerage/nse.png",
  "/images/brokerage/bse.png",
];

const importantImageUrls = [
  "/images/brokerage/fyers.png",
  "/images/brokerage/dhan.png",
];
export const CustomerImages = () => {
  return (
    <section className="w-container mt-[100px] w-[80%]">
      <div className="flex items-center justify-center gap-[30px]">
        {importantImageUrls.map((image, index) => (
          <div key={index} className="w-1/2 max-w-[180px]">
            <Image
              alt="Image"
              src={image}
              width={1080}
              height={1080}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <h3 className="mt-[50px] text-center text-[38px] font-bold leading-[40px] text-opacity-85 md:text-[52px] md:leading-[44px]">
        Auditing made easy:
      </h3>
      <div className="mt-[50px] flex flex-wrap items-center justify-center gap-[30px]">
        {imageUrls.map((image, index) => (
          <div key={index} className="w-2/4 max-w-[130px]">
            <Image
              alt="Image"
              src={image}
              width={1080}
              height={1080}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

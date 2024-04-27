import Image from "next/image";
import React from "react";

const imageUrls = [
  "/images/brokerage/sebi.png",
  "/images/brokerage/nse.png",
  "/images/brokerage/bse.png",
  "/logos/customers/fyers.svg",
  "/images/brokerage/dhan.png",
];

export const CustomerImages = () => {
  return (
    <section className="w-container mt-[160px] w-[80%]">
      <h3 className="text-center font-bold leading-6 text-opacity-85 md:text-[40px] md:leading-[44px]">
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

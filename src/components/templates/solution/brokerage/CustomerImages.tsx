import Image from "next/image";
import React from "react";

const imageUrls = [
  "/logos/customers/fyers.svg",
  "/images/brokerage/dhan.png",
  "/images/brokerage/nse.png",
  "/images/brokerage/bse.png",
  "/images/brokerage/sebi.png",
];

export const CustomerImages = () => {
  return (
    <div className="w-container mt-[160px] flex w-[80%] flex-wrap items-center justify-center gap-[30px]">
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
  );
};

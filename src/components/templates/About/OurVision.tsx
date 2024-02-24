import { Quotes } from "@/components/elements/icons/Quotes";
import { aboutOurVision } from "@/data/aboutOurVision";
import Image from "next/image";
import React from "react";
import { v4 as uuid } from "uuid";

export const OurVision = () => {
  return (
    <section className="relative mt-[94px] min-h-[550px] md:mt-[200px]">
      <div className="w-container flex h-full w-full items-center gap-20  md:px-[80px]">
        <div className="mx-auto flex w-full items-center justify-center md:mt-0">
          <div
            className="flex h-full w-full flex-col justify-center px-[42px] pb-[30px] pt-[144px] md:min-h-[540px] md:rounded-[20px] md:pb-0 md:pl-[41px] md:pr-0 md:pt-0"
            style={{
              background: `url('/backgrounds/aboutus.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Quotes />
            <h2 className="mt-[16px] text-[30px] font-medium leading-[44px] tracking-[-1.2px] md:text-[34px] md:tracking-[-1.34px]">
              In a world inundated with data,
              <span className="text-accent-light">
                true power lies in its interpretation
              </span>
            </h2>
          </div>
          <div className="hidden h-full w-full flex-col items-center justify-center gap-[70px] px-[20px] md:flex">
            {aboutOurVision.map((item) => (
              <div key={uuid()} className="w-full max-w-[462px]">
                <item.icon />
                <h3 className=" mt-[10px] font-semibold md:text-[28px]">
                  {item.title}
                </h3>
                <p className="mt-[16px] leading-[26px] tracking-[0.32px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[150px] flex h-full w-full flex-col items-center justify-center gap-[70px] px-5 md:hidden">
        {aboutOurVision.map((item) => (
          <div key={uuid()} className="w-full max-w-[462px]">
            <item.icon />
            <h3 className=" mt-[10px] text-[28px] font-semibold">
              {item.title}
            </h3>
            <p className="mt-[16px] leading-[26px] tracking-[0.32px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

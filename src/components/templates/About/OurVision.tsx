import { Quotes } from "@/components/elements/icons/Quotes";
import { aboutOurVision } from "@/data/aboutOurVision";
import React from "react";
import { v4 as uuid } from "uuid";

export const OurVision = () => {
  return (
    <section className="relative mt-[94px] min-h-[550px] md:mt-[200px]">
      <div
        className="w-fullbg-cover z-0 hidden h-full min-h-[550px] bg-center bg-no-repeat md:absolute md:left-0 md:top-0 md:block md:w-1/2 md:rounded-br-[20px] md:rounded-tr-[20px]"
        style={{
          backgroundImage: "url('/backgrounds/aboutus.png')",
        }}
      ></div>
      <div
        className={`h-full w-full bg-[url('/backgrounds/aboutus.png')] bg-cover bg-no-repeat pb-[32px] md:absolute md:left-0 md:top-0 md:z-10  md:min-h-[550px] md:bg-none md:pb-0`}
      >
        <div className="w-container flex h-full w-full gap-20 px-[20px] md:px-[80px]">
          <div className="mx-auto mt-[140px] flex w-full items-center justify-center md:mt-0 md:h-full">
            <div>
              <Quotes />
              <h2 className="mt-[16px] text-[30px] font-medium leading-[44px] tracking-[-1.2px] md:text-[34px] md:tracking-[-1.34px]">
                In a world inundated with data,
                <span className="text-accent-light">
                  {" "}
                  true power lies in its interpretation
                </span>
              </h2>
            </div>
          </div>
          <div className="hidden h-full w-full flex-col items-center justify-center gap-[70px] md:flex">
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

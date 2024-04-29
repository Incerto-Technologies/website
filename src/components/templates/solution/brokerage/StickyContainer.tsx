"use client";
import React, { useState } from "react";
import data from "@/data/brokerageSticky.json";
import { WhyUsCard } from "@/components/modules/WhyUsCard";
import { WhyUsSlider } from "@/components/modules/WhyUsSlider";

export const StickyContainer = () => {
  const [currentViewSlide, setCurrentViewSlide] = useState(0);
  return (
    <div className="mt-[160px]">
      <h3 className="mx-auto text-center font-gotham text-[24px] font-medium leading-[33px] tracking-[-0.48px] md:text-[34px] md:leading-[48px] md:tracking-[-0.68px]">
        Every trading platform is different.
        <br />{" "}
        <span className="text-accent-light">
          Then why use the same cookie-cutter legacy SaaS tools?
        </span>
      </h3>
      <div className="relative mx-auto mt-[50px] hidden w-5/6 justify-center gap-14 px-5 lg:flex">
        {/* Side bar */}
        <div className="w-[16px]">
          {/* <div className="top-sticky sticky  flex w-full scale-75 flex-col items-center justify-center gap-14 py-5 xl:scale-100"> */}
          <div className="top-sticky sticky  flex w-full scale-90 flex-col items-center justify-center gap-14 py-5">
            {data.data.map((item, index) => {
              return (
                <div
                  key={index}
                  data-view={index === currentViewSlide}
                  className="h-[12px] w-[12px] rounded-full bg-[#414141] data-[view=true]:bg-[#00FF99]"
                ></div>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="flex h-full w-full max-w-[980px] flex-col items-center justify-center gap-[28px]">
          {data.data.map((item, index) => {
            return (
              <WhyUsCard
                key={index}
                {...item}
                id={index}
                setCurrentViewSlide={setCurrentViewSlide}
              />
            );
          })}
        </div>
      </div>
      <WhyUsSlider Cards={data} />
    </div>
  );
};

"use client";
import { useState } from "react";
import { WhyUsCard } from "../../modules/WhyUsCard";
import data from "@/data/WhyUs.json";
import { WhyUsHeader } from "@/components/modules/WhyUsHeader";
import { WhyUsSlider } from "@/components/modules/WhyUsSlider";

export const WhyUs = () => {
  const [currentViewSlide, setCurrentViewSlide] = useState(0);

  return (
    <section className="w-container mt-[200px] md:px-4 lg:px-8">
      <WhyUsHeader />

      <div className="relative mx-auto hidden w-5/6 gap-14 px-5 lg:flex">
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
        <div className="flex h-full w-full flex-col items-center justify-center gap-[28px]">
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

      {/* Mobile and Table */}
      <WhyUsSlider />
    </section>
  );
};

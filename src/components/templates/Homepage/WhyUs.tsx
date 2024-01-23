"use client";
import { useState } from "react";
import { WhyUsCard } from "../../modules/WhyUsCard";
import data from "@/data/WhyUs.json";
import { WhyUsHeader } from "@/components/modules/WhyUsHeader";

export const WhyUs = () => {
  const [currentViewSlide, setCurrentViewSlide] = useState(0);

  return (
    <section className="w-container relative mt-52">
      <WhyUsHeader />

      <div className="mt-[50px] flex px-5">
        {/* Side bar */}
        <div className="mt-[50px] w-1/6">
          <div className="top-sticky sticky flex w-full flex-col items-center justify-center gap-14 py-10">
            {data.data.map((item, index) => {
              return (
                <div
                  key={index}
                  data-view={index === currentViewSlide}
                  className="h-[12px] w-[12px] rounded-full bg-[#414141] data-[view=true]:bg-accent-light"
                ></div>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="flex w-5/6 flex-col justify-center gap-96">
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
    </section>
  );
};

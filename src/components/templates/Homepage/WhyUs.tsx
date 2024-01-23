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

      <div className="mt-[50px] flex flex-col-reverse md:flex-row">
        {/* Side bar */}
        <div className="mt-[50px]  w-1/6">
          <div className="top-sticky sticky flex w-full flex-col items-center justify-center gap-14 py-20">
            {data.data.map((item, index) => {
              return (
                <div
                  key={index}
                  data-view={index === currentViewSlide}
                  className="h-[8px] w-[8px] rounded-full bg-[#414141] data-[view=true]:bg-accent-light md:h-[12px] md:w-[12px]"
                ></div>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto flex w-5/6 flex-col justify-center gap-96 md:mx-2">
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

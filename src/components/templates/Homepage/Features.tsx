import React from "react";
import { Card, FeatureCardProps } from "../../modules/FeaturesCard";
import { HourGlass } from "@/components/elements/icons/HourGlass";
import { Filter } from "@/components/elements/icons/Filter";
import { Bug } from "@/components/elements/icons/Bug";
import { EnergyPower } from "@/components/elements/icons/EnergyPower";
import { SearchEye } from "@/components/elements/icons/SearchEye";

const FeaturesData: FeatureCardProps[] = [
  {
    icon: HourGlass,
    title: "High MTTD and MTTR",
    description: `Do you spend hours to days detecting and resolving problems? This can have a detrimental effect on your business as customers wait in agony`,
  },
  {
    icon: Filter,
    title: "Numerous Bottlenecks with SaaS Vendors",
    description: `Reluctant to instruments, expensive custom metrics, unpredictable bills, no sampling control, and more! Freedom from these limitations is a must to get full observability`,
  },
  {
    icon: Bug,
    title: "Compliance issues",
    description: `No alternative but to share data with the vendors? Don’t let the data-sharing dilemma stop you from implementing observability`,
  },

  {
    icon: EnergyPower,
    title: "In-house Observability Tradeoffs",
    description: `With all engineers focused on building core business solutions, allocation of resources to build observability in-house leads to bandwidth issues`,
  },
  {
    icon: SearchEye,
    title: "Lack of Observability Understanding",
    description: `Implementing the right culture of observability practices from Day 1 is priceless`,
  },
];

export const Features = () => {
  return (
    <div className="w-container px-3">
      <h2 className="text-center font-gotham text-2xl font-medium leading-[33px] tracking-[-0.48px] md:text-[34px] md:leading-[48px] md:tracking-[-0.68px]">
        Limitations of legacy
        <span className="features-title text-clip-all">
          {" "}
          observability tools
        </span>
      </h2>

      <p className="mx-auto mt-8 w-3/4 text-center text-[24px] text-sm font-medium leading-6 tracking-wide text-[#959595] md:mt-[22px] md:w-4/6 md:leading-7 md:tracking-wide md:text-secondary">
        Are you a business owner grappling with challenges in understanding and
        optimizing your system&apos;s performance and Facing issues like...
      </p>

      <div className="mx-auto mt-[52px] flex w-full flex-wrap justify-center gap-[52px] px-9 md:mt-[101px] md:gap-[61px] lg:gap-x-[61px]">
        {FeaturesData.map((feature, index) => (
          <div
            className={
              index < 3
                ? "h-full w-full md:w-1/2 lg:aspect-video lg:max-w-[360px]"
                : "h-full w-full md:w-1/2 lg:aspect-video lg:max-w-[360px]"
            }
            key={`${feature.title}--${index}`}
          >
            <Card {...feature} />
          </div>
        ))}
      </div>
    </div>
  );
};

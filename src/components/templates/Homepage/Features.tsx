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
    title: "In-house observability tradeoffs",
    description: `With all engineers focused on building core business solutions, allocation of resources to build observability in-house leads to bandwidth issues`,
  },
  {
    icon: SearchEye,
    title: "Lack of observability understanding",
    description: `Implementing the right culture of observability practices from Day 1 is priceless`,
  },
];

export const Features = () => {
  return (
    <div className="w-container mt-36 px-3">
      <h2 className="text-center font-gotham text-2xl font-medium leading-[33px] tracking-[-0.48px] md:text-4xl md:tracking-[-0.68px]">
        Let’s Understand some of the
        <span className="features-title text-clip-all">
          {" "}
          Silent Strains on Your Business
        </span>
      </h2>

      <p className="mx-auto mt-8 w-3/4 text-center text-[24px] text-sm font-medium leading-6 tracking-wide text-[#959595] md:mt-5 md:w-4/6 md:leading-7 md:tracking-wide md:text-secondary">
        Are you a business owner grappling with challenges in understanding and
        optimizing your system&apos;s performance and Facing issues like...
      </p>

      <div className="mx-auto mt-[52px] flex w-5/6 flex-wrap justify-center gap-[52px] md:mt-28 md:gap-16 lg:max-w-[1000px]">
        {FeaturesData.map((feature, index) => (
          <Card key={`${feature.title}--${index}`} {...feature} />
        ))}
      </div>
    </div>
  );
};

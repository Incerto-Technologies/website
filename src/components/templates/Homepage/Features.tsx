import { AllInclusive } from "@/components/elements/icons/AllInclusive";
import { DisabledVisible } from "@/components/elements/icons/DisabledVisible";
import { LockPerson } from "@/components/elements/icons/LockPerson";
import React from "react";
import { Card, FeatureCardProps } from "../../modules/FeaturesCard";
import { AccountTree } from "@/components/elements/icons/AccountTree";

const FeaturesData: FeatureCardProps[] = [
  {
    icon: AllInclusive,
    title: "Lack of observability understanding",
    description: `Implementing the right culture of observability practices from Day 1 is priceless`,
  },
  {
    icon: LockPerson,
    title: "Numerous Bottlenecks with SaaS Vendors",
    description: `Reluctant to instruments, expensive custom metrics, unpredictable bills, no sampling control, and more! Freedom from these limitations is a must to get full observability`,
  },
  {
    icon: AccountTree,
    title: "Compliance issues",
    description: `No alternative but to share data with the vendors? Don’t let the data-sharing dilemma stop you from implementing observability`,
  },
  {
    icon: DisabledVisible,
    title: "High MTTD and MTTR",
    description: `Do you spend hours to days detecting and resolving problems? This can have a detrimental effect on your business as customers wait in agony`,
  },
  {
    icon: DisabledVisible,
    title: "In-house observability tradeoffs",
    description: `With all engineers focused on building core business solutions, allocation of resources to build observability in-house leads to bandwidth issues`,

  },
];

export const Features = () => {
  return (
    <div className="w-container mt-36 px-3">
      <h2 className="text-center font-gotham text-2xl font-medium leading-[33px] tracking-[-0.48px] md:text-4xl md:tracking-[-0.68px]">
        Limitations of legacy
        <span className="features-title text-clip-all">
          {" "}
          observability tools
        </span>
      </h2>
      {/* <p className="mx-auto mt-8 w-3/4 text-center text-[24px] text-sm font-medium leading-6 tracking-wide text-[#959595] md:mt-5 md:w-4/6 md:leading-9 md:tracking-wide md:text-secondary">
        Are you a business owner grappling with challenges in understanding and
        optimizing your system&apos;s performance and Facing issues like...
      </p> */}


      <div className="mx-auto mt-[52px] flex w-5/6 flex-wrap justify-center gap-[52px] md:mt-28 md:gap-20">
        {FeaturesData.map((feature, index) => (
          <Card key={`${feature.title}--${index}`} {...feature} />
        ))}
      </div>
    </div>
  );
};

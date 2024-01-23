import { AllInclusive } from "@/components/elements/icons/AllInclusive";
import { DisabledVisible } from "@/components/elements/icons/DisabledVisible";
import { LockPerson } from "@/components/elements/icons/LockPerson";
import React from "react";
import { Card, FeatureCardProps } from "../../modules/FeaturesCard";
import { AccountTree } from "@/components/elements/icons/AccountTree";

const FeaturesData: FeatureCardProps[] = [
  {
    icon: AllInclusive,
    title: "Recurring high costs",
    description: `Free your business from recurring costs, ensuring financial efficiency and sustainable growth with Incerto`,
  },
  {
    icon: LockPerson,
    title: "Vendor locking",
    description: `Free your business from recurring costs, ensuring financial efficiency and sustainable growth with Incerto`,
  },
  {
    icon: AccountTree,
    title: "Rigid structure",
    description: `Free your business from recurring costs, ensuring financial efficiency and sustainable growth with Incerto`,
  },
  {
    icon: DisabledVisible,
    title: "Zero control",
    description: `Free your business from recurring costs, ensuring financial efficiency and sustainable growth with Incerto`,
  },
  {
    icon: DisabledVisible,
    title: "Zero control",
    description: `Free your business from recurring costs, ensuring financial efficiency and sustainable growth with Incerto`,
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
      <p className="mx-auto mt-8 w-3/4 text-center text-[24px] text-sm font-medium leading-6 tracking-wide text-[#959595] md:mt-5 md:w-4/6 md:leading-9 md:tracking-wide md:text-secondary">
        Are you a business owner grappling with challenges in understanding and
        optimizing your system&apos;s performance and Facing issues like...
      </p>

      <div className="mx-auto mt-[52px] flex w-5/6 flex-wrap justify-center gap-[52px] md:mt-28 md:gap-20">
        {FeaturesData.map((feature, index) => (
          <Card key={`${feature.title}--${index}`} {...feature} />
        ))}
      </div>
    </div>
  );
};

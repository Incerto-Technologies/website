import { AccountTree } from "@/components/icons/AccountTree";
import { AllInclusive } from "@/components/icons/AllInclusive";
import { DisabledVisible } from "@/components/icons/DisabledVisible";
import { LockPerson } from "@/components/icons/LockPerson";
import React from "react";
import { Card, FeatureCardProps } from "./Card/Card";

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
    <div className="w-container mb-16 mt-72">
      <h2 className="text-center font-gotham text-5xl font-medium leading-10 tracking-[-1px]">
        Let’s Understand some of the
        <span className="head-title"> Silent Strains on Your Business</span>
      </h2>
      <p className="mx-auto mt-5 w-4/6 text-center text-[24px] font-medium leading-9 tracking-wide text-neutral-200">
        Are you a business owner grappling with challenges in understanding and
        optimizing your system&apos;s performance and Facing issues like...
      </p>

      <div className="mx-auto mt-28 flex w-5/6 flex-wrap justify-center gap-20">
        {FeaturesData.map((feature, index) => (
          <Card key={`${feature.title}--${index}`} {...feature} />
        ))}
      </div>
    </div>
  );
};

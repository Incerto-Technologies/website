import { AccountTree } from "@/components/icons/AccountTree";
import { AllInclusive } from "@/components/icons/AllInclusive";
import { DisabledVisible } from "@/components/icons/DisabledVisible";
import { LockPerson } from "@/components/icons/LockPerson";
import React from "react";
import { FeatureCardProps } from "./Card/Card";

const FeaturesData: FeatureCardProps[] = [
  {
    icon: AccountTree,
    title: "  Recurring high costs`",
    description: `Free your business from recurring costs, ensuring financial efficiency and sustainable growth with Incerto`,
  },
  {
    icon: AllInclusive,
    title: "  Recurring high costs`",
    description: `Free your business from recurring costs, ensuring financial efficiency and sustainable growth with Incerto`,
  },
  {
    icon: LockPerson,
    title: "  Recurring high costs`",
    description: `Free your business from recurring costs, ensuring financial efficiency and sustainable growth with Incerto`,
  },
  {
    icon: DisabledVisible,
    title: "  Recurring high costs`",
    description: `Free your business from recurring costs, ensuring financial efficiency and sustainable growth with Incerto`,
  },
  {
    icon: DisabledVisible,
    title: "  Recurring high costs`",
    description: `Free your business from recurring costs, ensuring financial efficiency and sustainable growth with Incerto`,
  },
];

export const Features = () => {
  return (
    <div className="mt-72">
      <h2 className="text-center font-gotham text-5xl font-medium leading-10 tracking-[-1px]">
        Let’s Understand some of the
        <span className="head-title"> Silent Strains on Your Business</span>
      </h2>
      <p className="mx-auto mt-5 w-4/6 text-center text-[24px] font-medium leading-9 tracking-wide text-neutral-200">
        Are you a business owner grappling with challenges in understanding and
        optimizing your system&apos;s performance and Facing issues like...
      </p>
    </div>
  );
};

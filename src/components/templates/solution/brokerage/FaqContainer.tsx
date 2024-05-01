import { Faq } from "@/components/modules/Faq";

import data from "@/data/faq.json";
export const FaqContainer = () => {
  return (
    <div className="mt-[160px]">
      <h3 className="mx-auto text-center font-gotham text-[24px] font-medium leading-[33px] tracking-[-0.48px] md:text-[34px] md:leading-[48px] md:tracking-[-0.68px]">
        {data.brokerage.name.split("\b")[0]}
        <span className="text-accent-light">
          {data.brokerage.name.split("\b")[1]}
        </span>
      </h3>
      <Faq faq={data.brokerage.faq} />
    </div>
  );
};

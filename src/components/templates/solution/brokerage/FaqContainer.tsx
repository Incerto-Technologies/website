import { Faq } from "@/components/modules/Faq";

import data from "@/data/faq.json";
export const FaqContainer = () => {
  return (
    <div className="mt-[160px]">
      <h2 className="mx-auto w-3/4 text-center font-gotham text-[32px] font-bold leading-[33px] tracking-[-0.48px] md:text-[34px] md:leading-[48px] md:tracking-[-0.68px]">
        {data.brokerage.name}
      </h2>
      <p className="mx-auto mt-3 w-3/4 text-center text-sm font-medium leading-6 tracking-wide text-[#959595] md:mt-[22px] md:w-4/6 md:text-[16px] md:leading-7 md:tracking-wide md:text-secondary">
        {data.brokerage.description}
      </p>
      <Faq faq={data.brokerage.faq} />
    </div>
  );
};

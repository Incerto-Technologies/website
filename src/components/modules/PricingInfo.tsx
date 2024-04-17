import React from "react";

const data = {
  leftContainer: [
    "Hidden charges",
    "User based pricing",
    "Agent based pricing",
    "Custom metrics pricing",
    "Ingestion based pricing",
    "High pricing for longer retention period",
  ],
  rightContainer: ["Grafana host", "Clickhouse host", "Persistent volumes"],
};

export const PricingInfo = () => {
  return (
    <div className="w-container mt-[200px] flex w-[95%] flex-col justify-between gap-5 lg:flex-row">
      <div className="mx-auto w-full rounded-[12px] bg-[#121815] p-[28px] lg:w-1/2 lg:rounded-[20px] lg:p-[44px]">
        <h3 className="text-[28px] leading-[32px] tracking-[-0.56px] text-[#888]  md:text-[44px] md:leading-[50px] md:tracking-tightest">
          With Incerto, You
          <span className="text-white"> don’t hav to worry</span> about
        </h3>
        <div className="mt-[40px] ">
          <InfoCard data={data.leftContainer} />
        </div>
      </div>
      <div className="mx-auto aspect-[3/4] w-full rounded-[12px] bg-[url('/images/pricing/card.webp')] bg-cover bg-right-bottom bg-no-repeat p-[28px] lg:w-1/2 lg:rounded-[20px] lg:p-[44px]">
        <h3 className="text-[28px] leading-[32px] tracking-[-0.56px] text-[#ffffff50]  md:text-[44px] md:leading-[50px] md:tracking-tightest">
          Only pay for the
          <span className="text-white"> compute</span> about
        </h3>
        <div className="mt-[40px] ">
          <InfoCard data={data.rightContainer} dark />
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({
  data,
  dark = false,
}: {
  data: string[];
  dark?: boolean;
}) => {
  return (
    <div className="relative w-full">
      <div
        className={
          !dark
            ? `absolute left-0 top-[50%] z-20  h-[88%] -translate-y-[50%] border-l   border-[#303934] md:h-[86%] lg:-translate-y-[52%]`
            : `absolute left-0 top-[50%] z-20  h-[71%] -translate-y-[50%] border-l   border-[#28AE97] md:h-[72%] lg:-translate-y-[52%]`
        }
      ></div>
      <div className=" inline-flex flex-col gap-[10px] pl-10 md:gap-[16px]">
        {data.map((name, i) => (
          <div key={i} className={"h-full "}>
            <div className="dot reset shadow-none h-[5px] w-[5px] rounded-full border-none bg-[#0F9] ring-0"></div>
            <div
              key={i}
              className={
                !dark
                  ? `rounded-[25px] border border-[#0F937C] p-[12.5px] md:rounded-[40px] md:p-[20px]`
                  : `rounded-[25px] bg-[#1E1E1E] p-[12.5px] md:rounded-[40px] md:p-[20px]`
              }
            >
              <p className="text-[12px] font-medium leading-[30px] tracking-[-0.24px] md:text-[18px] md:leading-[40px] md:tracking-[-0.36px]">
                {name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

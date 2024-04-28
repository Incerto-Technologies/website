import Image from "next/image";
import { Graph } from "../elements/icons/Graph";
import pricing from "@/data/pricing.json";

export const PricingComparison = () => {
  return (
    <div className="w-container mt-[150px] w-[95%]">
      <h3 className="text-center text-[24px] leading-[33px] tracking-[-0.48px] md:text-[34px] md:font-medium md:leading-[48px] md:tracking-[-0.68px]">
        Price Comparison for <br className="md:hidden" />
        <span className="font-bold text-[#0F9] md:font-bold">
          {" "}
          Longer Retention Period
        </span>
      </h3>
      <div className="mt-[32px] flex flex-col gap-5 md:rounded-[20px] lg:mt-[60px] lg:flex-row lg:gap-[85px]">
        <div className="w-full rounded-[12px] bg-[#121815] px-[28px] py-[42px] lg:w-1/2 lg:rounded-[20px] lg:px-[44px] lg:py-[67px]">
          <Image
            src={"/images/pricing/period_retention.svg"}
            alt="period retention"
            width={1080}
            height={1080}
            className="object-cover"
          />
        </div>
        <div className="mx-auto mt-[30px] w-[90%] lg:w-1/2">
          <h3 className="text-[24px] font-semibold leading-[50px] tracking-[-0.48px]">
            Cost of telemetry data retention
          </h3>
          <div className="lg:[40px] mt-[32px] flex flex-col gap-[30px]">
            {pricing.rentention.map((name) => (
              <div key={name} className="flex gap-[19px]">
                <div className="w-10">
                  <Graph />
                </div>
                <p className="text-[16px] leading-[28px] tracking-[0.32px]">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

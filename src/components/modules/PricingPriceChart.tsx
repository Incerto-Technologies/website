import Image from "next/image";

export const PricingPriceChart = () => {
  return (
    <div
      className={`bg-[url("/backgrounds/pricing.png")] bg-contain bg-no-repeat pt-[111px] md:bg-contain md:bg-left-top md:pt-[170px]`}
    >
      <div className="w-container flex w-[90%] justify-center">
        <Image
          src={"/images/pricing/hero_chart.svg"}
          alt="pricing_chart"
          height={1080}
          width={1080}
          className="rounded-xl bg-[#121815] object-cover p-5 lg:w-4/5 lg:rounded-[20px] lg:p-[50px]"
        />
      </div>
    </div>
  );
};

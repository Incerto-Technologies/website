import Image from "next/image";

export const PricingPriceChart = () => {
  return (
    <div
      className={`bg-[url("/backgrounds/pricing.svg")] bg-contain bg-no-repeat pt-[70px] md:bg-contain md:bg-left-top md:pt-[90px]`}
    >
      <div className="mx-auto flex w-[90%] max-w-[900px] justify-center">
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

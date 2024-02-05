import { Button } from "../elements/Button";

export const WhyUsHeader = () => {
  return (
    <div className="mb-[70px]">
      {/* <div className="lg:sticky lg:top-[10%] lg:h-[280px]"> */}
      <h3 className="px-5 text-center font-gotham text-2xl font-medium leading-8 tracking-[-0.48px] md:mx-auto md:w-4/5 md:text-[34px] md:leading-[48px] md:tracking-[-0.68px]">
        Observability Sold as SaaS is Just 1%. Unlock the{" "}
        <span className="features-title text-clip-all">Full Potential</span> of{" "}
        Your Dev Team with Incerto
      </h3>
      <p className="mx-auto mt-[32px] w-5/6 text-center text-sm font-medium leading-6 tracking-wide text-[#DEDEDE] md:w-3/6">
        Real-time observability with all the data, all the context, for all the
        teams
      </p>
      <div className="mt-[22px] flex w-full justify-center">
        <Button className="rounded-2xl px-[22px] py-[12px]">
          Discover How
        </Button>
      </div>
    </div>
  );
};
// todo team

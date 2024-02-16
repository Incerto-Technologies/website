import Link from "next/link";
export const WhyUsHeader = () => {
  return (
    <div className="mb-[70px]">
      {/* <div className="lg:sticky lg:top-[10%] lg:h-[280px]"> */}
      <h3 className="px-5 text-center font-gotham text-2xl font-medium leading-8 tracking-[-0.48px] text-white md:mx-auto md:w-4/5 md:text-[34px] md:leading-[48px] md:tracking-[-0.68px]">
        Observability Sold as SaaS is Just 1%. <br /> Unlock the{" "}
        <span className="features-title text-clip-all">Full Potential</span> of{" "}
        Your Dev Team with Incerto
      </h3>
      <p className="mx-auto mt-[22px] w-5/6 text-center text-[16px] font-semibold leading-7 tracking-[0.32px] text-[#DEDEDE] md:w-3/6">
        Real-time observability with all the data, all the context, for all the
        teams
      </p>
      <div className="mt-[22px] flex w-full justify-center">
        <Link
          href={"/blog/65ce75b91385ac9436fb5e07"}
          className="rounded-2xl bg-accent px-[22px] py-[12px] font-bold text-secondary"
        >
          Discover How
        </Link>
      </div>
    </div>
  );
};
// todo team

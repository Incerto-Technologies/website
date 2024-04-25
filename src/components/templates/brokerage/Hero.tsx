import Link from "next/link";

export const Hero = () => {
  return (
    <div className="home-background flex min-h-[50vh] w-full flex-col pt-[150px]  md:pt-[200px] lg:min-h-[550px]">
      {/* <div className="flex h-full items-center justify-center"> */}
      <div className="h-full w-full overflow-hidden">
        <section className="w-container flex flex-col items-center justify-center gap-[32px] px-6 md:w-5/6 md:gap-[34px]">
          <div className="mx-auto w-full lg:w-5/6 2xl:w-4/6">
            <h1 className="relative text-center font-gotham text-[30px] font-bold leading-[40px]  tracking-[-1.2px] md:text-[44px] md:font-medium md:leading-[50px] md:tracking-tightest">
              <span> Empowering Brokerage Excellence: </span> <br />
              <span className="animate-gradient-text font-[900]">
                Solving cruel niche problems
              </span>
            </h1>
          </div>
          <p className=" text-center font-medium leading-7 tracking-wide md:leading-[26px]">
            Build observability that adapts to your infra, not the other way
            around
          </p>
          <div className="flex flex-col gap-[10px] md:flex-row">
            <Link
              href={"#contact"}
              className="rounded-[14px] bg-accent px-[22px] py-[12px] font-bold tracking-[1%] text-secondary transition-all duration-200  ease-in  hover:bg-[#035749]"
            >
              <div className="flex items-center justify-center gap-2.5">
                <p> Contact us</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

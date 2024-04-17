import Link from "next/link";

export const PricingHero = () => {
  return (
    <section className="home-background  w-full pt-[200px]">
      <div className="w-container flex flex-col items-center justify-center gap-[32px] px-6 md:gap-[34px]">
        <div className="mx-auto w-full lg:w-5/6 2xl:w-4/6">
          <h1 className="relative text-center font-gotham text-[30px] font-bold leading-[40px]  tracking-[-1.2px] md:text-[44px] md:font-medium md:leading-[50px] md:tracking-tightest">
            Lorem Ipsum is simply dummy text of the
            <span className="text-[#0F9]"> printing and typesetting</span>
          </h1>
        </div>
        <div className="flex flex-col gap-[10px] md:flex-row">
          <Link
            href={"/#contact"}
            className="rounded-[14px] bg-accent px-[22px] py-[12px] font-bold tracking-[1%] text-secondary transition-all duration-200  ease-in  hover:bg-[#035749]"
          >
            <div className="flex items-center justify-center gap-2.5">
              <p>Contact us</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

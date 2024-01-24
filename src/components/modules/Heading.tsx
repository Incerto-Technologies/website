import { Button } from "@/components/elements/Button";
import { ArrowOutward } from "@/components/elements/icons/ArrowOutward";

export const Heading = () => {
  return (
    <section className="mx-auto mt-24 flex max-w-[680px] flex-col items-center justify-center gap-[32px] px-6 md:mt-36 md:w-5/6 md:gap-[34px]">
      <h1 className="text-center font-gotham text-[30px] font-medium leading-[42px] tracking-[-1.2px] md:text-[44px] md:font-bold md:leading-[60px] md:tracking-tightest">
        <span>End-to-end Open Source Observability That’s Custom-built on</span>
        <span className="head-title text-clip-all"> Your Infrastructure</span>
      </h1>

      <p className=" text-center font-medium leading-7 tracking-wide md:px-16 md:text-sm md:leading-[26px]">
        Build observability that adapts to your infra, not the other way around
      </p>

      {/* TODO: Get function details */}
      <Button className="font-[800]">
        <div className="flex items-center justify-center gap-2.5">
          <p>Get in touch</p>
          <ArrowOutward />
        </div>
      </Button>
    </section>
  );
};

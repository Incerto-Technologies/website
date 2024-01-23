import { Button } from "@/components/elements/Button";
import { ArrowOutward } from "@/components/elements/icons/ArrowOutward";

export const Heading = () => {
  return (
    <section className="mx-auto mt-24 flex max-w-[680px] flex-col items-center justify-center gap-[32px] px-6 md:mt-36 md:w-5/6 md:gap-[34px]">
      <h1 className="text-center font-gotham text-[30px] font-medium leading-[42px] tracking-[-1.2px] md:text-[44px] md:font-bold md:leading-[60px] md:tracking-tightest">
        <span>Unlocking Efficiency with Incerto’s Custom End-to-End</span>
        <span className="head-title text-clip-all">
          {" "}
          Observability Solutions
        </span>
      </h1>

      <p className=" text-center font-medium leading-7 tracking-wide md:px-16 md:text-sm md:leading-[26px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s.
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

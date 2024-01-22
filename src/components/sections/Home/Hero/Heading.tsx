import { ArrowOutward } from "@/components/icons/ArrowOutward";
import { Button } from "@/components/ui/buttons/Button";

export const Heading = () => {
  return (
    <div className="mx-auto flex min-h-[60vh] w-5/6 max-w-[680px] flex-col items-center justify-center gap-[34px]">
      <h1 className="text-center text-[30px] font-bold leading-10 tracking-[-1.2px] md:text-[44px] md:leading-[60px] md:tracking-tightest">
        <span>Unlocking Efficiency with Incerto’s Custom End-to-End</span>
        <span className="head-title"> Observability Solutions</span>
      </h1>

      <p className=" text-center text-sm font-medium leading-7 tracking-wide md:px-16 md:leading-[26px]">
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
    </div>
  );
};

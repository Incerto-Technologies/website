import { ArrowOutward } from "@/components/elements/icons/ArrowOutward";
import Link from "next/link";

export const GetInTouch = () => {
  return (
    <section className="pb-10 md:py-[126px]">
      <h1 className="mx-auto w-4/6 text-center text-[44px] font-semibold leading-[52px] tracking-tightest md:text-[64px] md:font-medium md:leading-[80px] md:tracking-[-1.28px]">
        What can you do with Incerto? We’re more interested in <br />{" "}
        <span className="text-accent-light"> what CAN’T you do. </span>
      </h1>
      <Link
        href={"#contact"}
        className="mx-auto mt-[36px] flex w-[160px] items-center justify-center gap-2.5 rounded-[14px] bg-[#0F937C] px-[18px] py-2.5 font-[600]  text-secondary md:mt-[42px]"
      >
        <p>Let&apos;s talk</p>
      </Link>
    </section>
  );
};

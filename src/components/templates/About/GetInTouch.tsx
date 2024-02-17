"use client";
import { useRouter } from "next/navigation";
export const GetInTouch = () => {
  const router = useRouter();
  return (
    <section className="pb-10 md:py-[126px]">
      <h1 className=" mx-auto pt-40 text-center text-[32px] font-semibold leading-[52px] tracking-tightest md:w-5/6 md:pt-0 md:text-[44px] md:font-medium md:leading-[50px] md:tracking-[-1px]">
        What can you do with Incerto? <br /> We’re more interested in <br />{" "}
        <span className="text-accent-light"> what CAN’T you do. </span>
      </h1>
      <button
        onClick={() => {
          router.push("/#contact");
        }}
        className="mx-auto mt-[36px] flex w-[160px] items-center justify-center gap-2.5 rounded-[14px] bg-[#0F937C] px-[18px] py-2.5 font-bold tracking-[1%]  text-secondary md:mt-[42px]"
      >
        <p>Let&apos;s talk</p>
      </button>
    </section>
  );
};

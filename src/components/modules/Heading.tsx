import { Button } from "@/components/elements/Button";
import { ArrowOutward } from "@/components/elements/icons/ArrowOutward";
import Image from "next/image";
import Link from "next/link";

export const Heading = () => {
  return (
    <section className="mt-24 flex flex-col items-end justify-between gap-[38px] md:mt-[60px] md:flex-row md:items-center ">
      <div className="flex w-full flex-col gap-[34px] px-6 md:pl-6">
        <h1 className="font-gotham text-[30px] font-medium leading-[42px] tracking-[-1.2px] md:text-[44px] md:font-medium md:leading-[60px] md:tracking-tightest">
          <span>
            End-to-End Open Source Observability <br /> Custom-built on
          </span>
          <span className="head-title text-clip-all"> Your Infrastructure</span>
        </h1>

        <p className="font-medium leading-7 tracking-wide md:leading-[26px]">
          Build observability that adapts to your infra, not the other way
          around
        </p>
        <Link
          href={"#contact"}
          className="w-[164px] rounded-[14px] bg-accent px-[18px] py-2.5 font-[600] text-secondary"
        >
          <div className="flex items-center justify-center gap-2.5">
            <p>Get in touch</p>
            <ArrowOutward />
          </div>
        </Link>
      </div>
      <div className="mt-[38px] flex w-full max-w-[400px] justify-end pl-6 md:pl-0">
        <Image
          src={"/backgrounds/dashboard.png"}
          alt="Dashboard"
          width={1080}
          height={1080}
          className="object-contain"
        />
      </div>
    </section>
  );
};

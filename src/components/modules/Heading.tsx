"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const heading = "End-to-End Open Source Observability  Custom-built on";
export const Heading = () => {
  return (
    <>
      {/* <section> */}
      <section className="w-container mt-[54px] flex flex-col items-center justify-center gap-[32px] px-6 md:w-5/6 md:gap-[34px]">
        <div className="flex justify-center">
          <Link href="https://www.producthunt.com/posts/incerto-observability?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-incerto&#0045;observability" target="_blank"><Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=477450&theme=dark" alt="Incerto&#0032;Observability - Open&#0032;source&#0032;observability&#0032;fully&#0032;custom&#0045;built&#0032;on&#0032;your&#0032;infra | Product Hunt" style={{ width: "250px", height: "54px" }} width="250" height="54" /></Link>
        </div>
        <div className="mx-auto w-full lg:w-5/6 2xl:w-4/6">
          <h1 className="relative text-center font-gotham text-[30px] font-bold leading-[40px]  tracking-[-1.2px] md:text-[44px] md:font-medium md:leading-[50px] md:tracking-tightest">
            {/* <TextAnimation text={heading} once className="" el="span" /> */}
            <span>{heading}</span>{" "}
            <span className="animate-gradient-text font-[900]">
              Your Infrastructure
            </span>
          </h1>
        </div>
        <p className=" text-center font-medium leading-7 tracking-wide md:leading-[26px]">
          Build observability that adapts to your infra, not the other way
          around
        </p>
        <div className="flex flex-col gap-[10px] md:flex-row">
          <Link
            href={"https://play.incerto.in"}
            className="rounded-[14px] border-[0.5px] border-[#888888] px-[22px] py-[12px] font-bold tracking-[1%] text-secondary transition-all ease-in hover:bg-[#EDEDED] hover:text-[#0a0a0a]"
          >
            <p> Explore Playground</p>
          </Link>
          <Link
            href={"#contact"}
            className="rounded-[14px] bg-accent px-[22px] py-[12px] font-bold tracking-[1%] text-secondary transition-all duration-200  ease-in  hover:bg-[#035749]"
          >
            <div className="flex items-center justify-center gap-2.5">
              <p> Book a Demo</p>
            </div>
          </Link>
        </div>
      </section>

      <div className="w-container mt-[38px] flex w-full justify-center px-[20px] md:mt-[71px] lg:px-[192px]">
        <Image
          src={"/backgrounds/homepage-bg.png"}
          // src={"/backgrounds/dashboard.webp"}
          alt="Dashboard"
          width={1080}
          height={1080}
          className="w-full object-cover"
        />
      </div>
    </>
  );
};
// {/* <Link
// href={"#contact"}
// className="rounded-[14px] bg-accent px-[18px] py-2.5 font-[600] text-secondary"
// >
// <div className="flex items-center justify-center gap-2.5">
//   <p>Get in touch</p>
//   {/* <ArrowOutward /> */}
// </div>
// </Link> */}

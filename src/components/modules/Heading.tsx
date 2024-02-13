import Image from "next/image";
import Link from "next/link";

export const Heading = () => {
  return (
    <>
      {/* <section> */}
      <section className="w-container mt-[54px] flex flex-col items-center justify-center gap-[32px] px-6 md:w-5/6 md:gap-[34px]">
        <div className="mx-auto w-full xl:w-5/6 3xl:w-4/6">
          <h1 className="text-center font-gotham text-[30px] font-medium leading-[42px] tracking-[-1.2px] md:text-[44px] md:font-medium md:leading-[60px] md:tracking-tightest">
            <span>
              End-to-End Open Source Observability <br /> Custom-built on
            </span>
            <span className="head-title text-clip-all">
              {" "}
              Your Infrastructure
            </span>
          </h1>
        </div>

        <p className=" text-center font-medium leading-7 tracking-wide md:leading-[26px]">
          Build observability that adapts to your infra, not the other way
          around
        </p>
        <div className="flex gap-[10px]">
          <Link
            href={"https://play.incerto.in"}
            className="rounded-[14px] border-[0.5px] border-[#888888] px-[22px] py-[12px] font-[900] text-secondary"
          >
            <p> Explore Playground</p>
          </Link>
          <Link
            href={"#contact"}
            className="rounded-[14px] bg-accent px-[22px] py-[12px] font-[900]  text-secondary"
          >
            <div className="flex items-center justify-center gap-2.5">
              <p> Book a Demo</p>
            </div>
          </Link>
        </div>
      </section>
      <div className="w-container mt-[38px] flex w-full justify-center px-[20px] md:mt-[71px] lg:px-[192px]">
        <Image
          src={"/backgrounds/dashboard.webp"}
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
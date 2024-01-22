import Image from "next/image";
import React from "react";

export const ShowCase = () => {
  return (
    <section className="w-container mt-40 ">
      <div className="flex h-full w-full items-end justify-between">
        <div className="w-3/6">
          <p className="h-full w-5/6 text-[27px] font-medium ">
            <span>We help business owners </span>
            <span className="text-accent-light">
              optimize operations, gain insights, and foster sustainable growth
            </span>
            <span>with customized observability solutions</span>
          </p>
        </div>
        <Image
          src={"/backgrounds/app.png"}
          alt="App Dashboard"
          width={680}
          height={980}
          className="h-full w-4/6 rounded-[50px] drop-shadow-3xl"
        />
      </div>
      <div className="mt-28 flex h-full w-full items-end justify-between">
        <Image
          src={"/backgrounds/app-1.png"}
          alt="App Dashboard"
          width={680}
          height={980}
          className="h-full w-4/6 rounded-[50px]  drop-shadow-3xl"
        />
        <div className="flex min-h-full w-3/6 items-end justify-end">
          <p className="h-full w-5/6 text-[27px] font-medium ">
            <span>We help business owners </span>
            <span className="text-accent-light">
              optimize operations, gain insights, and foster sustainable growth
            </span>
            <span> with customized observability solutions</span>
          </p>
        </div>
      </div>
    </section>
  );
};

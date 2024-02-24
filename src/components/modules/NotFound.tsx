import React from "react";
import { Footer } from "./Footer";
import Link from "next/link";

export const NotFound = ({
  text,
  btnText,
  redirectPath,
}: {
  text: string;
  btnText: string;
  redirectPath: string;
}) => {
  return (
    <div className="mt-[200px]">
      <h1 className="mx-auto w-5/6 text-center font-gotham text-[30px] font-bold leading-[40px]  tracking-[-1.2px] md:text-[44px] md:font-medium md:leading-[50px] md:tracking-tightest">
        {text}
      </h1>
      <div
        className="mt-2 flex min-h-[80vh] flex-col justify-end bg-contain pt-[200px]"
        style={{
          backgroundImage: `url("/backgrounds/404.png")`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link
          href={redirectPath}
          className="mx-auto w-[220px] rounded-[14px] bg-accent px-[22px] py-[12px] font-bold tracking-[1%]  text-secondary"
        >
          <div className="flex items-center justify-center gap-2.5">
            <p>{btnText}</p>
          </div>
        </Link>
        <Footer isBackground />
      </div>
    </div>
  );
};

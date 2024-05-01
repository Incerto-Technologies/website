"use client";

import { useRouter } from "next/navigation";

export const ContactRedirectBtn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/#contact");
      }}
      className="mx-auto mt-[36px] flex w-[160px] items-center justify-center gap-2.5 rounded-[14px] bg-[#0F937C] px-[18px] py-2.5 font-[600]  text-secondary transition-all duration-200 ease-in hover:bg-[#035749] md:mt-[42px]"
    >
      <p>Get in touch</p>
    </button>
  );
};

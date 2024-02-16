"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const GoPreviousPageButton = () => {
  const router = useRouter();
  const lenis = useLenis(() => {});
  useEffect(() => {
    lenis?.scrollTo(0);
  }, [lenis]);

  return (
    <button
      className="ml-[20px] mt-[40px] lg:ml-[80px] lg:mt-[64px]"
      onClick={() => {
        router.back();
      }}
    >
      <div className="flex items-center gap-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <mask
            id="mask0_409_8865"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="25"
          >
            <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_409_8865)">
            <path
              d="M7.82451 13.5L13.4245 19.1L11.9995 20.5L3.99951 12.5L11.9995 4.5L13.4245 5.9L7.82451 11.5H19.9995V13.5H7.82451Z"
              fill="black"
              fillOpacity="0.870588"
            />
          </g>
        </svg>
        <p className="text-[18px] font-semibold text-black">Back</p>
      </div>
    </button>
  );
};
export default GoPreviousPageButton;

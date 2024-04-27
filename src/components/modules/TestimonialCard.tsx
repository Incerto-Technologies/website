"use client";
import Image from "next/image";
import { ICard } from "./TestimonialCarousel";
import { Button } from "../elements/Button";
import Link from "next/link";

export const TestimonialCard = ({
  profile,
  message,
  name,
  position,
}: ICard) => {
  return (
    <div
      className={
        "relative flex h-fit w-[300px] flex-col justify-center rounded-[20px] bg-[#121815] px-8 py-9 backdrop-blur-[27px] md:h-fit md:w-[632px] md:px-16 md:py-10"
      }
    >
      <div>
        <p className="leading-[27px]">{message}</p>
      </div>

      <div className="mt-[38px] flex h-full w-full items-center justify-between">
        <div className="flex items-center gap-6">
          <Image
            src={profile}
            width={40}
            height={40}
            className="rounded-full"
            alt={name}
          />
          <div>
            <h4 className="text-[18px] font-bold">{name}</h4>
            <p className="text-[14px] text-[#929292]">{position}</p>
          </div>
        </div>
        <div className="hidden md:block">
          {/* <div className="hidden md:block"> */}
          <Link
            href={"/blog"}
            className="h-[46px] w-[121px] rounded-[10px] bg-accent px-[18px] py-2.5 font-bold"
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

"use client";
import Image from "next/image";
import { ICard } from "./TestimonialCarousel";
import { Button } from "../elements/Button";

export const TestimonialCard = ({
  profile,
  companyLogo,
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
          <Button className="h-[46px] w-[121px] rounded-[10px] py-0">
            <Image
              src={companyLogo}
              width={100}
              height={100}
              alt={position}
              className="object-contian h-full w-full py-1"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

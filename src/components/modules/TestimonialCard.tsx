"use client";
import Image from "next/image";
import { animated } from "react-spring";
import { ICard } from "./TestimonialCarousel";
import { Button } from "../elements/Button";
import { Quotes } from "../elements/icons/Quotes";

export const TestimonialCard = ({
  profile,
  companyLogo,
  currentCardId,
  id,
  message,
  name,
  position,
  getCurrentCardId,
}: ICard) => {
  return (
    <animated.div
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
        <div className="hidden">
          {/* <div className="hidden md:block"> */}
          <Button className="rounded-[10px] px-[18px] py-[10px]">
            <Image
              src={companyLogo}
              width={100}
              height={100}
              alt={name}
              className="object-contain"
            />
          </Button>
        </div>
      </div>
    </animated.div>
  );
};

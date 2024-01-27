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
        "relative flex h-fit w-[280px] flex-col justify-center rounded-3xl bg-[#121815] px-8 py-9 backdrop-blur-xl md:h-fit md:w-[580px] md:px-16 md:py-10"
      }
    >
      {/* <div className="absolute  left-[390px] top-[50%] z-40">
        <Quotes />
      </div> */}

      <div>
        <p className="text-xs leading-5">{message}</p>
      </div>

      <div className="mt-7 flex h-full w-full items-center justify-between">
        <div className="flex gap-4">
          <Image
            src={profile}
            width={25}
            height={25}
            alt={name}
            loading={"lazy"}
          />
          <div>
            <h4 className="text-sm font-bold">{name}</h4>
            <p className="text-[10px] leading-[12px] text-[#929292]">
              {position}
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <Button className="rounded-[10px]">
            <Image
              src={companyLogo}
              width={100}
              height={100}
              alt={name}
              loading={"lazy"}
            />
          </Button>
        </div>
      </div>
    </animated.div>
  );
};

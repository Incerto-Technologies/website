import Image from "next/image";
import { useInView } from "framer-motion";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  id: number;
  setCurrentViewSlide: Dispatch<SetStateAction<number>>;
};

export const WhyUsCard = ({
  title,
  description,
  image,
  id,
  setCurrentViewSlide,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) {
      setCurrentViewSlide(id - 1);
    } else {
      setCurrentViewSlide(id);
    }
  }, [isInView, setCurrentViewSlide, id]);

  return (
    <div
      className="top-sticky sticky flex h-[400px] w-full items-center justify-between rounded-[20px] bg-[#121815] px-[46px] py-[40px]"
      ref={ref}
    >
      <div className="w-full  lg:w-1/2">
        <h1 className="font-gotham font-medium leading-6 text-secondary text-opacity-85 md:text-2xl md:font-bold md:leading-[34px]">
          {title}
        </h1>
        <p className="mt-[22px] text-sm font-medium leading-[26px] tracking-wide text-[#888]">
          {description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className="flex h-full w-[300px] items-center justify-end overflow-hidden">
        <Image
          width={1200}
          data-id={id}
          className="h-full w-full rounded-3xl bg-center object-cover data-[id='4']:object-contain"
          height={1200}
          loading="lazy"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

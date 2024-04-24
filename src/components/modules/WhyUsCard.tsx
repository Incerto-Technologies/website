import Image from "next/image";
import { useInView } from "framer-motion";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  id: number;
  setCurrentViewSlide: Dispatch<SetStateAction<number>>;
  list?: boolean;
};

export const WhyUsCard = ({
  title,
  description,
  image,
  id,
  setCurrentViewSlide,
  list = false,
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
      style={{
        position: "sticky",
      }}
      className="top-sticky sticky flex h-[400px] w-full max-w-[980px] scale-90 items-center justify-between  rounded-[20px]  bg-[#121815] px-[63px] py-[68px]"
      ref={ref}
    >
      <div className="w-3/4">
        <h1 className="font-medium leading-6 text-[#EDEDED] text-opacity-85 md:text-[40px] md:font-bold md:leading-[44px]">
          {title}
        </h1>
        {list ? (
          <ul className="mt-[22px] list-disc text-[16px] font-bold leading-[26px] tracking-wide text-[#888]">
            {description.split("\n").map((line, index) => (
              <li className="ml-[17px]" key={index}>
                {line}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-[22px] text-[16px] font-medium leading-[26px] tracking-wide text-[#888]">
            {description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
      {/* <div className="flex h-full w-full items-center justify-end overflow-hidden p-4"> */}
      <div className="flex h-full w-[340px] items-center justify-end overflow-hidden">
        <Image
          width={1200}
          data-id={id}
          // className="h-full w-full rounded-3xl bg-center object-cover data-[id='4']:object-contain"
          className="rounded-3xl bg-center object-contain"
          height={1200}
          loading="lazy"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

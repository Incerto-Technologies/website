import React, { useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

import Image from "next/image";

import { v4 as uuid } from "uuid";
import { StickyProps } from "./WhyUsCard";

const sliderVariants = {
  incoming: {
    opacity: 0,
  },
  active: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const sliderTextVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  active: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const sliderTransition = {
  delay: 0,
};

const sliderTextTransition = {
  type: "linear",
  stiffness: 300,
};

export const WhyUsSlider = ({ Cards }: { Cards: { data: StickyProps[] } }) => {
  const [[imageCount, direction], setImageCount] = useState<
    [imageCount: number, direction: number]
  >([0, 0]);

  const activeImageIndex = wrap(0, Cards.data.length, imageCount);

  const swipeToImage = (swipeDirection: number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId: number) => {
    let changeDirection: number = 0;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  };

  return (
    <section className="mt-[60px] overflow-hidden lg:hidden">
      <div>
        <motion.div
          key={uuid()}
          custom={direction}
          // variants={sliderVariants}
          initial="incoming"
          animate="active"
          exit="exit"
          // transition={sliderTransition}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
        >
          <motion.div
            key={imageCount}
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTransition}
          >
            <div className="mx-auto h-[300px] w-[300px]  md:h-[600px] md:w-5/6">
              <Image
                src={Cards.data[activeImageIndex].image}
                alt={Cards.data[activeImageIndex].title}
                width={1200}
                height={1200}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            key={uuid()}
            custom={direction}
            variants={sliderTextVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTextTransition}
            className="mt-5 px-[42px]"
          >
            <h4 className="font-gotham text-[32px] font-bold leading-[38px] text-secondary text-opacity-85">
              {Cards.data[activeImageIndex].title}
            </h4>

            {typeof Cards.data[activeImageIndex].description == "object" ? (
              <div>
                <div className="mt-[22px]">
                  <h4 className="text-[20px] font-extrabold tracking-[2%] text-[#888888]">
                    Problems
                  </h4>
                  <ul className="list-disc text-[16px] font-bold leading-[26px] tracking-wide text-[#888]">
                    {/* @ts-ignore */}
                    {Cards.data[activeImageIndex].description.problems.map(
                      (line: string, index: number) => (
                        <li className="ml-[17px]" key={index}>
                          {line}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div className="mt-[22px]">
                  <h4 className="text-[20px] font-extrabold tracking-[2%] text-[#888888]">
                    Solution
                  </h4>
                  <ul className="list-disc text-[16px] font-bold leading-[26px] tracking-wide text-[#888]">
                    {/* @ts-ignore */}
                    {Cards.data[activeImageIndex].description.solution.map(
                      (line: string, index: number) => (
                        <li className="ml-[17px]" key={index}>
                          {line}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <p className="mt-3 text-sm leading-[18px] tracking-wide text-[#919191] md:text-[16px]">
                {Cards.data[activeImageIndex].description
                  .toString()
                  .split("\n")
                  .map((line: string, index: number) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-9 flex w-full items-center justify-center gap-4">
        {Cards.data.map((image: any) => (
          <div
            key={image.title}
            onClick={() => skipToImage(image.id)}
            className={
              "h-[12px] w-[12px] rounded-full " +
              (image.id === activeImageIndex ? "bg-[#5D5BF2]" : "bg-secondary")
            }
          ></div>
        ))}
      </div>
    </section>
  );
};

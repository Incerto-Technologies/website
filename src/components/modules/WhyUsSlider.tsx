import React, { useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

import Cards from "@/data/WhyUs.json";
import Image from "next/image";

import { v4 as uuid } from "uuid";

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
  delay: 0.2,
};

const sliderTextTransition = {
  type: "linear",
  delay: 0.3,
  stiffness: 300,
};

export const WhyUsSlider = () => {
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
            <div className="mx-auto h-[300px] w-[300px] md:h-3/6 md:w-5/6">
              <Image
                src={Cards.data[activeImageIndex].image}
                alt={Cards.data[activeImageIndex].title}
                width={300}
                height={250}
                loading="lazy"
                className="h-full w-full object-contain md:object-cover"
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
            <h4 className="font-gotham font-medium leading-6 text-secondary text-opacity-85">
              {Cards.data[activeImageIndex].title}
            </h4>

            <p className="mt-3 leading-[18px] tracking-wide text-[#919191]">
              {Cards.data[activeImageIndex].description}
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-9 flex w-full items-center justify-center gap-4">
        {Cards.data.map((image) => (
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

"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { config } from "react-spring";

import { ComponentType } from "react";
import dynamic from "next/dynamic";

// @ts-ignore
const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

// import Carousel from "react-spring-3d-carousel";

export type ICard = {
  name: string;
  message: string;
  companyLogo: string;
  position: string;
  id: number;
  profile: string;
  currentCardId: number;
  getCurrentCardId: () => number;
};

type Props = {
  cards: any;
  height: string;
  width: string;
  margin: string;
  offset: number;
  showArrows: boolean;
  setCurrentCardId: Dispatch<SetStateAction<number>>;
  goToSlide: number;
  setGoToSlide: Dispatch<SetStateAction<number>>;
};

export const TestimonialCarousel = (props: Props) => {
  const [offsetRadius, setOffsetRadius] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const table = props.cards.map((element: ICard, index: any) => {
    return {
      ...element,
      onClick: () => props.setGoToSlide(index),
    };
  });

  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      {/* @ts-ignore */}
      <Carousel
        slides={cards}
        goToSlide={props.goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.stiff}
      />
    </div>
  );
};

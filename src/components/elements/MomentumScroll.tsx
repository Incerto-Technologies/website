"use client";

// components/MomentumScroll.js
import { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
export const MomentumScroll = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        syncTouch: true,
        touchInertiaMultiplier: 1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

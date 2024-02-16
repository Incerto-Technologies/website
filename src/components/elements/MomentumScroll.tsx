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
        syncTouch: true,
        touchInertiaMultiplier: 30,
        wheelMultiplier: 1.5,
        smoothWheel: true,
        easing: function easeOutQuart(x: number): number {
          return 1 - Math.pow(1 - x, 4);
        },
      }}
    >
      {children}
    </ReactLenis>
  );
};

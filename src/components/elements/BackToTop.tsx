"use client";

import { Button } from "./Button";
import { ArrowUp } from "./icons/ArrowUp";

export const BackToTop = () => {
  return (
    <Button
      className="rounded-[20px] px-5 py-4 hover:outline-none focus:outline-none"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <div className="flex gap-2">
        <ArrowUp />
        <p className="font-bold">Back to top</p>
      </div>
    </Button>
  );
};

import React from "react";
import { FlowGraphDesktopBrokerage } from "./Desktop";
import { FlowChartAnimationMobile } from "./Mobile";

export const BrokerageAnimation = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="hidden md:block">
          <FlowGraphDesktopBrokerage />
        </div>
        <div className="px-5 md:hidden">
          <FlowChartAnimationMobile />
        </div>
      </div>
    </>
  );
};

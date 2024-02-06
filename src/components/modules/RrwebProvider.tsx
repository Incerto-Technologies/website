"use client";

import { useCallback, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};
export const RrwebProvider = ({ children }: Props) => {
  const rrweb = useCallback(() => {
    // write all you rrweb events here
  }, []);

  useEffect(() => {
    rrweb();
  }, [rrweb]);
  return <div>{children}</div>;
};

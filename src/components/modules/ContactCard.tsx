"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { Loader } from "../elements/Loader";

export const ContactCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  const isCalendlyLoaded = useCallback(() => {
    const stop = setInterval(() => {
      if (!containerRef.current) return;
      const div = containerRef.current.querySelector("div");
      if (div) {
        setLoading(false);
        clearInterval(stop);
      }
    }, 500);
  }, []);

  useEffect(() => {
    isCalendlyLoaded();
  }, [isCalendlyLoaded]);

  return (
    <>
      <section className="h-full w-full rounded-[20px] px-4">
        <div
          ref={containerRef}
          className="calendly-inline-widget absolute h-screen w-full lg:h-[90vh]"
          data-url={`https://calendly.com/shikhar-sharma-rz9m/incerto-s-observability-demo`}
        ></div>
        {loading && (
          <div className="shadow-2xl mx-auto my-10 flex h-full w-full items-center justify-center gap-3 rounded-3xl bg-accent shadow-sky-950 lg:h-[40vh] xl:w-1/2">
            <Loader />
            <h3>Loading calendly</h3>
          </div>
        )}
      </section>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
};

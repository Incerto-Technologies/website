"use client";

import Script from "next/script";

export const ContactCard = () => {
  return (
    <>
      <section className="h-full w-full rounded-[20px] px-4">
        <div
          className="calendly-inline-widget absolute h-screen w-full lg:h-[90vh]"
          data-url={`https://calendly.com/shikharsharma/incerto-s-observability-demo?month=2024-04`}
        ></div>
      </section>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
};

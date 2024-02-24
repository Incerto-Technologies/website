import React from "react";

export const Activity = ({ size }: { size: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7502 31.1663H21.2502C28.3335 31.1663 31.1668 28.333 31.1668 21.2497V12.7497C31.1668 5.66634 28.3335 2.83301 21.2502 2.83301H12.7502C5.66683 2.83301 2.8335 5.66634 2.8335 12.7497V21.2497C2.8335 28.333 5.66683 31.1663 12.7502 31.1663Z"
        stroke="#00FF99"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3843 20.5276L13.7559 16.1501C14.2376 15.5268 15.1301 15.4135 15.7535 15.8951L18.346 17.9351C18.9693 18.4168 19.8618 18.3035 20.3435 17.6943L23.616 13.4727"
        stroke="#00FF99"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

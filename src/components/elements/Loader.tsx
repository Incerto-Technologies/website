import React from "react";

export const Loader = () => {
  return (
    <svg
      width="16"
      className="animate-spin"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_7_2)">
        <path
          d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 7.99999C14.6667 4.3181 11.6819 1.33333 8.00004 1.33333C4.31814 1.33333 1.33337 4.3181 1.33337 7.99999C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z"
          stroke="white"
          stroke-opacity="0.5"
          stroke-width="0.8"
        />
        <path
          d="M14.6667 7.99999C14.6667 4.31851 11.6815 1.33333 8 1.33333"
          stroke="white"
          stroke-width="0.8"
        />
      </g>
      <defs>
        <clipPath id="clip0_7_2">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const RightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
    >
      <circle cx="25" cy="25" r="25" fill="#121815" />
      <mask
        id="mask0_548_7225"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x="13"
        y="13"
        width="24"
        height="24"
      >
        <rect
          x="37"
          y="37"
          width="24"
          height="24"
          transform="rotate(-180 37 37)"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_548_7225)">
        <path
          d="M21 15L31 25L21 35L19.225 33.225L27.45 25L19.225 16.775L21 15Z"
          fill="#DEDEDE"
        />
      </g>
    </svg>
  );
};

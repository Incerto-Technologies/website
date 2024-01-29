export const LeftArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
    >
      <circle
        cx="25"
        cy="25"
        r="25"
        transform="rotate(180 25 25)"
        fill="#121815"
      />
      <mask
        id="mask0_548_7230"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x="13"
        y="13"
        width="24"
        height="24"
      >
        <rect x="13" y="13" width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_548_7230)">
        <path
          d="M29 35L19 25L29 15L30.775 16.775L22.55 25L30.775 33.225L29 35Z"
          fill="#DEDEDE"
        />
      </g>
    </svg>
  );
};

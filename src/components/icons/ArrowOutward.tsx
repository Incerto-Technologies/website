type Props = {
  fillColor?: string;
};

export const ArrowOutward = ({ fillColor = "#EDEDED" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M1.9 13.5L0.5 12.1L10.1 2.5H1.5V0.5H13.5V12.5H11.5V3.9L1.9 13.5Z"
        fill={fillColor}
      />
    </svg>
  );
};

"use client";
import { classNameMerge } from "@/utils/classNameMerge";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  className,
  children,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  // classes for the button
  const classes = {
    primary: {
      sm: `rounded-xl bg-accent px-[12px] py-1.5 text-sm font-semibold text-secondary`,
      md: `rounded-[14px] bg-accent px-[18px] py-2.5 font-bold text-secondary`,
      lg: `rounded-2xl bg-accent px-[22px] py-3 font-bold text-secondary`,
    },
    secondary: {
      sm: `rounded-xl border border-[#888] px-[12px] py-1.5 font-semibold text-accent-light text-sm`,
      md: `rounded-[14px] border border-[#888] px-[18px] py-2.5 font-bold text-accent-light`,
      lg: `rounded-2xl border border-[#888] px-[22px] py-3 font-bold text-accent-light text-lg `,
    },
  };

  return (
    <button
      className={
        // check if className is passed and merge it with the default classes
        className
          ? classNameMerge(classes[variant][size], className)
          : classes[variant][size]
      }
      {...props}
    >
      {children}
    </button>
  );
};

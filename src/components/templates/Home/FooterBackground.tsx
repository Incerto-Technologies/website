import { classNameMerge } from "@/utils/classNameMerge";

type FooterBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
};
export const FooterBackground = ({
  children,
  className,
}: FooterBackgroundProps) => {
  return (
    <div
      className={
        !className
          ? ` bg-[url("/backgrounds/mobile-footer.webp")] bg-cover bg-top bg-no-repeat md:bg-[url("/backgrounds/desktop-footer.webp")] md:bg-cover md:bg-top`
          : classNameMerge(
              ` bg-[url("/backgrounds/mobile-footer.webp")] bg-cover bg-top bg-no-repeat md:bg-[url("/backgrounds/desktop-footer.webp")] md:bg-cover md:bg-top`,
              className,
            )
      }
    >
      {children}
    </div>
  );
};

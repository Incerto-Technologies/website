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
          ? `bg-[url("/backgrounds/mobile-footer.png")] bg-cover bg-top bg-no-repeat md:bg-[url("/backgrounds/desktop-footer.png")] md:bg-cover md:bg-top`
          : classNameMerge(
              `bg-[url("/backgrounds/mobile-footer.png")] bg-cover bg-top bg-no-repeat md:bg-[url("/backgrounds/desktop-footer.png")] md:bg-cover md:bg-top`,
              className,
            )
      }
    >
      {children}
    </div>
  );
};

type FooterBackgroundProps = {
  children?: React.ReactNode;
};
export const FooterBackground = ({ children }: FooterBackgroundProps) => {
  return (
    <div
      className={`bg-[url("/backgrounds/mobile-footer.png")] bg-cover bg-top bg-no-repeat md:bg-[url("/backgrounds/desktop-footer.png")] md:bg-cover md:bg-top`}
    >
      {children}
    </div>
  );
};

import { Navbar } from "../modules/Navbar";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="bg-primary font-manrope">{children}</main>
    </>
  );
};

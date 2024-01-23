import { Navbar } from "../modules/Navbar";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="font-manrope">{children}</main>
    </>
  );
};

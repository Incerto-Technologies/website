import type { Metadata } from "next";
import "./globals.css";
import { gotham, manrope } from "./fonts";

export const metadata: Metadata = {
  title: "Incerto",
  description: `Unlocking Efficiency with Incerto’s Custom End-to-End Observability Solutions`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${gotham.variable}`}>
        {children}
      </body>
    </html>
  );
}

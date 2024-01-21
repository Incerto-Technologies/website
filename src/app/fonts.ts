import { Manrope } from "next/font/google";
import localFont from "next/font/local";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const gotham = localFont({
  src: [
    {
      path: "./../../public/fonts/Gotham-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../public/fonts/Gotham-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../../public/fonts/Gotham-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../public/fonts/Gotham-Light.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
});

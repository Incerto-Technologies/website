import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "./fonts";
import { ModalProvider } from "@/components/elements/ModalProvider";

export const metadata: Metadata = {
  title: "Incerto",
  description: `Unlocking Efficiency with Incerto’s Custom End-to-End Observability Solutions`,
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/logos/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/logos/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/logos/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/logos/favicon.ico",
    },
  ],
  openGraph: {
    images: [
      {
        url: "/meta/incerto.png",
        width: 1080,
        height: 1080,
        alt: "Dashboard",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}`}>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}

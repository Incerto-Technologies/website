import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "./fonts";
import { ModalProvider } from "@/components/elements/ModalProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MomentumScroll } from "@/components/elements/MomentumScroll";
export const metadata: Metadata = {
  metadataBase: new URL("https://incerto.in"),
  title: "Incerto: Customised Observability On Your Infrastructure.",
  description: `Incerto builds customised open-source observability which covers all the compliances and requirements. Solution is so streamlined and flexible that expanding it becomes child play.`,
  publisher: "Incerto",
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
    description: `Incerto builds customised open-source observability which covers all the compliances and requirements. Solution is so streamlined and flexible that expanding it becomes child play.`,
    title: "Incerto: Customised Observability On Your Infrastructure.",
    type: "website",
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
        <MomentumScroll>
          <ModalProvider>{children}</ModalProvider>
        </MomentumScroll>
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_GTAG!} />
      </body>
    </html>
  );
}

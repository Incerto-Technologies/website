// import { DefaultLayout } from "@/components/layouts/DefaultLayout";
// import { Hero } from "@/components/templates/Homepage/Hero";

import dynamic from "next/dynamic";

const Hero = dynamic(
  () => import("@/components/templates/Homepage/Hero").then((mod) => mod.Hero),
  {
    ssr: false,
  },
);

const DefaultLayout = dynamic(
  () =>
    import("@/components/layouts/DefaultLayout").then(
      (mod) => mod.DefaultLayout,
    ),
  {
    ssr: false,
  },
);

const Footer = dynamic(
  () => import("@/components/modules/Footer").then((mod) => mod.Footer),
  {
    ssr: false,
  },
);

const Contact = dynamic(
  () =>
    import("@/components/templates/Homepage/Contact").then(
      (mod) => mod.Contact,
    ),
  {
    ssr: false,
  },
);
// import { Footer } from "@/components/modules/Footer";
// import { Contact } from "@/components/templates/Homepage/Contact";

const Features = dynamic(
  () =>
    import("@/components/templates/Homepage/Features").then(
      (mod) => mod.Features,
    ),
  {
    ssr: false,
  },
);

// const WhyUs = dynamic(() =>
//   import("@/components/templates/Homepage/WhyUs").then((mod) => mod.WhyUs),
// );

const FlowGraph = dynamic(
  () =>
    import("@/components/templates/Homepage/FlowGraph").then(
      (mod) => mod.FlowGraph,
    ),
  {
    ssr: false,
  },
);

// const Testimonial = dynamic(() =>
//   import("@/components/templates/Homepage/Testimonial").then(
//     (mod) => mod.Testimonial,
//   ),
// );

const FooterBackground = dynamic(
  () =>
    import("@/components/templates/Homepage/FooterBackground").then(
      (mod) => mod.FooterBackground,
    ),
  {
    ssr: false,
  },
);

// import { Features } from "@/components/templates/Homepage/Features";
// import { FlowGraph } from "@/components/templates/Homepage/FlowGraph";
// import { FooterBackground } from "@/components/templates/Homepage/FooterBackground";

import { Testimonial } from "@/components/templates/Homepage/Testimonial";
import { WhyUs } from "@/components/templates/Homepage/WhyUs";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <Features />
      <WhyUs />
      <FlowGraph />
      <Testimonial />
      <FooterBackground>
        <Contact />
        <Footer isBackground />
      </FooterBackground>
    </DefaultLayout>
  );
}

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
const Features = dynamic(
  () =>
    import("@/components/templates/Homepage/Features").then(
      (mod) => mod.Features,
    ),
  {
    ssr: false,
  },
);

const FlowGraph = dynamic(
  () =>
    import("@/components/templates/Homepage/FlowGraph").then(
      (mod) => mod.FlowGraph,
    ),
  {
    ssr: false,
  },
);

const FooterBackground = dynamic(
  () =>
    import("@/components/templates/Homepage/FooterBackground").then(
      (mod) => mod.FooterBackground,
    ),
  {
    ssr: false,
  },
);
import { Testimonial } from "@/components/templates/Homepage/Testimonial";
import { WhyUs } from "@/components/templates/Homepage/WhyUs";
import { Modal } from "@/components/elements/Modal";

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
      <Modal />
    </DefaultLayout>
  );
}

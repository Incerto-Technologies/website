import dynamic from "next/dynamic";

const Hero = dynamic(
  () => import("@/components/templates/Home/Hero").then((mod) => mod.Hero),
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
    import("@/components/templates/Home/Contact").then(
      (mod) => mod.Contact,
    ),
  {
    ssr: false,
  },
);
const Features = dynamic(
  () =>
    import("@/components/templates/Home/Features").then(
      (mod) => mod.Features,
    ),
  {
    ssr: false,
  },
);

const FlowGraph = dynamic(
  () =>
    import("@/components/templates/Home/FlowGraph").then(
      (mod) => mod.FlowGraph,
    ),
  {
    ssr: false,
  },
);

const FooterBackground = dynamic(
  () =>
    import("@/components/templates/Home/FooterBackground").then(
      (mod) => mod.FooterBackground,
    ),
  {
    ssr: false,
  },
);
import { Testimonial } from "@/components/templates/Home/Testimonial";
import { WhyUs } from "@/components/templates/Home/WhyUs";
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

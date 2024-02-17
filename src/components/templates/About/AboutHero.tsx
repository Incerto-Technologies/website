import { OurVision } from "./OurVision";

export const AboutHero = () => {
  return (
    <section className="home-background">
      <div className="px-[25px] pt-[200px] md:px-0">
        <h1 className="text-center text-[30px] font-bold leading-10 tracking-[-1.2px] md:text-[60px] md:leading-[64px] md:tracking-tightest">
          Meet Our Team
        </h1>
        <p className="mt-[32px] text-center font-medium leading-7 tracking-[0.34px] md:mt-[34px] md:text-sm md:leading-7 md:tracking-wide">
          Together, we strive to deliver the best solutions for our clients,
          while also supporting each other’s growth and development.
        </p>
      </div>
      <OurVision />
    </section>
  );
};

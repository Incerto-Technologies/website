import { BackToTop } from "@/components/elements/BackToTop";
import { ContactCard } from "@/components/modules/ContactCard";

export const Contact = () => {
  return (
    <section className="w-container mt-36 md:mt-52" id="contact">
      <div>
        <h3 className="text-center font-gotham text-[34px] font-medium leading-[48px] tracking-[-0.68px]">
          Find issues before your users do!
        </h3>
        <p className="mx-auto mt-6 w-5/6 text-center text-sm font-medium leading-7 tracking-wide">
          Drop your mail below and relax! We will contact you back as soon as
          possible
        </p>
      </div>
      <div className="mx-auto mt-14 w-5/6 max-w-[423px]">
        <ContactCard />
      </div>
      <div className="mx-auto hidden w-full justify-end md:mt-28 md:flex md:pr-8 lg:pr-14">
        <BackToTop />
      </div>
    </section>
  );
};

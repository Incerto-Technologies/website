import { BackToTop } from "@/components/elements/BackToTop";
import { ContactCard } from "@/components/modules/ContactCard";

export const Contact = () => {
  return (
    <section className="pt-36 md:mt-52 md:pt-24" id="contact">
      <div>
        <h3 className="px-3 text-center font-gotham text-[34px] font-medium leading-[48px] tracking-[-0.68px]">
          {/* Find issues before your users do! */}
          Find Issues Before Your Users Do!
        </h3>
      </div>
      <div className="mx-auto mt-14">
        <ContactCard />
      </div>
      <div className="mx-auto hidden w-full justify-end md:mt-0 md:flex md:pr-8 lg:pr-14">
        <BackToTop />
      </div>
    </section>
  );
};

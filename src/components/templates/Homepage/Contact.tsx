import { BackToTop } from "@/components/elements/BackToTop";
import { ContactCard } from "@/components/modules/ContactCard";

export const Contact = () => {
  return (
    <section className="w-container mt-36 md:mt-52">
      <div>
        <h3 className="text-center font-gotham text-2xl font-medium leading-8 tracking-[-0.48px]">
          <span className="features-title text-clip-all">
            Ready to Transform?
          </span>{" "}
          Contact Incerto for Custom Solutions
        </h3>
        <p className="mx-auto mt-8 w-5/6 text-center text-sm font-medium leading-6 tracking-wide text-[#959595]">
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

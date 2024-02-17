"use client";
import { productData } from "@/data/product";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import { FooterBackground } from "../Home/FooterBackground";
import { Footer } from "@/components/modules/Footer";
import { useRouter } from "next/navigation";
export const OtherProducts = () => {
  const router = useRouter();
  return (
    <section className="mt-[200px] bg-accent pt-[50px] md:pt-[70px]">
      <h3 className="text-center text-[24px] font-semibold tracking-tighter md:text-[34px] md:leading-[50px] md:tracking-[0.68px]">
        {productData.otherProducts.title.split("/")[0]}
        <span className="text-accent-light">
          {productData.otherProducts.title.split("/")[1]}
        </span>
      </h3>
      <div className="mt-[50px] flex flex-col flex-wrap items-center justify-center gap-[20.5px] md:flex-row md:gap-[22px] md:px-5">
        {productData.otherProducts.products.map(
          ({ image, title, description, icon }) => (
            <div
              key={uuid()}
              className="w-full max-w-[300px] rounded-[14.5px] bg-[#002D25] md:rounded-[12px]"
            >
              <div className="mt-[35px] flex items-center gap-[10px] px-[36px] md:mt-[30px] md:gap-[8px] md:px-[30px]">
                <div className="hidden h-full md:block">
                  {icon({ size: "34" })}
                </div>{" "}
                <div className="h-full md:hidden">{icon({ size: "18" })}</div>{" "}
                <h4 className="text-[22px] font-semibold leading-6 tracking-[-0.44px] md:text-[18px] md:leading-5 md:tracking-[-0.36]">
                  {title}
                </h4>
              </div>
              <p className="mt-[24px] px-[36px] font-medium leading-7 tracking-[-0.32px] md:mt-[20px] md:px-[30px] md:text-sm md:leading-[22px] md:tracking-[-0.28px]">
                {description}
              </p>
              <div className="mt-[35px] flex h-full w-full items-center justify-end md:mt-[30px]">
                <div className="w-5/6">
                  <Image
                    src={image}
                    alt={title}
                    width={720}
                    height={720}
                    className="rounded-br-[14.5px] md:rounded-br-[12px]"
                  />
                </div>
              </div>
            </div>
          ),
        )}
      </div>
      <div className="mt-[100px] md:mt-[200px]">
        <FooterBackground>
          <div className="pt-[150px] md:pt-[126px]">
            <h2 className="text-center text-[44px] font-medium leading-[52px] tracking-[-0.88px] md:text-[64px] md:leading-[80px] md:tracking-[-1.28px]">
              Become a part <br />
              of the
              <span className="text-accent-light"> future with us!</span>
            </h2>
            <button
              onClick={() => {
                router.push("/#contact");
              }}
              className="mx-auto mt-[36px] flex w-[160px] items-center justify-center gap-2.5 rounded-[14px] bg-[#0F937C] px-[18px] py-2.5 font-[600]  text-secondary md:mt-[42px]"
            >
              <p>Get in touch</p>
            </button>
          </div>
          <Footer isBackground />
        </FooterBackground>
      </div>
    </section>
  );
};

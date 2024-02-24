import { classNameMerge } from "@/utils/classNameMerge";
import Image from "next/image";
import Link from "next/link";
import { LinkedIn } from "../elements/icons/LinkedIn";
import { BackToTop } from "../elements/BackToTop";
import { navRoutes } from "@/data/navRoutes";

import { v4 as uuid } from "uuid";

type FooterProps = {
  isBackground?: boolean;
  isTextWhite?: boolean;
};

export const Footer = ({
  isBackground = false,
  isTextWhite = false,
}: FooterProps) => {
  return (
    <div
      className={classNameMerge(
        "h-full w-full ",
        isBackground ? "footer-bg-shade" : "",
      )}
      style={{
        color: isTextWhite ? "white" : "#959595",
      }}
    >
      <div
        className="w-full bg-bottom bg-no-repeat object-contain md:bg-cover"
        style={{
          backgroundImage: `url("/backgrounds/footer-vector.png")`,
        }}
      >
        <div className="lg:w-container px-5 pb-5 pt-20 md:pb-28 lg:px-20">
          <div className="hidden md:block">
            <Image
              src={"/logos/logo100x100.webp"}
              alt="Incerto logo"
              width={100}
              height={100}
            />
          </div>
          <div className="mt-8 flex w-full flex-col items-start gap-14 md:flex-row md:items-center md:justify-between lg:gap-48">
            <div className="w-full">
              <h4
                className={classNameMerge(
                  "text-lg font-bold md:text-2xl ",
                  isTextWhite ? "text-[#0A0A0A]" : "text-accent-light",
                )}
              >
                Incerto Technologies Pvt Ltd
              </h4>
              <div>
                <Link
                  href={"mailto:support@incerto.com"}
                  className="hidden text-sm font-medium leading-6 tracking-wide text-[#959595] md:block"
                >
                  support@incerto.com
                </Link>
                <Link
                  href={"tel:+919591653409"}
                  className="mt-2 hidden text-sm font-medium leading-6 tracking-wide text-[#959595] md:block"
                >
                  +91 95916 53409
                </Link>
              </div>
              <p className="font-medium leading-6 tracking-wide text-[#959595] md:hidden">
                Incerto Technologies is a ....
              </p>
            </div>
            <div className="mt-0 flex w-full flex-col md:flex-row md:gap-10 lg:gap-28 xl:gap-40">
              <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-16">
                {navRoutes.slice(0, -1).map(({ name, path }) => (
                  <Link href={path} key={uuid()}>
                    {name}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex w-full justify-end md:hidden">
                <BackToTop />
              </div>
              <Link
                className="hidden h-11 w-11 items-center justify-center rounded-full bg-secondary bg-opacity-10 md:flex"
                href={"https://www.linkedin.com/company/incerto-technologies/"}
              >
                <LinkedIn />
              </Link>
            </div>
          </div>

          {/* Mobile Line */}
          <div className="mt-6 h-[1px] w-full bg-[#929292] md:hidden"></div>

          <div className="mt-4 flex items-center justify-between md:hidden">
            <Link
              className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary bg-opacity-10 "
              href={"https://www.linkedin.com/company/incerto-technologies/"}
            >
              <LinkedIn />
            </Link>
            <div className="flex flex-col">
              <Link
                href={"mailto:support@incerto.com"}
                className="mt-2 text-sm font-medium leading-6 tracking-wide text-[#959595]"
              >
                support@incerto.com
              </Link>
              <Link
                href={"tel:+919591653409"}
                className="mt-2 text-sm font-medium leading-6 tracking-wide text-[#959595]"
              >
                +91 95916 53409
              </Link>
            </div>
          </div>

          <div className="mt-5 md:hidden">
            <p className="text-center font-sans text-xs">
              Incerto Technologies. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

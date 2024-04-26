"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "../elements/icons/ArrowRight";
import { navRoutes, productNavRoutes } from "@/data/navRoutes";
import { v4 as uuid } from "uuid";
import { AnimatePresence, motion } from "framer-motion";
import { classNameMerge } from "@/utils/classNameMerge";
import { useRouter } from "next/navigation";
export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();
  const [productNavbarOpen, setProductNavbarOpen] = useState(false);
  const [productNavbarOpenMobile, setProductNavbarOpenMobile] = useState(false);

  return (
    <>
      <header
        className={classNameMerge(
          "fixed top-0 z-[150] w-full bg-primary font-manrope transition-opacity ease-linear  lg:bg-opacity-30 lg:backdrop-blur-[50px]",
          !navbarOpen ? " bg-opacity-30 backdrop-blur-2xl" : "",
        )}
      >
        <div className="w-container flex items-center justify-between  px-5 py-8 md:px-20 lg:py-0">
          {/* Logo */}
          <Link href="/">
            <Image
              src={"/logos/logo100x100.webp"}
              alt="incerto logo"
              width={"112"}
              height={"17"}
            />
          </Link>

          {/* Mobile Nav Bar */}
          <nav className="flex h-full w-full flex-col items-end justify-end lg:hidden">
            {/* Hamburger */}
            <button
              className="relative z-[120]"
              role="button"
              aria-label="Toggle menu"
              onClick={() => {
                // Toggle the navbarOpen state
                setNavbarOpen(!navbarOpen);
              }}
            >
              <div className="absolute left-1/2 top-1/2 block w-5   -translate-x-1/2  -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className={
                    !navbarOpen
                      ? "absolute -mt-1 block h-0.5 w-5 transform bg-current transition duration-200 ease-out"
                      : "absolute top-1 -mt-1 block h-0.5 w-5 rotate-45 transform bg-current transition duration-200 ease-in"
                  }
                ></span>
                <span
                  aria-hidden="true"
                  className={
                    !navbarOpen
                      ? "absolute block h-0.5 w-5 transform bg-current transition duration-100 ease-out"
                      : "absolute block h-0.5 w-0 transform bg-current transition duration-100 ease-in"
                  }
                ></span>
                <span
                  aria-hidden="true"
                  className={
                    !navbarOpen
                      ? "absolute mt-1 block h-0.5 w-5 transform bg-current  transition duration-200 ease-out"
                      : "absolute -top-1 mt-1 block h-0.5 w-5 -rotate-45  transform bg-current transition duration-200 ease-in"
                  }
                ></span>
              </div>
            </button>

            {/* Navbar Dropdown */}
            <AnimatePresence>
              {navbarOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -1000, transform: "ease-in" }}
                  animate={{ opacity: 1, x: 0, transform: "ease-in" }}
                  exit={{ opacity: 0, x: -1000, transform: "ease-in" }}
                  className={
                    "absolute right-0 top-[75px] z-[100] flex h-[500px] w-full flex-col gap-3 bg-black bg-opacity-20 px-5 pt-10 backdrop-blur-[50px]"
                  }
                >
                  <div
                    onClick={() => {
                      setProductNavbarOpenMobile(!productNavbarOpenMobile);
                    }}
                    className="flex w-full items-center justify-between font-gotham leading-8 tracking-[-0.48px]"
                  >
                    <p>{productNavRoutes.name}</p> <ArrowRight />
                  </div>
                  <AnimatePresence>
                    {productNavbarOpenMobile && (
                      <div className="mt-[30px] flex flex-col gap-[28px]">
                        {productNavRoutes.options.map(
                          ({ name, path, icon }) => (
                            <motion.div
                              initial={{ x: -400 }}
                              animate={{ x: 0, transitionBehavior: "ease-in" }}
                              key={uuid()}
                              onClick={() => {
                                setNavbarOpen(false);
                              }}
                            >
                              <Link
                                className="flex w-full items-center gap-[8px]"
                                href={path}
                              >
                                {icon({ size: "24px" })}
                                <p className="leading-[20px] tracking-[0.32px]">
                                  {name}
                                </p>
                              </Link>
                            </motion.div>
                          ),
                        )}
                      </div>
                    )}
                  </AnimatePresence>
                  <ul>
                    <div className="my-[18px] h-[1px] w-full bg-[#373737]"></div>
                    {navRoutes.map(({ path, name }) => (
                      <li key={uuid()}>
                        <Link
                          className="flex items-center justify-between font-gotham leading-8 tracking-[-0.48px]"
                          href={path}
                        >
                          {name}
                          <ArrowRight />
                        </Link>
                        <div className="my-[18px] h-[1px] w-full bg-[#373737]"></div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* Desktop Nav Bar */}
          <nav className="relative hidden h-full lg:inline-flex">
            <div
              className="mr-[60px] inline h-full cursor-pointer items-center justify-center py-[21px]"
              onMouseEnter={() => {
                setProductNavbarOpen(true);
              }}
              onMouseLeave={() => {
                setProductNavbarOpen(false);
              }}
              onClick={() => {
                setProductNavbarOpen(!productNavbarOpen);
              }}
            >
              {productNavRoutes.name}
            </div>

            <ul className="flex h-full items-center gap-x-[60px] py-2.5">
              {navRoutes.slice(0, -1).map(({ path, name }, index) => (
                <li key={index + name}>
                  <Link href={path}>{name}</Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    router.push("/#contact");
                  }}
                  className="flex items-center justify-between gap-2.5 rounded-[14px] border border-[#DEDEDE] px-[18px] py-2.5 transition ease-in hover:border-[#888888]  hover:bg-[#ededed] hover:text-[#0a0a0a]"
                >
                  <p className="font-medium">Get in touch</p>
                  {/* <ArrowOutwardGreen /> */}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="hidden md:block">
        {productNavbarOpen && (
          <motion.div
            className="fixed top-[68px] z-[99] w-full max-w-[640px] bg-transparent transition-all"
            key="product-nav"
            onMouseEnter={() => {
              setProductNavbarOpen(true);
            }}
            onMouseLeave={() => {
              setProductNavbarOpen(false);
            }}
            style={{
              right: "calc( 40% - 250px )",
            }}
          >
            <div className="mt-[10px] rounded-2xl  bg-white bg-opacity-10 px-[45px] py-[28px] backdrop-blur-[50px] transition-all">
              <h5 className="text-[24px]">Products</h5>
              <div className="mt-[28px] flex flex-wrap gap-5">
                {productNavRoutes.options.map(
                  ({ description, name, path, icon }) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-1/4 min-w-[170px] rounded-lg border border-white border-opacity-20 bg-white bg-opacity-20 py-[28px] pl-[16px]"
                      key={name}
                    >
                      <Link href={path}>
                        {icon({ size: "34" })}
                        <h3 className="mt-[8px] w-full font-semibold leading-5 tracking-tight text-white">
                          {name}
                        </h3>
                        <p className="mt-[6px] text-xs font-medium tracking-tight text-[#c9c9c9]">
                          {description}
                        </p>
                      </Link>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

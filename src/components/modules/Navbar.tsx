"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowOutwardGreen } from "../elements/icons/ArrowOutwardGreen";
import { ArrowRight } from "../elements/icons/ArrowRight";
import { navRoutes } from "@/data/navRoutes";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import { classNameMerge } from "@/utils/classNameMerge";

const sliderVariants = {
  incoming: {
    y: -600,
    z: 100,
  },
  active: (navbarOpen: boolean) => ({
    opacity: 1,
    y: navbarOpen ? 0 : -600,
    z: 100,
  }),
  exit: {
    z: 100,
    y: -600,
  },
};

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header
      className={classNameMerge(
        "fixed top-0 z-[150] w-full bg-black font-manrope transition-opacity ease-linear  lg:h-20 lg:bg-opacity-30 lg:backdrop-blur-2xl",
        !navbarOpen ? " bg-opacity-30 backdrop-blur-2xl" : "",
      )}
    >
      <div className="w-container flex items-center justify-between  px-5 py-4 md:px-20">
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
          <motion.div
            initial="incoming"
            animate="active"
            exit="exit"
            custom={navbarOpen}
            variants={sliderVariants}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={
              "absolute right-0 top-11 z-[100] flex h-[500px] w-full flex-col gap-3 bg-black bg-opacity-20 px-5 pt-10 backdrop-blur-[50px]"
            }
          >
            {navbarOpen && (
              <ul>
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
            )}
          </motion.div>
        </nav>

        {/* Desktop Nav Bar */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-[60px]">
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Blogs</Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="flex items-center justify-between gap-2.5 rounded-[14px] border border-[#888]  px-[18px] py-2.5"
              >
                <p className="font-medium text-accent-light">Get in touch</p>
                <ArrowOutwardGreen />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

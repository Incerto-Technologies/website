"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 h-20 w-full bg-primary bg-opacity-30 font-manrope backdrop-blur-3xl">
      <div className="w-container flex items-center justify-between px-5 py-4 md:px-20">
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
        <nav className="flex h-full w-full items-center justify-end lg:hidden">
          {/* Hamburger */}
          <button
            className="relative"
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
          <ul
            className={
              !navbarOpen
                ? "hidden"
                : "absolute right-0 top-10 flex w-full flex-col gap-3 px-5"
            }
          >
            <li>
              <Link href="/about">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center justify-between gap-2.5 rounded-[14px] border border-[#888]  px-[18px] py-2.5"
              >
                <p className="font-medium text-accent-light">Get in touch</p>
                <Image
                  src={"/icons/arrow_outward.svg"}
                  alt="Go to link arrow"
                  width={10}
                  height={10}
                />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Nav Bar */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-[60px]">
            <li>
              <Link href="/about">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center justify-between gap-2.5 rounded-[14px] border border-[#888]  px-[18px] py-2.5"
              >
                <p className="font-medium text-accent-light">Get in touch</p>
                <Image
                  src={"/icons/arrow_outward.svg"}
                  alt="Go to link arrow"
                  width={10}
                  height={10}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

"use client";
import Link from "next/link";
import React from "react";
type Props = {
  children: React.ReactNode;
  title: string;
};
export const BlogLink = ({ children, title }: Props) => {
  console.log(
    encodeURIComponent(
      title.replace(/\s+/g, "-").replace(/\./g, "").toLowerCase(),
    ),
  );

  return (
    <Link
      href={
        window.location.pathname.includes("edit")
          ? "/blog/edit/" +
            encodeURIComponent(
              title.replace(/\s+/g, "-").replace(/\./g, "").toLowerCase(),
            )
          : "/blog/" +
            encodeURIComponent(
              title.replace(/\s+/g, "-").replace(/\./g, "").toLowerCase(),
            )
      }
    >
      {children}
    </Link>
  );
};

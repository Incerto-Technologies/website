"use client";
import Link from "next/link";
import React from "react";
type Props = {
  children: React.ReactNode;
  title: string;
};
export const BlogLink = ({ children, title }: Props) => {
  const titleUrl = title
    .replace(/[^a-zA-Z0-9.]+/g, "-")
    .replace(/\./g, "")
    .toLowerCase();
  const encodedUrl = encodeURIComponent(titleUrl);

  return (
    <Link
      href={
        window.location.pathname.includes("edit")
          ? "/blog/edit/" + encodedUrl
          : "/blog/" + encodedUrl
      }
    >
      {children}
    </Link>
  );
};

"use client";
import Link from "next/link";
import React from "react";
type Props = {
  children: React.ReactNode;
  id: string;
};
export const BlogLink = ({ children, id }: Props) => {
  return (
    <Link
      href={
        window.location.pathname.includes("edit")
          ? "/blog/edit/" + id
          : "/blog/" + id
      }
    >
      {children}
    </Link>
  );
};

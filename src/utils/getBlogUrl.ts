"use client";
export const getBlogUrl = (id: string) => {
  if (window.location.pathname.includes("edit")) return "/edit/" + id;
  return "/blog/" + id;
};

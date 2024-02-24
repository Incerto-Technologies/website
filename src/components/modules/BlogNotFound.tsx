"use client";
import React from "react";
import { NotFound } from "./NotFound";
import { DefaultLayout } from "../layouts/DefaultLayout";

export const BlogNotFound = () => {
  return (
    <DefaultLayout>
      <NotFound
        text="404 | Blog Not Found"
        btnText="Return to blogpage"
        redirectPath="/blog"
      />
    </DefaultLayout>
  );
};

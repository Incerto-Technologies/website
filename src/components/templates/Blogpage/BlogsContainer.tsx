"use client";
import { BlogCard } from "@/components/modules/BlogCard";
import { BlogCardMobile } from "@/components/modules/BlogCardMobile";
import { Blog } from "@/data/Blogs";
import { useAppDispatch, useTypedSelector } from "@/hooks/store";
import { setConstBlog } from "@/store/slice/blog.slice";
import { useEffect } from "react";

type Props = {
  blogs: Blog[];
};
export const BlogsContainer = ({ blogs }: Props) => {
  const dispatch = useAppDispatch();

  const Blogs = useTypedSelector((state) => state.blog.Blogs);

  useEffect(() => {
    if (blogs.length === 0) return;
    dispatch(setConstBlog(blogs));
  }, [dispatch, blogs]);

  if (blogs.length === 0) return null;

  return (
    <div className="w-container mx-auto flex justify-center md:mt-[84px]">
      <div className="md:hidden">
        {Blogs.map((blog, index) => (
          <BlogCardMobile {...blog} key={index + blog.title} />
        ))}
      </div>
      <div className="hidden grid-cols-1 gap-10 md:grid md:w-4/6 md:grid-cols-2 lg:grid-cols-3">
        {Blogs.map((blog, index) => (
          <BlogCard {...blog} key={index} />
        ))}
      </div>
    </div>
  );
};

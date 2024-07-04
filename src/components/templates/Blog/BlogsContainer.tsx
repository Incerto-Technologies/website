"use client";
import { BlogCard } from "@/components/modules/BlogCard";
import { BlogCardMobile } from "@/components/modules/BlogCardMobile";
import { useAppDispatch, useTypedSelector } from "@/hooks/store";
import { setConstBlog } from "@/store/slice/blog.slice";
import { Blog } from "@/types/Blogs";
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
      <div className="hidden grid-cols-1 gap-x-[60px] gap-y-[80px] md:grid md:grid-cols-3">
        {Blogs.map((blog, index) => (
          <BlogCard {...blog} key={index} />
        ))}
      </div>
    </div>
  );
};

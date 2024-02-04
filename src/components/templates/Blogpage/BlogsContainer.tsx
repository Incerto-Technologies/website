"use client";
import { BlogCard } from "@/components/modules/BlogCard";
import { useTypedSelector } from "@/hooks/store";

export const BlogsContainer = () => {
  const { Blogs } = useTypedSelector((state) => state.blog);

  return (
    // <div className="gird grid-cols-3 gap-10">
    <div className="w-container mx-auto mt-[84px] flex justify-center">
      {/* // <div className="gird grid-cols-3 gap-10"> */}
      <div className="flex w-4/5 flex-wrap justify-center gap-10">
        {Blogs.map((blog, index) => (
          <BlogCard {...blog} key={index} />
        ))}
      </div>
    </div>
  );
};

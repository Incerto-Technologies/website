"use client";
import { Button } from "@/components/elements/Button";
import { SearchIcon } from "@/components/elements/icons/SearchIcon";
import { Tags } from "@/data/Blogs";
import { useAppDispatch, useTypedSelector } from "@/hooks/store";
import { setSearch, setSearchTag } from "@/store/slice/blog.slice";
import { classNameMerge } from "@/utils/classNameMerge";
import { setServers } from "dns";

export const BlogHero = () => {
  const dispatch = useAppDispatch();
  const { Blogs, search, searchTag } = useTypedSelector((state) => state.blog);
  return (
    <section className="home-background flex h-full flex-col justify-center">
      <div className="w-container align-center mt-20 w-5/6 md:pt-44">
        <h1 className="text-center text-3xl font-bold">
          Discover cool updates and blogs here
        </h1>
        <p className="mx-auto mt-10 px-3 text-center text-sm leading-6 tracking-[2%] md:w-4/6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
      </div>
      <div className="w-container mt-[137px] flex gap-[30px]">
        <div className="flex w-3/5 items-center gap-2 rounded-2xl bg-[#232323] px-5 py-2.5">
          <SearchIcon />
          <input
            className="w-full bg-[#232323] text-lg font-medium placeholder:text-white focus:outline-none"
            placeholder="Search"
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
        </div>
        <div className="hidden gap-[24px] md:flex">
          {Tags.map((tag, index) => (
            <Button
              className={classNameMerge(
                "rounded-2xl capitalize",
                searchTag == tag ? "bg-accent" : "bg-transperant",
              )}
              onClick={() => {
                // @ts-ignore
                dispatch(setSearchTag(tag));
              }}
              key={`${tag}--${index}`}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

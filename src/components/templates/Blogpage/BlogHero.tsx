"use client";
import { Button } from "@/components/elements/Button";
import { SearchIcon } from "@/components/elements/icons/SearchIcon";
import { useAppDispatch, useTypedSelector } from "@/hooks/store";
import { setSearch, setSearchTag } from "@/store/slice/blog.slice";
import { Tags } from "@/types/Blogs";
import { classNameMerge } from "@/utils/classNameMerge";

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
      <div className="w-container mt-[72px] flex justify-between gap-[18px] px-[20px] md:mt-[137px]  md:justify-start md:gap-[30px] md:px-0">
        <div className="flex items-center gap-2 rounded-2xl bg-[#232323] px-5 py-2.5 md:w-3/5">
          <SearchIcon />
          <input
            className="w-full bg-[#232323] text-lg font-medium placeholder:text-white focus:outline-none"
            placeholder="Search"
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
        </div>
        <div className="md:hidden">
          <Button className="flex h-[44px] w-[44px] justify-center rounded-[16px] border-none bg-[#232323]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_701_742"
                style={{
                  maskType: "alpha",
                }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_701_742)">
                <path
                  d="M10 18V16H14V18H10ZM6 13V11H18V13H6ZM3 8V6H21V8H3Z"
                  fill="#EEDEDE"
                  fillOpacity="0.866667"
                />
              </g>
            </svg>
          </Button>
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

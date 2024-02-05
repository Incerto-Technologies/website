import { Blog } from "@/data/Blogs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../elements/Button";

export const BlogCard = ({
  image,
  title,
  description,
  categories,
  author,
  markdown,
}: Blog) => {
  return (
    <div className="h-full  min-h-[372px] w-full max-w-[350px]">
      {/* <div className="h-[372px] w-[33%] max-w-[350px]"> */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[30px]">
        <Image
          src={image}
          alt={"Hi"}
          height={370}
          width={300}
          className="object-contian h-full w-full"
        />
        <div className="absolute bottom-5 left-1/2 flex w-full max-w-[170px] -translate-x-1/2 items-center justify-center gap-2.5 rounded-[20px] bg-white px-4 py-2.5">
          <Image
            src={"/logos/avatar/kunalsingh.webp"}
            alt={author}
            width={30}
            height={30}
            className="h-[30px] w-[30px] rounded-full object-cover"
          />
          <p className="w-full font-semibold text-primary">{author}</p>
        </div>
      </div>
      <div className="mt-11 bg-red-400">
        <h3 className="font-blod text-xl leading-8 tracking-wide">{title}</h3>
        <p className="mt-4 h-[72px] font-medium text-[#9E9E9E]">
          {description}
        </p>
        <div className="flex h-full justify-end   ">
          <Button
            // href={`/blog/${markdown.replace(".md", "")}`}
            className="my-2 mt-[34px] w-full rounded-[20px] border border-accent-light bg-transparent px-5 py-[14px]"
          >
            <p className="text-center">Read More</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

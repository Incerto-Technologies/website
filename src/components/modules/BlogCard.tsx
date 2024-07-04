import Image from "next/image";
import { Blog } from "@/types/Blogs";
import { BlogLink } from "./BlogLink";

let bigCardIndex = 0

export const BlogCard = ({ image, title, author, date }: Blog & { index: number }) => {

  const inputDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long", // Full month name
    day: "numeric",
  };
  const formatedDate = inputDate.toLocaleDateString("en-US", options);
  return (
    <div className={`mx-auto h-full rounded-xl bg-gray-900 p-2 w-full max-w-[350px]`}>
      <BlogLink title={title}>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
          <Image
            src={image}
            alt={title}
            height={370}
            width={300}
            className="object-contian h-full w-full"
          />
        </div>
        <div className="bg- red-400 mt-5 flex flex-col md:justify-between md:gap-0">
          <h3
            className="font-blod text-xl leading-7 tracking-wide text-wrap"
            style={{
              fontWeight: 600,
            }}
          >
            {title.length > 60 ? `${title.slice(0, 60)}...` : title}
          </h3>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <Image src={author.profile || ""} className="rounded-md" alt="author_profile" width={24} height={24} />
              <p>{author.userName}</p>
            </div>
            <div className="flex bg-gray-700 rounded-full px-2 items-center h-full">
              <p>{formatedDate}</p>
            </div>
          </div>
          <div className="w-full rounded-md border mt-6 border-accent-light bg-transparent px-5 py-[14px] text-accent-light transition-all duration-200 ease-in hover:bg-accent-light hover:text-[#0a0a0a]">
            <p className="text-center font-bold tracking-[1%]">Read More</p>
          </div>
        </div>
      </BlogLink>
    </div>
  );
};

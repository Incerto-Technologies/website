import Image from "next/image";
import { Blog } from "@/types/Blogs";
import { BlogLink } from "./BlogLink";

export const BlogCard = ({ image, title, description, author, _id }: Blog) => {
  return (
    <div className="mx-auto p-2  h-full min-h-[372px] w-4/5 max-w-[350px] md:w-full rounded-xl border border-gray-700 bg-gray-900 overflow-hidden">
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
        <div className="mt-6 flex flex-col gap-6 md: md:justify-between md:gap-0">
          <h3
            className="font-blod text-xl leading-8 tracking-wide"
            style={{
              fontWeight: 600,
            }}
          >
            {title}
          </h3>
        </div>
      </BlogLink>
    </div>
  );
};

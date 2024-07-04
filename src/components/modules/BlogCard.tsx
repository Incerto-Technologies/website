import Image from "next/image";
import { Blog } from "@/types/Blogs";
import { BlogLink } from "./BlogLink";

export const BlogCard = ({ image, title, description, author, _id }: Blog) => {
  return (
    <div className="mx-auto  h-full min-h-[372px] w-4/5 max-w-[350px] md:w-full">
      <BlogLink title={title}>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[30px]">
          <Image
            src={image}
            alt={title}
            height={370}
            width={300}
            className="object-contian h-full w-full"
          />
        </div>
        <div className="bg- red-400 mt-11 flex flex-col gap-6 md:h-[110px] md:justify-between md:gap-0">
          <h3
            className="font-blod text-xl leading-8 tracking-wide"
            style={{
              fontWeight: 600,
            }}
          >
            {title.length > 60 ? `${title.slice(0, 60)}...` : title}
          </h3>
          <p className="font-medium leading-6 text-[#9E9E9E] mt-2">
            {description.length > 123
              ? `${description.slice(0, 123)}...`
              : description}
          </p>
        </div>
      </BlogLink>
    </div>
  );
};

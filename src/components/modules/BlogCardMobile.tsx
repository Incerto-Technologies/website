import { Blog } from "@/types/Blogs";
import Image from "next/image";
import { BlogLink } from "./BlogLink";

interface Props extends Blog {
  _id: string;
}

export const BlogCardMobile = ({ image, title, author, _id }: Props) => {
  return (
    <BlogLink id={_id}>
      <div className="mt-16 px-[20px]">
        <Image
          className="rounded-[30px]"
          src={image}
          alt={title}
          width={350}
          height={200}
        />
        <h3 className="mt-[24px] font-bold leading-6">{title}</h3>
        <div className="mt-4 flex items-center gap-2.5">
          <p className="text-sm capitalize">{author.userName}</p>
        </div>
      </div>
    </BlogLink>
  );
};

import { Blog } from "@/types/Blogs";
import Image from "next/image";
import { BlogLink } from "./BlogLink";

interface Props extends Blog {
  _id: string;
}

export const BlogCardMobile = ({ image, title, author, _id }: Props) => {
  return (
    <BlogLink title={title}>
      <div className="mt-16 mx-[20px] rounded-xl border border-gray-700 bg-gray-900 p-[12px]">
        <Image
          className="rounded-md w-full h-full object-cover"
          src={image}
          alt={title}
          width={350}
          height={200}

        />
        <h3 className="mt-[24px] font-bold leading-6">{title}</h3>
        <div className="mt-4 flex items-center gap-2.5">
          <Image className="rounded-xl" src={author.profile || ""} alt="author_profile" width={25} height={25} />
          <p className="text-sm capitalize">{author.userName}</p>
        </div>
      </div>
    </BlogLink>
  );
};

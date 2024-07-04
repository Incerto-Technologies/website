import { Blog } from "@/types/Blogs";
import Image from "next/image";
import { BlogLink } from "./BlogLink";

interface Props extends Blog {
  _id: string;
}

export const BlogCardMobile = ({ image, date, title, author }: Props) => {

  const inputDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long", // Full month name
    day: "numeric",
  };
  const formatedDate = inputDate.toLocaleDateString("en-US", options);
  return (
    <BlogLink title={title}>
      <div className="mt-8 rounded-xl bg-gray-900 p-3 mx-[20px]">
        <Image
          className="rounded-md"
          src={image}
          alt={title}
          width={350}
          height={200}
        />
        <h3 className="mt-[24px] font-bold leading-6">{title}</h3>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Image src={author.profile || ""} className="rounded-md" alt="author_profile" width={24} height={24} />
            <p>{author.userName}</p>
          </div>
          <div className="flex bg-gray-700 rounded-full px-2 items-center h-full">
            <p>{formatedDate}</p>
          </div>
        </div>
      </div>
    </BlogLink>
  );
};

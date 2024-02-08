import { Blog } from "@/types/Blogs";
import { getBlogUrl } from "@/utils/getBlogUrl";
import Image from "next/image";
import Link from "next/link";

interface Props extends Blog {
  _id: string;
}

export const BlogCardMobile = ({
  image,
  title,
  author,
  profile,
  _id,
}: Props) => {
  return (
    <Link href={getBlogUrl(_id)}>
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
          <Image
            src={profile || "/logos/avatar/adityapushpati.webp"}
            alt={author}
            width={24}
            className="rounded-full"
            height={24}
          />
          <p className="text-sm capitalize">{author}</p>
        </div>
      </div>
    </Link>
  );
};

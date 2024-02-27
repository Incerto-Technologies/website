import { NoteIcon } from "../elements/icons/NoteIcon";
import { Folder } from "../elements/icons/Folder";
import { Calendar } from "../elements/icons/Calendar";
import { Blog } from "@/types/Blogs";
import Image from "next/image";
export const BlogHeader = (props: { blog: Blog }) => {
  const { title, author, tags, date } = props.blog;
  const inputDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long", // Full month name
    day: "numeric",
  };

  console.log(author.description, tags, date, title, "author");

  const formatedDate = inputDate.toLocaleDateString("en-US", options);

  return (
    <div className="mb-[50px] mt-5 text-black md:mb-[100px] md:mt-[40px]">
      <h1 className="text-[22px] font-bold leading-8 tracking-tighter md:text-[32px] md:leading-[46px] md:tracking-[-0.64px]">
        {`${title}`}
      </h1>
      <div className="mt-[22px] hidden gap-8 md:flex">
        <div className="flex items-center gap-1.5">
          <NoteIcon size="24" />
          <p className="text-[18px] font-medium text-[#5D5D5D]">
            {author.userName}
          </p>
        </div>
        <div className="flex items-center  gap-1.5">
          <Folder size="24" />
          <p className="text-[18px] font-medium capitalize text-[#5D5D5D]">
            {/* {tags.join(" - ")} */}
            {tags[0]}
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar size="24" />
          <p className="text-[18px] font-medium text-[#5D5D5D]">
            {formatedDate}
          </p>
        </div>
      </div>
      <div className="mt-[22px] text-sm font-semibold md:hidden">
        <div className="flex h-full items-center gap-1.5">
          <Folder size="18" />
          <p className="text-[18px] font-medium capitalize text-[#5D5D5D]">
            {/* {tags.join(" - ")} */}
            {tags[0]}
          </p>
        </div>
        <div className="mt-2.5 flex h-full gap-5">
          <div className="flex items-center gap-1.5">
            <NoteIcon size="20" />
            <p className="text-[18px] font-medium text-[#5D5D5D]">
              {author.userName}
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size="20" />
            <p className="text-[18px] font-medium text-[#5D5D5D]">
              {formatedDate}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-[30px] flex flex-col gap-[25px]  md:flex-row md:items-center">
          <div className="w-full max-w-[250px]">
            <Image
              src={author.profile || ""}
              width={1080}
              height={1080}
              className="w-[250px] rounded-[20px] object-cover"
              alt={author.userName}
            />
          </div>
          <div className="border-l-[3px] border-solid border-[#0F937C] pl-[15px]">
            <h1 className="text-[22px] font-bold leading-9 text-[#0F937C] md:text-[32px]">
              {author.userName}
            </h1>
            <p className="mb-1 font-semibold">Authored by</p>
            <p>{author.description || "hi"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
//<AboutAuthor />
//  {author.profile && author.description ? (
//          <>
//            <AboutAuthor author={author} />
//          </>
//        ) : (
//          <></>
//        )}

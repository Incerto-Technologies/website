import Link from "next/link";

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-[30px]">
      <h1 className="text-2xl font-bold">Not Found</h1>
      <Link
        className="flex items-center justify-between gap-2.5 rounded-[14px] border border-[#DEDEDE]  px-[18px] py-2.5"
        href={"/"}
      >
        Back to Home
      </Link>
    </div>
  );
}

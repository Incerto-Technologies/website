import { teamMembers } from "@/data/teamMembers";
import Image from "next/image";
import { v4 as uuid } from "uuid";
export const Team = () => {
  return (
    <section className="w-container mt-[150px] px-5 md:mt-[200px]">
      <h3 className="text-center text-[24px] font-medium  tracking-tighter text-[#EDEDED] md:text-[34px] md:leading-[58px] md:tracking-[-0.68px]">
        People powering incerto
      </h3>
      <div className="flex w-full items-center justify-center">
        <div className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-[110px] md:gap-y-28">
          {teamMembers.map((member) => (
            <div key={uuid()} className="w-full max-w-[550px] md:flex md:gap-7">
              <Image
                src={member.image}
                alt={member.name}
                width={1080}
                height={1080}
                className="rounded-[20px] md:aspect-square md:w-[250px]"
              />
              <div>
                <h4 className="mt-5 text-[18px] font-semibold tracking-tight text-[#EDEDED]">
                  {member.name}
                </h4>
                <p className="mt-[6px] text-sm tracking-[-0.28px] text-[#888] md:mt-1">
                  {member.position}
                </p>
                <p className="mt-6 hidden md:block">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

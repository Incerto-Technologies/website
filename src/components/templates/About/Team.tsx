import { teamMembers } from "@/data/teamMembers";
import Image from "next/image";
import { v4 as uuid } from "uuid";
export const Team = () => {
  return (
    <section className="w-container mt-[150px] px-5 md:mt-[200px]">
      <h3 className="text-center text-[24px] font-medium  tracking-tighter text-[#EDEDED] md:text-[34px] md:leading-[58px] md:tracking-[-0.68px]">
        People powering incerto
      </h3>
      <div className="mt-10 flex flex-col gap-x-[110px] gap-y-28 md:flex-row md:flex-wrap">
        {teamMembers.map((member) => (
          <div key={uuid()} className="w-full max-w-[508px] md:flex">
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
              <p className="mt-[6px] text-sm tracking-[-0.28px] text-[#888]">
                {member.position}
              </p>
              <p className="hidden md:block">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

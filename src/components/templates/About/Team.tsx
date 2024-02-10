import { teamMembers } from "@/data/teamMembers";
import Image from "next/image";
import { v4 as uuid } from "uuid";
export const Team = () => {
  return (
    <section className="w-container mt-[150px] px-5 md:mt-[200px]">
      <h3 className="text-center text-[24px] font-medium  tracking-tighter text-[#EDEDED] md:text-[34px] md:leading-[58px] md:tracking-[-0.68px]">
        Real tech. Real people
      </h3>
      <div className="mt-10 flex w-full items-center justify-center md:mt-[71px]">
        <div className="mx-auto grid grid-cols-1 md:gap-x-[50px] md:gap-y-28 lg:gap-x-[110px] xl:grid-cols-2">
          {teamMembers.map((member) => (
            <div key={uuid()} className="w-full max-w-[550px] md:flex md:gap-7">
              <Image
                src={member.image}
                alt={member.name}
                width={1080}
                height={1080}
                className="rounded-[20px] object-cover md:aspect-square md:h-[250px] md:w-[250px]"
              />
              {/* <div
                className="aspect-video w-[80vw] rounded-[20px] bg-contain bg-top bg-no-repeat md:aspect-square md:w-[250px] md:bg-cover"
                style={{
                  backgroundImage: `url("${member.image}")`,
                }}
              ></div> */}
              {/* <div className="md:items-cente r md:flex md:h-full md:flex-col md:justify-center"> */}
              <div>
                <h4 className="text-[18px] font-semibold tracking-tight text-[#EDEDED]">
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

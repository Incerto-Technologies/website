import { LinkedIn } from "@/components/elements/icons/LinkedIn";
import { teamMembers } from "@/data/teamMembers";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuid } from "uuid";
export const Team = () => {
  return (
    <section className="w-container mt-[150px] px-5 md:mt-[200px]">
      <h3 className="text-center text-[24px] font-medium  tracking-tighter text-[#EDEDED] md:text-[34px] md:leading-[58px] md:tracking-[-0.68px]">
        Real tech. Real people
      </h3>
      <div className="mt-10 flex w-full items-center justify-center md:mt-[71px]">
        <div className="mx-auto grid grid-cols-1 md:gap-x-[50px] md:gap-y-28 md:px-2 lg:grid-cols-3 lg:gap-x-[110px]">
          {teamMembers.map((member) => (
            <div
              key={uuid()}
              className="flex w-full max-w-[550px] flex-col md:flex md:gap-7 "
            >
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
                <div className="flex items-center gap-1.5">
                  <h4 className="text-[18px] font-semibold tracking-tight text-[#EDEDED]">
                    {member.name}
                  </h4>
                  <p>-</p>
                  <p className="font-semibold tracking-tight text-accent">
                    {member.position}
                  </p>

                  <Link
                    className="ml-0 flex h-5 w-5 items-center justify-center rounded-full"
                    href={member.linkedIn}
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_548_7116)">
                        <path
                          d="M0 1.74291C0 1.23785 0.168924 0.821184 0.506757 0.492912C0.84459 0.164624 1.28379 0.000488281 1.82432 0.000488281C2.35522 0.000488281 2.78474 0.162094 3.11293 0.485336C3.45077 0.818669 3.61969 1.253 3.61969 1.78836C3.61969 2.27321 3.4556 2.67724 3.12741 3.00048C2.78958 3.33382 2.34556 3.50048 1.79537 3.50048H1.78089C1.25 3.50048 0.820468 3.33382 0.492278 3.00048C0.164088 2.66715 0 2.24795 0 1.74291ZM0.188224 15.0005V4.87927H3.40251V15.0005H0.188224ZM5.1834 15.0005H8.39768V9.34896C8.39768 8.99541 8.4363 8.72269 8.51351 8.53078C8.64864 8.18734 8.85376 7.89693 9.12886 7.65957C9.40396 7.42219 9.74903 7.30351 10.1641 7.30351C11.2452 7.30351 11.7857 8.06613 11.7857 9.59138V15.0005H15V9.19744C15 7.70249 14.6622 6.56866 13.9865 5.79593C13.3108 5.02321 12.418 4.63684 11.3079 4.63684C10.0627 4.63684 9.09266 5.19745 8.39768 6.31866V6.34896H8.3832L8.39768 6.31866V4.87927H5.1834C5.2027 5.2025 5.21236 6.20754 5.21236 7.89442C5.21236 9.58128 5.2027 11.95 5.1834 15.0005Z"
                          fill="#00FF99"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_548_7116">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_548_7116)">
                        <path
                          d="M0 1.74291C0 1.23785 0.168924 0.821184 0.506757 0.492912C0.84459 0.164624 1.28379 0.000488281 1.82432 0.000488281C2.35522 0.000488281 2.78474 0.162094 3.11293 0.485336C3.45077 0.818669 3.61969 1.253 3.61969 1.78836C3.61969 2.27321 3.4556 2.67724 3.12741 3.00048C2.78958 3.33382 2.34556 3.50048 1.79537 3.50048H1.78089C1.25 3.50048 0.820468 3.33382 0.492278 3.00048C0.164088 2.66715 0 2.24795 0 1.74291ZM0.188224 15.0005V4.87927H3.40251V15.0005H0.188224ZM5.1834 15.0005H8.39768V9.34896C8.39768 8.99541 8.4363 8.72269 8.51351 8.53078C8.64864 8.18734 8.85376 7.89693 9.12886 7.65957C9.40396 7.42219 9.74903 7.30351 10.1641 7.30351C11.2452 7.30351 11.7857 8.06613 11.7857 9.59138V15.0005H15V9.19744C15 7.70249 14.6622 6.56866 13.9865 5.79593C13.3108 5.02321 12.418 4.63684 11.3079 4.63684C10.0627 4.63684 9.09266 5.19745 8.39768 6.31866V6.34896H8.3832L8.39768 6.31866V4.87927H5.1834C5.2027 5.2025 5.21236 6.20754 5.21236 7.89442C5.21236 9.58128 5.2027 11.95 5.1834 15.0005Z"
                          fill="#00FF99"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_548_7116">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
                {/* <p className="mt-[6px] text-sm tracking-[-0.28px] text-[#888] md:mt-1">
                  {member.position}
                </p> */}

                <p className="mt-[6px] text-sm tracking-[-0.28px] text-[#888] md:mt-1">
                  {`Past experience - ${member.experience}`}
                </p>
                <p className="mt-[6px] text-sm tracking-[-0.28px] text-[#888] md:mt-1">
                  {`Education - ${member.education}`}
                </p>

                <p className="mt-6 hidden max-w-60 md:block">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

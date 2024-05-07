import { Graph } from "@/components/elements/icons/Graph";
import { classNameMerge } from "@/utils/classNameMerge";
import { getProductData } from "@/utils/getProductData";
import { v4 as uuid } from "uuid";
export const Products = ({ productName }: { productName: string }) => {
  const productData = getProductData(productName);
  return (
    <section className="w-container mt-[200px] flex flex-col gap-[150px]">
      {productData.products.map(({ image, title, lists }, i) => (
        <div
          key={uuid()}
          className={classNameMerge(
            "flex flex-col items-center justify-between gap-[50px] px-[20px] md:flex-row md:gap-[85px] md:px-[40px] lg:px-[80px]",
            i % 2 != 0 ? "md:flex-row-reverse" : "",
          )}
        >
          <div className="flex h-full w-full items-center justify-center">
            {/* <Image
              alt={title}
              src={image}
              width={3440}
              height={3440}
              className="w-full rounded-xl md:rounded-[20px]"
            /> */}
            <video src={image} muted loop autoPlay></video>
          </div>
          <div className="w-full">
            <h3 className="text-[24px] font-medium leading-8 tracking-tighter md:text-[34px] md:leading-[50px] md:tracking-[-0.68px]">
              <span className="head-title text-clip-all">
                {title.split("/")[0]}
              </span>
              {title.split("/")[1]}
            </h3>
            <div className="mt-[34px] md:mt-[66px]">
              {lists.map((list) => (
                <div
                  key={uuid()}
                  className="mt-[20px] flex items-center gap-[20px] md:mt-[30px]"
                >
                  <div className="h-full">
                    <Graph />
                  </div>
                  <p className="text-sm leading-6 tracking-wide text-[#959595] md:text-secondary">
                    {list.includes("\b") ? (
                      <>
                        <span className="font-extrabold text-[#0f9]">
                          {list.split("\b")[0]}
                        </span>
                        <span>{list.split("\b")[1]}</span>
                      </>
                    ) : (
                      <span>{list}</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

"use client";

import { classNameMerge } from "@/utils/classNameMerge";
import { useState } from "react";
type FAQ = {
  question: string;
  answer: string;
};

export const Faq = ({ faq }: { faq: FAQ[] }) => {
  const [currentOpenIndex, setCurrentOpenIndex] = useState(0);
  return (
    <section className="px-10 py-10 sm:py-16">
      <div className="mx-auto max-w-3xl space-y-4">
        {faq.map(({ question, answer }, index) => (
          <div
            key={index}
            className="shadow-lg cursor-pointer rounded-2xl border border-accent outline-none transition-all duration-500 focus:outline-none lg:hover:bg-accent"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              onClick={() => {
                if (currentOpenIndex === index) {
                  setCurrentOpenIndex(-1);
                } else setCurrentOpenIndex(index);
              }}
            >
              <span className="text-start text-lg font-semibold">
                {question}
              </span>

              <div className="w">
                <p className="text-4xl font-bold ">
                  {index == currentOpenIndex ? "-" : "+"}
                </p>
              </div>
            </button>

            <div
              className={classNameMerge(
                "px-4 pb-5 sm:px-6 sm:pb-6",
                index == currentOpenIndex ? "" : "hidden",
              )}
            >
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

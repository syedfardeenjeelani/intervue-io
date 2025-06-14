"use client";
import { Fragment, useState } from "react";
import { Plus, Phone } from "lucide-react";
import defaultFaqs from "@/data/Faq.json";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}


export default function FAQSection({ faqs = defaultFaqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? null : idx));

  return (
    <section className="w-full bg-[#f7efef] lg:h-[50vh] py-16 px-4 md:px-12">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left column */}
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-[100] mb-4">FAQs</h2>
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-10 max-w-xs">
            Here are frequently asked questions to clear all your doubts.
          </p>

          <div className="space-y-2">
            <p className="font-medium">Still have doubts?</p>
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center gap-2 text-sky-700 hover:underline"
            >
              <Phone className="w-4 h-4" />
              Talk to our representative
            </a>
          </div>
        </div>
        <div className="md:col-span-3 space-y-1">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Fragment key={item.question}>
                {idx === 0 && (
                  <div className="border-b border-black last:border-b-0"></div>
                )}
                <div className="border-b border-black last:border-b-0">
                  <button
                    onClick={() => toggle(idx)}
                    className="flex justify-between items-center w-full py-5 text-left"
                  >
                    <span className="font-medium md:text-lg">
                      {item.question}
                    </span>
                    <Plus
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="pb-5 pr-8 text-sm md:text-base text-neutral-600">
                      {item.answer}
                    </p>
                  )}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

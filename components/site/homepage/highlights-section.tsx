"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

type HighlightItem = {
  id: number;
  title: string;
  description: string;
};

const items: HighlightItem[] = [
  {
    id: 1,
    title: "Approved Institute",
    description:
      "How all this mistaken denouncing pleasure praising pain was give you great explorer.",
  },
  {
    id: 2,
    title: "Experienced & Trusted",
    description:
      "In a free hour, when our power of choice is and when nothing well prevents.",
  },
  {
    id: 3,
    title: "Modern Techniques",
    description:
      "The claims of duty or the obligations of business it will frequently occur that pleasures.",
  },
  {
    id: 4,
    title: "Trained Instructors",
    description:
      "Desires to obtain pain of itself because occur occasionally work circumstances.",
  },
];

export function HighlightsSection() {
  return (
    <section className="relative isolate">
      {/* Background layer */}
      <div className="absolute inset-0 -z-10">
        {/* left dark panel to mimic design contrast (below image) */}
        <div className="absolute inset-y-0 left-0 w-full bg-black -z-10" />
        {/* right image, anchored to extreme right */}
        <div className="absolute inset-y-0 left-[62%] right-0 z-0">
          <Image
            src="/images/highlights-bg.png"
            alt="Highlights background"
            fill
            className="object-cover object-right"
            priority
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="pathway-extreme text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Here to help you
            <br />
            <span className="text-red-500 text-3xl md:text-4xl lg:text-5xl">
              become a great driver
            </span>
          </h2>
          <p className="mt-6 text-sm leading-6 text-white/80 md:text-base">
            Idea of denouncing pleasure and praising pain was born and will give
            you a complete account of the system expound the actual teachings of
            great explorer of the truth the master-builder.
          </p>
        </div>

        {/* Grid - 2 per row with equal gaps */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch justify-items-start w-full sm:w-[92%] md:w-[88%] lg:w-[82%] xl:w-[78%]">
          {items.map((item) => (
            <div key={item.id} className="relative flex justify-start w-full">
              {/* Card */}
              <div className="group relative w-full overflow-hidden rounded-md bg-white px-3 py-3 shadow-sm transition hover:shadow-md md:px-4 md:py-3 h-40 md:h-44 flex flex-col justify-center">
                {/* chevron trio */}
                <div className="mb-2.5 flex items-center gap-1 text-red-500">
                  <ChevronRight className="h-5 w-5" />
                  <ChevronRight className="h-5 w-5" />
                  <ChevronRight className="h-5 w-5" />
                </div>
                <h4 className="pathway-extreme text-lg font-bold text-charcoal md:text-xl">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-gray-600">{item.description}</p>

                {/* right notch shape mimic */}
                <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 rotate-45 border-t-[20px] border-r-[20px] border-t-transparent border-r-white md:block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;

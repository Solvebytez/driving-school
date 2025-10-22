"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function LearningOptionsSection() {
  return (
    <section className="relative w-full bg-red-50 py-12 md:py-20">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-column grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Card - Online E-learning */}
          <div className="group relative h-64 overflow-hidden rounded-lg md:h-80">
            <Image
              src="/images/courses-v1-1.jpg"
              alt="Online E-learning Courses"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/70" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h3 className="pathway-extreme mb-6 text-xl font-bold text-white md:text-2xl">
                Learn at your own pace with our NEW Online E-learning Courses.
              </h3>
              <Button
                variant="default"
                className="pathway-extreme inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 font-semibold text-background hover:bg-brand/90"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Card - MTO Certified Instructors */}
          <div className="group relative h-64 overflow-hidden rounded-lg md:h-80">
            <Image
              src="/images/courses-v1-3.jpg"
              alt="MTO Certified Instructors"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-charcoal/60 transition-opacity duration-300 group-hover:bg-charcoal/70" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h3 className="pathway-extreme mb-6 text-xl font-bold text-white md:text-2xl">
                Learn with our MTO certified professional instructors in our
                classroom
              </h3>
              <Button
                variant="default"
                className="pathway-extreme inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 font-semibold text-background hover:bg-brand/90"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

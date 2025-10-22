"use client";

import React from "react";
import { ChevronRight, Plus } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Instructor Training",
    description:
      "There are many variations of passages of Lorem ipsum aagtiable but the majority have suffered",
    image: "/professional-instructor-training-in-car.jpg",
  },
  {
    id: 2,
    title: "Road Safety Guide",
    description:
      "There are many variations of passages of Lorem ipsum aagtiable but the majority have suffered",
    image: "/road-safety-driving-guide.jpg",
  },
  {
    id: 3,
    title: "Driving License",
    description:
      "There are many variations of passages of Lorem ipsum aagtiable but the majority have suffered",
    image: "/driving-license-certificate.jpg",
  },
];

export function ServicesSection() {
  return (
    <section className="relative bg-white py-12 md:py-16">
      {/* Background decorative image */}
      <div className="absolute top-0 left-0 h-full w-auto">
        <Image
          src="/images/about-cercle-1-5.webp"
          alt="Decorative background"
          width={193}
          height={939}
          className="object-contain opacity-100"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <ChevronRight className="h-4 w-4 text-brand" />
            <ChevronRight className="h-4 w-4 text-brand" />
            <ChevronRight className="h-4 w-4 text-brand" />
            <span className="onest text-sm font-semibold text-brand">
              Our Service
            </span>
            <ChevronRight className="h-4 w-4 text-brand" />
            <ChevronRight className="h-4 w-4 text-brand" />
            <ChevronRight className="h-4 w-4 text-brand" />
          </div>
          <h2 className="pathway-extreme text-balance text-4xl font-bold text-charcoal md:text-5xl">
            We're Offering the Best
            <br />
            Services to You
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col overflow-hidden bg-white shadow-lg transition-shadow hover:shadow-xl"
              style={{ borderRadius: "10px" }}
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              {/* Content - Only title and paragraph have padding */}
              <div className="px-6 pt-6 pb-0">
                <h3 className="pathway-extreme mb-3 text-xl font-bold text-charcoal">
                  {service.title}
                </h3>
                <p className="onest mb-6 text-sm text-gray-600">
                  {service.description}
                </p>
              </div>

              {/* Button - No padding, 50% width */}
              <div className="p-0">
                <button className="group/btn relative inline-flex items-center gap-2 bg-brand px-6 py-3 text-white transition-all hover:pr-8 w-1/2">
                  <span className="pathway-extreme font-semibold">
                    Read More
                  </span>
                  <Plus className="h-4 w-4" />
                  {/* Angled right edge */}
                  <div className="absolute -right-2 top-0 h-full w-4 bg-brand transform skew-x-12"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Car, CreditCard, Gauge, Calendar } from "lucide-react";
import Image from "next/image";

const features = [
  {
    id: 1,
    icon: Car,
    title: "10,000+",
    subtitle: "Successful Students Served",
    borderColor: "border-red-500",
    textColor: "text-red-500",
  },
  {
    id: 2,
    icon: CreditCard,
    title: "15+",
    subtitle: "Years of Dedicated Service",
    borderColor: "border-red-500",
    textColor: "text-red-500",
  },
  {
    id: 3,
    icon: Gauge,
    title: "2600+",
    subtitle: "Classes Completed",
    borderColor: "border-red-500",
    textColor: "text-red-500",
  },
  {
    id: 4,
    icon: Calendar,
    title: "5+",
    subtitle: "Locations Available",
    borderColor: "border-red-500",
    textColor: "text-red-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative w-full py-16 md:py-20">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/1.jpg"
          alt="Background"
          fill
          className="object-cover blur-sm"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`${feature.borderColor} border-2 bg-transparent rounded-lg flex flex-col items-center justify-center gap-2 px-6 py-8 text-center ${feature.textColor}`}
            >
              <feature.icon className="h-8 w-8 flex-shrink-0" />
              <div className="flex flex-col items-center gap-1">
                <span className="pathway-extreme text-2xl font-bold">
                  {feature.title}
                </span>
                <span className="pathway-extreme text-xs font-semibold uppercase tracking-wide">
                  {feature.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

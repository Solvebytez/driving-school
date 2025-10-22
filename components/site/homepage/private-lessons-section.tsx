"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

const g1Packages = [
  { description: "1 Hour of Lesson", price: "$40.00 +HST" },
  { description: "5 Hours of Lessons", price: "$200.00 +HST" },
  { description: "10 Hours of Lessons", price: "$400.00 +HST" },
  {
    description: "1 Hour and Car For Road Test (In Town) (G1 Exit)",
    price: "$150.00 +HST",
  },
  {
    description: "3 Hours & Car For Road Test (In Town) (G1 Exit)",
    price: "$230.00 +HST",
  },
  {
    description: "5 Hours & Car For Road Test (In Town) (G1 Exit)",
    price: "$310.00 +HST",
  },
  {
    description: "10 Hours & Car For Road Test (In Town) (G1 Exit)",
    price: "$510.00 +HST",
  },
];

const g2Packages = [
  { description: "1 Hour Lesson (G2 Exit)", price: "$45.00 +HST" },
  { description: "5 Hours of Lesson (G2 Exit)", price: "$225.00 +HST" },
  { description: "10 Hours of Lesson (G2 Exit)", price: "$450.00 +HST" },
  {
    description: "1 Hour and Car For Road Test (In Town) (G2 Exit)",
    price: "$170.00 +HST",
  },
  {
    description: "3 Hours & Car For Road Test (In Town) (G2 Exit)",
    price: "$265.00 +HST",
  },
  {
    description: "5 Hours & Road Test (In Town) (G2 Exit)",
    price: "$360.00 +HST",
  },
  {
    description: "10 Hours & Car For Road Test (In Town) (G2 Exit)",
    price: "$600.00 +HST",
  },
];

export function PrivateLessonsSection() {
  return (
    <section className="relative w-full py-12 md:py-16">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/bg-1.jpg"
          alt="Background"
          fill
          className="object-cover blur-sm"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="pathway-extreme text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Private Lesson Packages
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* G1 Exit Packages */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border-2 border-dotted border-white/30">
            {/* Header */}
            <div className="bg-red-500 px-6 py-4">
              <div className="flex justify-between items-center">
                <h3 className="pathway-extreme text-lg font-bold text-white">
                  G1 Exit Private Lesson Packages
                </h3>
                <span className="pathway-extreme text-lg font-bold text-white">
                  Price
                </span>
              </div>
            </div>

            {/* Package List */}
            <div className="divide-y divide-white/20">
              {g1Packages.map((pkg, index) => (
                <div
                  key={index}
                  className="px-6 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-4">
                      <p className="onest text-sm text-white leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="pathway-extreme text-sm font-semibold text-white">
                        {pkg.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* G2 Exit Packages */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border-2 border-dotted border-white/30">
            {/* Header */}
            <div className="bg-red-500 px-6 py-4">
              <div className="flex justify-between items-center">
                <h3 className="pathway-extreme text-lg font-bold text-white">
                  G2 Exit Private Lesson Packages
                </h3>
                <span className="pathway-extreme text-lg font-bold text-white">
                  Price
                </span>
              </div>
            </div>

            {/* Package List */}
            <div className="divide-y divide-white/20">
              {g2Packages.map((pkg, index) => (
                <div
                  key={index}
                  className="px-6 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-4">
                      <p className="onest text-sm text-white leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="pathway-extreme text-sm font-semibold text-white">
                        {pkg.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Register Now Button */}
        <div className="mt-12 text-center">
          <Button
            asChild
            className="pathway-extreme inline-flex items-center gap-2 rounded-md bg-brand px-16 py-6 font-semibold text-background hover:bg-brand/90"
          >
            <Link href="/registration">
              <UserPlus className="h-4 w-4" />
              <span>Register Now</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

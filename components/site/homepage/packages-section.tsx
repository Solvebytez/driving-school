"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    id: 1,
    name: "Basic Package",
    price: "$49.99",
    description: "Righteous indignation & well dislike",
    features: [
      { label: "10 Hours of In-Car Training (1-On-1)", value: "" },
      { label: "20 Hours of In-Class Training or Online", value: "" },
      { label: "10 Hours of Homelinks", value: "" },
      { label: "Certification With The Ministry of Transportation", value: "" },
      { label: "Defensive Driving Techniques", value: "" },
      { label: "Free Pick up & Drop off", value: "" },
      { label: "Road Test Preparation", value: "" },
      { label: "Reduced Waiting Period for G2", value: "" },
      { label: "Flexible Scheduling", value: "" },
    ],
    buttonText: "BOOK NOW",
    isPopular: false,
    isDark: false,
  },
  {
    id: 2,
    name: "Ultra Package",
    price: "$124.99",
    description: "Welcomed and every pain avoided",
    features: [
      { label: "11 Hours Of In-Car Training (1-On-1)", value: "" },
      { label: "20 Hours of In-Class-Training or Online", value: "" },
      { label: "10 Hours of Homelinks", value: "" },
      { label: "Certification With The Ministry of Transportation", value: "" },
      {
        label: "Use of an Instructor's car for local* G2 Road Test",
        value: "",
      },
      { label: "We will also book your Road Test", value: "" },
      { label: "Defensive Driving Techniques", value: "" },
      { label: "Free Pick up & Drop off", value: "" },
      { label: "Reduced Waiting Period for G2", value: "" },
      { label: "Flexible Scheduling", value: "" },
    ],
    buttonText: "BOOK NOW",
    isPopular: true,
    isDark: true,
  },
  {
    id: 3,
    name: "Premium Package",
    price: "$89.99",
    description: "Light to find fault with who chooses",
    features: [
      { label: "15 Hours of In-Car Training (1-On-1)", value: "" },
      { label: "20 Hours of In-Class-Training or Online", value: "" },
      { label: "10 Hours of Homelinks", value: "" },
      { label: "Certification With The Ministry of Transportation", value: "" },
      {
        label: "Use of an Instructor's car For local* G2 Road Test",
        value: "",
      },
      { label: "We will also book your Road Test", value: "" },
      { label: "Defensive Driving Techniques", value: "" },
      { label: "Free Pick up & Drop off", value: "" },
      { label: "Reduced Waiting Period for G2", value: "" },
      { label: "Flexible Scheduling", value: "" },
    ],
    buttonText: "BOOK NOW",
    isPopular: false,
    isDark: false,
  },
];

export function PackagesSection() {
  return (
    <section className="relative w-full py-12 md:py-16">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/bg-contact-team.webp"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="pathway-extreme text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
            Valuable Packages & Offers
          </h2>
        </div>

        {/* Packages Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 bg-white flex flex-col"
            >
              {/* Popular Banner - Inside card */}
              {pkg.isPopular && (
                <div className="absolute top-3 -right-9 z-10">
                  <div className="bg-green-500 text-white px-8 py-1 text-xs font-bold uppercase transform rotate-45">
                    POPULAR
                  </div>
                </div>
              )}
              {/* Section 1: Price Header */}
              <div
                className={`p-6 rounded-t-lg ${
                  pkg.isDark ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="text-center">
                  <h2
                    className={`text-4xl font-bold ${
                      pkg.isDark ? "text-yellow-400" : "text-red-500"
                    }`}
                  >
                    <span className="text-2xl">$</span>
                    {pkg.price.replace("$", "").split(".")[0]}
                    <span className="text-2xl">
                      .{pkg.price.replace("$", "").split(".")[1]}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      per Course
                    </span>
                  </h2>
                </div>
              </div>

              {/* Section 2: Package Info */}
              <div className="p-6 bg-gray-100">
                <h4 className="pathway-extreme text-xl font-bold mb-1 text-charcoal">
                  {pkg.name}
                </h4>
                <p className="onest text-sm text-gray-600">{pkg.description}</p>
              </div>

              {/* Section 3: Features */}
              <div
                className={`p-6 ${
                  pkg.isDark ? "bg-gray-800" : "bg-white"
                } flex-1`}
              >
                <div className="space-y-0">
                  {pkg.features.map((feature, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center py-3">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-2 h-2 bg-green-500 transform rotate-45"></div>
                          </div>
                          <span
                            className={`onest text-sm ${
                              pkg.isDark ? "text-white" : "text-gray-600"
                            }`}
                          >
                            {feature.label}
                            {feature.value ? ":" : ""}
                          </span>
                        </div>
                        {feature.value && (
                          <span
                            className={`pathway-extreme text-sm font-semibold ${
                              pkg.isDark ? "text-white" : "text-charcoal"
                            }`}
                          >
                            {feature.value}
                          </span>
                        )}
                      </div>
                      {index < pkg.features.length - 1 && (
                        <div
                          className={`h-px ${
                            pkg.isDark ? "bg-gray-600" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Button - Fixed at bottom */}
              <div className="p-6 mt-auto rounded-b-lg">
                <Button
                  asChild
                  className={`pathway-extreme w-full py-3 font-semibold rounded-md ${
                    pkg.isDark
                      ? "bg-white text-charcoal hover:bg-gray-100"
                      : "bg-brand text-background hover:bg-brand/90"
                  }`}
                >
                  <Link href="/registration">{pkg.buttonText}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

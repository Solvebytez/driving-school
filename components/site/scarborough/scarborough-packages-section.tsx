"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const scarboroughPackages = [
  {
    id: 1,
    name: "Scarborough Basic Package",
    price: "$49.99",
    description: "Perfect for beginners in Scarborough area",
    features: [
      "10 Hours of In-Car Training (1-On-1)",
      "20 Hours of In-Class Training or Online",
      "10 Hours of Homelinks",
      "Certification With The Ministry of Transportation",
      "Defensive Driving Techniques",
      "Free Pick up & Drop off in Scarborough",
      "Road Test Preparation",
      "Reduced Waiting Period for G2",
      "Flexible Scheduling",
    ],
    buttonText: "BOOK NOW",
    isPopular: false,
  },
  {
    id: 2,
    name: "Scarborough Ultra Package",
    price: "$124.99",
    description: "Most popular choice for Scarborough students",
    features: [
      "11 Hours Of In-Car Training (1-On-1)",
      "20 Hours of In-Class-Training or Online",
      "10 Hours of Homelinks",
      "Certification With The Ministry of Transportation",
      "Use of an Instructor's car for Scarborough G2 Road Test",
      "We will also book your Road Test",
      "Defensive Driving Techniques",
      "Free Pick up & Drop off in Scarborough",
      "Reduced Waiting Period for G2",
      "Flexible Scheduling",
    ],
    buttonText: "BOOK NOW",
    isPopular: true,
  },
  {
    id: 3,
    name: "Scarborough Premium Package",
    price: "$89.99",
    description: "Comprehensive training for Scarborough drivers",
    features: [
      "15 Hours of In-Car Training (1-On-1)",
      "20 Hours of In-Class-Training or Online",
      "10 Hours of Homelinks",
      "Certification With The Ministry of Transportation",
      "Use of an Instructor's car For Scarborough G2 Road Test",
      "We will also book your Road Test",
      "Defensive Driving Techniques",
      "Free Pick up & Drop off in Scarborough",
      "Reduced Waiting Period for G2",
      "Flexible Scheduling",
    ],
    buttonText: "BOOK NOW",
    isPopular: false,
  },
];

export function ScarboroughPackagesSection() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="pathway-extreme text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
            Scarborough Driving Packages & Offers
          </h2>
          <p className="onest text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose the perfect driving package for your needs in Scarborough.
            All packages include MTO certified instructors and flexible
            scheduling.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {scarboroughPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 bg-white flex flex-col"
            >
              {/* Popular Banner */}
              {pkg.isPopular && (
                <div className="absolute top-3 -right-9 z-10">
                  <div className="bg-green-500 text-white px-8 py-1 text-xs font-bold uppercase transform rotate-45">
                    POPULAR
                  </div>
                </div>
              )}

              {/* Price Header */}
              <div className="p-6 bg-white rounded-t-lg">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-red-500">
                    <span className="text-2xl">$</span>
                    {pkg.price.replace("$", "").split(".")[0]}
                    <span className="text-2xl">
                      .{pkg.price.replace("$", "").split(".")[1]}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      per Course
                    </span>
                  </h3>
                </div>
              </div>

              {/* Package Info */}
              <div className="p-6 bg-gray-100">
                <h4 className="pathway-extreme text-xl font-bold mb-1 text-charcoal">
                  {pkg.name}
                </h4>
                <p className="onest text-sm text-gray-600">{pkg.description}</p>
              </div>

              {/* Features */}
              <div className="p-6 bg-white flex-1">
                <div className="space-y-0">
                  {pkg.features.map((feature, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center py-3">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-2 h-2 bg-green-500 transform rotate-45"></div>
                          </div>
                          <span className="onest text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      </div>
                      {index < pkg.features.length - 1 && (
                        <div className="h-px bg-gray-200" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="p-6 mt-auto rounded-b-lg">
                <Button
                  asChild
                  className="pathway-extreme w-full py-3 font-semibold rounded-md bg-brand text-background hover:bg-brand/90"
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

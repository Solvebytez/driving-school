"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative w-full py-12 md:py-16">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex min-h-[400px] overflow-hidden rounded-lg">
          {/* Left Section - Red Background */}
          <div className="relative flex-1 bg-red-500 flex items-center justify-center">
            {/* Tire Track Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full bg-repeat"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M30 0l15 30-15 30-15-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
              ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-8 flex flex-col items-center">
              <h2 className="pathway-extreme text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Book Your First Driving
                <br />
                Lesson Today
              </h2>
              <p className="onest text-white text-lg mb-6">
                Call us at:{" "}
                <span className="font-semibold">(905)-392-1472</span>
              </p>
              <Button className="pathway-extreme bg-gray-900 text-white hover:bg-gray-800 px-16 py-6 font-semibold rounded-md flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact us now
              </Button>
            </div>
          </div>

          {/* Right Section - Dark Background */}
          <div className="relative flex-1 bg-gray-900 flex items-center justify-center">
            {/* Tire Track Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full bg-repeat"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M30 0l15 30-15 30-15-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
              ></div>
            </div>

            {/* Car Image */}
            <div className="relative z-10">
              <Image
                src="/images/cta-car.webp"
                alt="Car for driving lessons"
                width={400}
                height={300}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Diagonal Split Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[50%] border-l-transparent border-b-[400px] border-b-red-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

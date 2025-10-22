"use client";

import Image from "next/image";
import { Trophy, Award, Shield, Clock } from "lucide-react";

export function AboutUsSection() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Image with Overlays */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/about-l-1-1.webp"
                alt="Professional Driving Instructor"
                fill
                className="object-cover"
                priority
              />

              {/* Experience Overlay - Top Left */}
              <div className="absolute left-4 top-4 bg-red-100 rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-800">16</div>
                    <div className="text-xs font-semibold text-red-800 uppercase tracking-wide leading-tight">
                      Years of
                      <br />
                      Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Learners Overlay - Bottom Left */}
              <div className="absolute left-4 bottom-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  {/* Profile Pictures */}
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white"></div>
                    <div className="h-8 w-8 rounded-full bg-gray-400 border-2 border-white"></div>
                    <div className="h-8 w-8 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">+</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">2k+</div>
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Successful
                      <br />
                      Learners
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Header Badge */}
            <div className="self-start mb-4">
              <div className="bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold uppercase">
                ABOUT US
              </div>
            </div>

            {/* Main Title */}
            <h2 className="pathway-extreme text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
              Driving Excellence Since Day One
            </h2>

            {/* Description */}
            <p className="onest text-gray-600 leading-relaxed">
              Top Star Driving School has been Ontario's premier driving
              education provider for over 16 years. We are committed to
              delivering exceptional driving instruction that goes beyond just
              passing tests - we create confident, safe, and responsible drivers
              for life.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <div className="pathway-extreme text-sm font-semibold text-gray-800">
                    MTO Certified
                  </div>
                  <div className="onest text-xs text-gray-600">
                    Ministry Approved
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <div className="pathway-extreme text-sm font-semibold text-gray-800">
                    Flexible Hours
                  </div>
                  <div className="onest text-xs text-gray-600">
                    7 Days a Week
                  </div>
                </div>
              </div>
            </div>

            {/* Accreditation Badge */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="bg-gradient-to-b from-red-600 to-red-700 rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-400 rounded-full p-2">
                      <Award className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="text-white">
                      <div className="text-sm font-bold uppercase tracking-wide">
                        DRIVING INSTRUCTOR
                      </div>
                      <div className="text-xs opacity-90">
                        Approved Driving Instructor (ADI)
                      </div>
                      <div className="text-xs opacity-75">2010</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trophy Icons */}
              <div className="flex items-center gap-2">
                <Trophy className="h-8 w-8 text-yellow-500" />
                <Trophy className="h-10 w-10 text-yellow-500" />
                <Trophy className="h-8 w-8 text-yellow-500" />
              </div>
            </div>

            {/* Founder Signature */}
            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="text-gray-400 text-2xl font-serif italic">
                  Glenn Davidson
                </div>
                <div className="text-gray-600">
                  <div className="font-semibold">Glenn Davidson,</div>
                  <div className="text-red-600 text-sm">
                    Founder & Lead Instructor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

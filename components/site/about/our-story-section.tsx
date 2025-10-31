"use client";

import Image from "next/image";
import { Calendar, MapPin, Users, Target } from "lucide-react";

export function OurStorySection() {
  return (
    <section className="relative w-full bg-gray-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold uppercase inline-block mb-4">
            OUR STORY
          </div>
          <h2 className="pathway-extreme text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl mb-6">
            From Humble Beginnings to Driving Excellence
          </h2>
          <p className="onest text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our journey began with a simple mission: to make driving education
            accessible, comprehensive, and life-changing for every student who
            walks through our doors.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200 hidden lg:block"></div>

          <div className="space-y-12">
            {/* 2008 - Foundation */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-500 text-white p-2 rounded-full">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="pathway-extreme text-lg font-bold text-gray-800">
                        2008
                      </div>
                      <div className="onest text-sm text-gray-600">
                        The Beginning
                      </div>
                    </div>
                  </div>
                  <h3 className="pathway-extreme text-xl font-bold text-gray-800 mb-3">
                    Driving Hero Founded
                  </h3>
                  <p className="onest text-gray-600 leading-relaxed">
                    Glenn Davidson established Driving Hero with a
                    single car and a big dream. Starting in Bradford, we began
                    with the belief that every student deserves personalized,
                    patient, and professional driving instruction.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/about-cercle-1-5.webp"
                    alt="Driving Hero founding"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 2010 - MTO Certification */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-500 text-white p-2 rounded-full">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="pathway-extreme text-lg font-bold text-gray-800">
                        2010
                      </div>
                      <div className="onest text-sm text-gray-600">
                        Certification
                      </div>
                    </div>
                  </div>
                  <h3 className="pathway-extreme text-xl font-bold text-gray-800 mb-3">
                    MTO Certification Achieved
                  </h3>
                  <p className="onest text-gray-600 leading-relaxed">
                    We received official certification from the Ministry of
                    Transportation Ontario, solidifying our commitment to the
                    highest standards of driving education. This milestone
                    marked our dedication to professional excellence.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pr-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/mto-certified-instructors.jpg"
                    alt="MTO Certified Instructors"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 2015 - Expansion */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-500 text-white p-2 rounded-full">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="pathway-extreme text-lg font-bold text-gray-800">
                        2015
                      </div>
                      <div className="onest text-sm text-gray-600">
                        Expansion
                      </div>
                    </div>
                  </div>
                  <h3 className="pathway-extreme text-xl font-bold text-gray-800 mb-3">
                    Multi-Location Expansion
                  </h3>
                  <p className="onest text-gray-600 leading-relaxed">
                    We expanded our services to Markham, Newmarket, Richmond
                    Hill, and Scarborough, bringing our proven teaching methods
                    and exceptional service to more communities across the
                    Greater Toronto Area.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/bright-city-skyline-with-road.jpg"
                    alt="Multi-location expansion"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 2024 - Today */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-500 text-white p-2 rounded-full">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="pathway-extreme text-lg font-bold text-gray-800">
                        2024
                      </div>
                      <div className="onest text-sm text-gray-600">Today</div>
                    </div>
                  </div>
                  <h3 className="pathway-extreme text-xl font-bold text-gray-800 mb-3">
                    Leading the Industry
                  </h3>
                  <p className="onest text-gray-600 leading-relaxed">
                    Today, Driving Hero has successfully trained over
                    2,000 students with a 95% first-time pass rate. We continue
                    to innovate with online courses, flexible scheduling, and
                    cutting-edge teaching methods.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pr-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/professional-instructor-training-in-car.jpg"
                    alt="Professional instructor training"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

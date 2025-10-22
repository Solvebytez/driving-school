"use client";

import { ChevronRight, Check } from "lucide-react";

const features = [
  "Ministry Approved Beginner Driver Education Course Provider",
  "MTO Certified and Experienced Instructors",
  "98% Passing Rate",
  "# 1 choice for in York Region & Simcoe County",
  "Reduced time to get your G2",
  "Industry Leading Driving Techniques",
  "1-On-1 In-Car Training",
  "Flexible Schedule",
];

export function CoursesSection() {
  return (
    <section className="relative w-full bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column - Course Navigation */}
          <div className="bg-gray-100 p-8 rounded-lg">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold uppercase mb-4">
                WHY CHOOSE US
              </div>
              <h2 className="pathway-extreme text-3xl font-bold text-gray-800">
                Why learn with Top Star Driving School
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                    style={{ backgroundColor: "#04bf61" }}
                  >
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="pathway-extreme text-gray-700 leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - YouTube Video */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
            <div className="relative w-full h-full">
              <iframe
                src="https://www.youtube.com/embed/FEGUjo9Fi48"
                title="Top Star Driving School Video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

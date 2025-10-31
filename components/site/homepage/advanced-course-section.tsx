"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ChevronRight } from "lucide-react";

const courseTopics = [
  "Responsibilities as a Driver",
  "Vehicle Controls",
  "Traffics Signs & Control Devices",
  "Rules of the Road",
  "Encountering other Road Users",
  "Driving in Dangerous Condition",
  "Incase of Accident",
];

export function AdvancedCourseSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Title & Download */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              {/* Title */}
              <h2 className="pathway-extreme text-3xl font-bold text-charcoal mb-6 md:text-4xl lg:text-5xl leading-tight">
                The advanced level course
                <br />
                is designed for our learners
              </h2>

              {/* Separator Line */}
              <div className="w-16 h-0.5 bg-charcoal mb-8"></div>

              {/* Download Box */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded flex items-center justify-center">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <Link
                    href="/courses"
                    className="pathway-extreme text-lg font-bold text-charcoal hover:text-red-500 transition-colors block mb-1"
                  >
                    Download Course Content
                  </Link>
                  <p className="onest text-sm text-gray-500">PDF.4MB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Car Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full h-48 md:h-56 lg:h-64">
              {/* Background Shape - Behind Car */}
              <div className="absolute inset-0 z-0 overflow-visible">
                <Image
                  src="/images/shape-23.png"
                  alt=""
                  fill
                  className="object-cover opacity-100"
                  style={{ objectPosition: "center" }}
                />
              </div>

              {/* Car Image - Above Shape */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <Image
                  src="/images/car-1.png"
                  alt="Advanced Course Car"
                  width={280}
                  height={280}
                  className="object-contain relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Text & List */}
          <div className="flex flex-col justify-center">
            <div>
              {/* Description */}
              <p className="onest text-gray-600 leading-relaxed mb-6">
                Rejects dislikes or avoid pleasure itself because it pleasure but
                those who do not know how too know how to pursue pleasure.
              </p>

              {/* Bulleted List */}
              <ul className="space-y-3">
                {courseTopics.map((topic, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 onest text-charcoal"
                  >
                    <ChevronRight className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import React from "react";
import {
  Play,
  Monitor,
  MessageCircle,
  ShoppingCart,
  Car,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    number: "01",
    icon: MessageCircle,
    title: "Consultation",
    description:
      "How all this mistaken denouncing pleasure and praising pain was give you.",
    link: "/registration",
  },
  {
    id: 2,
    number: "02",
    icon: ShoppingCart,
    title: "Buy Your Course",
    description:
      "The same as saying through shrinking from toil and pain cases are perfect.",
    link: "/courses",
  },
  {
    id: 3,
    number: "03",
    icon: Car,
    title: "Start Your Training",
    description:
      "Frequently occur that pleasures repudiated and annoyances accepted selection.",
    link: "/registration",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/course_bg_1.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-column grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Video Section */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="pathway-extreme text-4xl font-bold text-charcoal md:text-5xl">
              Start the process
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Denounce with righteous indignation & dislike men who are so
              beguiled demoralized by hold the charms off pleasure.
            </p>

            {/* Video Player */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="/modern-car-interior-driving.jpg"
                alt="Video thumbnail - person inserting car key"
                fill
                className="object-cover grayscale"
              />
            </div>

            {/* CTA Section */}
            <div className="flex items-center gap-4 p-6 bg-yellow-50 rounded-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-charcoal">
                  Get Your First Free Online Lesson Today...
                </p>
                <p className="text-sm text-gray-600">
                  Schedule your class as your convenient.
                </p>
              </div>
              <Link
                href="/registration"
                className="flex items-center gap-2 text-brand font-semibold hover:text-brand/80 transition-colors cursor-pointer"
              >
                <span>SCHEDULE NOW</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column - Process Steps */}
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-20">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Step Number Background */}
                  <div className="absolute -left-4 -top-4 text-8xl font-bold text-gray-200 select-none">
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <Link
                    href={step.link}
                    className="relative flex items-start gap-6 group cursor-pointer"
                  >
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black flex-shrink-0 group-hover:bg-black/80 transition-colors">
                      <step.icon className="h-6 w-6 text-red-500" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="pathway-extreme text-xl font-bold text-charcoal mb-2 group-hover:text-red-500 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Link>

                  {/* Connecting Line (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-16 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Send Request Button */}
            <div className="mt-8">
              <Button
                size="lg"
                asChild
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 text-lg"
              >
                <Link href="/contact">SEND REQUEST</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

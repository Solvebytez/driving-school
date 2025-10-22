"use client";

import { Users, Award, MapPin, Clock, Star, Shield } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "2000+",
      label: "Successful Students",
      description:
        "Students who have passed their driving tests with our guidance",
    },
    {
      icon: Award,
      number: "95%",
      label: "First-Time Pass Rate",
      description: "Our students pass their road tests on the first attempt",
    },
    {
      icon: MapPin,
      number: "5",
      label: "Service Locations",
      description: "Convenient locations across the Greater Toronto Area",
    },
    {
      icon: Clock,
      number: "16+",
      label: "Years of Experience",
      description: "Providing exceptional driving education since 2008",
    },
    {
      icon: Star,
      number: "4.9",
      label: "Average Rating",
      description: "Based on hundreds of student reviews and testimonials",
    },
    {
      icon: Shield,
      number: "100%",
      label: "MTO Certified",
      description:
        "All our instructors are Ministry of Transportation certified",
    },
  ];

  return (
    <section className="relative w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold uppercase inline-block mb-4">
            BY THE NUMBERS
          </div>
          <h2 className="pathway-extreme text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl mb-6">
            Our Track Record of Success
          </h2>
          <p className="onest text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Numbers don't lie. Our statistics reflect our commitment to
            excellence and the trust our students place in us for their driving
            education journey.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="pathway-extreme text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="pathway-extreme text-lg font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              <p className="onest text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8">
            <h3 className="pathway-extreme text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Story?
            </h3>
            <p className="onest text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Be part of our growing community of confident, safe drivers. Let
              us help you achieve your driving goals with our proven methods and
              expert instruction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/registration"
                className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Journey
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

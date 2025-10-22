"use client";

import { Shield, Heart, Award, Users, Clock, Target } from "lucide-react";

export function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Safety is our top priority. We teach defensive driving techniques and road safety awareness to ensure our students become responsible drivers for life.",
    },
    {
      icon: Heart,
      title: "Student-Centered",
      description:
        "Every student is unique. We provide personalized instruction tailored to individual learning styles, pace, and specific needs.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards of instruction with MTO-certified instructors and proven teaching methodologies.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "We're proud to serve our local communities across the GTA, building relationships and contributing to safer roads.",
    },
    {
      icon: Clock,
      title: "Flexibility",
      description:
        "We understand busy schedules. Our flexible scheduling options accommodate students' work, school, and personal commitments.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Our 95% first-time pass rate speaks to our commitment to student success and effective teaching methods.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold uppercase inline-block mb-4">
            OUR VALUES
          </div>
          <h2 className="pathway-extreme text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl mb-6">
            What Drives Us Every Day
          </h2>
          <p className="onest text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our core values guide everything we do, from how we teach to how we
            serve our community. These principles have made us Ontario's trusted
            driving education partner.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <value.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="pathway-extreme text-xl font-bold text-gray-800">
                  {value.title}
                </h3>
              </div>
              <p className="onest text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-center">
          <h3 className="pathway-extreme text-2xl font-bold text-white mb-4">
            Our Mission
          </h3>
          <p className="onest text-white/90 text-lg leading-relaxed max-w-4xl mx-auto">
            To provide exceptional driving education that creates confident,
            safe, and responsible drivers while building stronger, safer
            communities across Ontario. We believe that quality driving
            instruction is not just about passing tests—it's about saving lives
            and creating positive change on our roads.
          </p>
        </div>
      </div>
    </section>
  );
}

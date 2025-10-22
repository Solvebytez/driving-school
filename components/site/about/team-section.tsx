"use client";

import Image from "next/image";
import { Star, Award, Users, Clock } from "lucide-react";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Glenn Davidson",
      role: "Founder & Lead Instructor",
      experience: "16+ Years",
      image: "/placeholder-user.jpg",
      specialties: ["G1 Exit Test", "G2 Exit Test", "Defensive Driving"],
      rating: 5.0,
      students: "500+",
    },
    {
      name: "Sarah Johnson",
      role: "Senior Instructor",
      experience: "12+ Years",
      image: "/placeholder-user.jpg",
      specialties: ["Beginner Training", "Highway Driving", "Parallel Parking"],
      rating: 4.9,
      students: "400+",
    },
    {
      name: "Michael Chen",
      role: "Instructor",
      experience: "8+ Years",
      image: "/placeholder-user.jpg",
      specialties: ["G1 Exit Test", "City Driving", "Road Test Prep"],
      rating: 4.8,
      students: "300+",
    },
    {
      name: "Emily Rodriguez",
      role: "Instructor",
      experience: "6+ Years",
      image: "/placeholder-user.jpg",
      specialties: ["Beginner Training", "Defensive Driving", "Night Driving"],
      rating: 4.9,
      students: "250+",
    },
  ];

  return (
    <section className="relative w-full bg-gray-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold uppercase inline-block mb-4">
            OUR TEAM
          </div>
          <h2 className="pathway-extreme text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl mb-6">
            Meet Our Expert Instructors
          </h2>
          <p className="onest text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team of MTO-certified instructors brings years of experience,
            patience, and dedication to every lesson. Each instructor is
            carefully selected for their teaching ability and commitment to
            student success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Profile Image */}
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                  {member.experience}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="pathway-extreme text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="onest text-red-600 font-semibold mb-3">
                  {member.role}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="onest text-sm text-gray-600">
                    {member.rating} ({member.students} students)
                  </span>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="pathway-extreme text-sm font-semibold text-gray-800 mb-2">
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{member.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    <span>MTO Certified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8" />
            </div>
            <div className="pathway-extreme text-3xl font-bold text-gray-800 mb-2">
              4
            </div>
            <div className="onest text-gray-600">Certified Instructors</div>
          </div>
          <div className="text-center">
            <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <div className="pathway-extreme text-3xl font-bold text-gray-800 mb-2">
              16+
            </div>
            <div className="onest text-gray-600">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8" />
            </div>
            <div className="pathway-extreme text-3xl font-bold text-gray-800 mb-2">
              95%
            </div>
            <div className="onest text-gray-600">First-Time Pass Rate</div>
          </div>
          <div className="text-center">
            <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8" />
            </div>
            <div className="pathway-extreme text-3xl font-bold text-gray-800 mb-2">
              4.9
            </div>
            <div className="onest text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}

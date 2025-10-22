"use client";

import Image from "next/image";
import { Clock, Users, Home, Laptop, Award, Car } from "lucide-react";

export function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "4-Day In-Class Course",
      description:
        "Students that prefer learning in a interactive classroom environment this is the perfect option for you. Our in-class teachers make your learning experience like no other. They provide an engaging and interactive classroom environment so that every single one of our students can get the benefits of becoming a Top Star driver on the road.",
      image: "/images/courses-v1-1.jpg",
      duration: "4 Days",
      schedule: "9:00 AM - 2:30 PM",
      environment: "Interactive Classroom",
      benefits: [
        "Friendly environment",
        "Up-to-date MTO program",
        "Complete the In-Class training in 4-Days",
        "4 Month reduction on road test waiting period",
        "Classes are from 9am to 2:30pm",
        "Free pick up and drop off from home for In-Car lessons",
      ],
      icon: Users,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Online E-Learning Course",
      description:
        "Students that prefer to learn at their own pace our NEW online E-learning course is the best option for you! With our new online course you can complete the 20 hours of In-Class training at your own convenience. Our online E-learning course will make you one of the Top drivers on the road!",
      image: "/images/courses-v1-3.jpg",
      duration: "Self-Paced",
      schedule: "24/7 Access",
      environment: "Online Learning",
      benefits: [
        "Complete the Online course from the comfort of your own home",
        "Up-to-date MTO information",
        "Interactive activities",
        "MTO Approved tests",
        "Technical support 24/7",
        "4 month reduction on road test waiting period",
        "Free pick up and drop off from home for In-Car lessons",
      ],
      icon: Laptop,
      color: "bg-green-500",
    },
  ];

  return (
    <section className="relative w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold uppercase inline-block mb-4">
            COURSES
          </div>
          <h2 className="pathway-extreme text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl mb-6">
            Choose Your Learning Path
          </h2>
          <p className="onest text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you prefer interactive classroom learning or the flexibility
            of online courses, we have the perfect option to fit your schedule
            and learning style.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Course Image */}
              <div className="relative h-64">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                {/* Course Type Badge */}
                <div className="absolute top-4 left-4">
                  <div
                    className={`${course.color} text-white px-3 py-1 rounded-md text-xs font-semibold uppercase`}
                  >
                    {course.environment}
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-8">
                {/* Course Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${course.color} text-white p-3 rounded-lg`}>
                    <course.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="pathway-extreme text-2xl font-bold text-gray-800">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Award className="h-4 w-4" />
                        <span>{course.schedule}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Description */}
                <p className="onest text-gray-600 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Benefits */}
                <div>
                  <h4 className="pathway-extreme text-lg font-semibold text-gray-800 mb-4">
                    Benefits of{" "}
                    {course.title.includes("Online")
                      ? "Online E-Learning"
                      : "Classroom Learning"}
                    :
                  </h4>
                  <div className="space-y-3">
                    {course.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="onest text-gray-600 text-sm leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Features */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-red-600" />
                      <span className="pathway-extreme text-sm font-semibold text-gray-800">
                        Duration
                      </span>
                    </div>
                    <p className="onest text-sm text-gray-600">
                      {course.duration}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-red-600" />
                      <span className="pathway-extreme text-sm font-semibold text-gray-800">
                        Schedule
                      </span>
                    </div>
                    <p className="onest text-sm text-gray-600">
                      {course.schedule}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info - Full Width */}
      <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 p-8 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="pathway-extreme text-2xl font-bold text-white mb-4">
            Both Courses Include
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-center justify-center gap-3">
              <Car className="h-6 w-6 text-white" />
              <span className="onest text-white">Free Pickup & Drop-off</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award className="h-6 w-6 text-white" />
              <span className="onest text-white">4 Month Reduction</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Home className="h-6 w-6 text-white" />
              <span className="onest text-white">MTO Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

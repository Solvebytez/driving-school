"use client";

import { Check, X, Users, Laptop, Clock, Award, Home, Car } from "lucide-react";

export function CourseComparisonSection() {
  const comparisonData = [
    {
      feature: "Learning Environment",
      inClass: "Interactive Classroom",
      online: "Online from Home",
      inClassIcon: Users,
      onlineIcon: Laptop,
    },
    {
      feature: "Duration",
      inClass: "4 Days (9 AM - 2:30 PM)",
      online: "Self-Paced (24/7 Access)",
      inClassIcon: Clock,
      onlineIcon: Clock,
    },
    {
      feature: "MTO Approved",
      inClass: "Yes",
      online: "Yes",
      inClassIcon: Award,
      onlineIcon: Award,
    },
    {
      feature: "4 Month Reduction",
      inClass: "Yes",
      online: "Yes",
      inClassIcon: Check,
      onlineIcon: Check,
    },
    {
      feature: "Free Pickup & Drop-off",
      inClass: "Yes",
      online: "Yes",
      inClassIcon: Car,
      onlineIcon: Car,
    },
    {
      feature: "Interactive Activities",
      inClass: "Yes",
      online: "Yes",
      inClassIcon: Check,
      onlineIcon: Check,
    },
    {
      feature: "Technical Support",
      inClass: "During Class Hours",
      online: "24/7 Support",
      inClassIcon: Clock,
      onlineIcon: Check,
    },
    {
      feature: "Up-to-date MTO Program",
      inClass: "Yes",
      online: "Yes",
      inClassIcon: Award,
      onlineIcon: Award,
    },
  ];

  return (
    <section className="relative w-full bg-gray-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold uppercase inline-block mb-4">
            COMPARISON
          </div>
          <h2 className="pathway-extreme text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl mb-6">
            Course Comparison
          </h2>
          <p className="onest text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Compare our two course options to find the perfect fit for your
            learning style and schedule.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-100 border-b">
            <div className="grid grid-cols-3 gap-4 p-6">
              <div className="pathway-extreme text-lg font-semibold text-gray-800">
                Features
              </div>
              <div className="text-center">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mb-2">
                  <Users className="h-5 w-5 inline mr-2" />
                  4-Day In-Class
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-500 text-white px-4 py-2 rounded-md inline-block mb-2">
                  <Laptop className="h-5 w-5 inline mr-2" />
                  Online E-Learning
                </div>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="pathway-extreme text-sm font-semibold text-gray-800 flex items-center">
                  {item.feature}
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    {item.inClass === "Yes" ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : item.inClass === "No" ? (
                      <X className="h-5 w-5 text-red-500" />
                    ) : (
                      <item.inClassIcon className="h-5 w-5 text-blue-500" />
                    )}
                    <span className="onest text-sm text-gray-600">
                      {item.inClass}
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    {item.online === "Yes" ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : item.online === "No" ? (
                      <X className="h-5 w-5 text-red-500" />
                    ) : (
                      <item.onlineIcon className="h-5 w-5 text-green-500" />
                    )}
                    <span className="onest text-sm text-gray-600">
                      {item.online}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendation Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* In-Class Recommendation */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-500 text-white p-3 rounded-lg">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="pathway-extreme text-xl font-bold text-gray-800">
                Choose In-Class If:
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="onest text-gray-600">
                  You prefer face-to-face interaction
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="onest text-gray-600">
                  You learn better in a structured environment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="onest text-gray-600">
                  You can commit to 4 consecutive days
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="onest text-gray-600">
                  You enjoy group discussions and activities
                </span>
              </li>
            </ul>
          </div>

          {/* Online Recommendation */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-500 text-white p-3 rounded-lg">
                <Laptop className="h-6 w-6" />
              </div>
              <h3 className="pathway-extreme text-xl font-bold text-gray-800">
                Choose Online If:
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="onest text-gray-600">
                  You prefer learning at your own pace
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="onest text-gray-600">
                  You have a busy or irregular schedule
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="onest text-gray-600">
                  You're comfortable with online learning
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="onest text-gray-600">
                  You want 24/7 access to course materials
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

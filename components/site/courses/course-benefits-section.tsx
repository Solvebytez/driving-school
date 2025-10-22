"use client";

import {
  Award,
  Clock,
  Users,
  Shield,
  Car,
  BookOpen,
  CheckCircle,
  Star,
} from "lucide-react";

export function CourseBenefitsSection() {
  const benefits = [
    {
      icon: Award,
      title: "MTO Approved",
      description:
        "Both our in-class and online courses are fully approved by the Ministry of Transportation Ontario, ensuring you receive the highest quality education.",
    },
    {
      icon: Clock,
      title: "4 Month Reduction",
      description:
        "Complete either course and reduce your road test waiting period by 4 months, getting you on the road faster.",
    },
    {
      icon: Car,
      title: "Free Pickup & Drop-off",
      description:
        "We provide complimentary pickup and drop-off services for all in-car lessons, making your learning experience convenient and stress-free.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Our courses emphasize defensive driving techniques and road safety awareness, creating responsible drivers for life.",
    },
    {
      icon: BookOpen,
      title: "Up-to-date Curriculum",
      description:
        "Our course materials are regularly updated to reflect the latest MTO requirements and road safety standards.",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from MTO-certified instructors with years of experience in both classroom and online teaching environments.",
    },
    {
      icon: CheckCircle,
      title: "Interactive Learning",
      description:
        "Both courses feature interactive activities, quizzes, and practical exercises to enhance your learning experience.",
    },
    {
      icon: Star,
      title: "Proven Results",
      description:
        "Our students achieve a 95% first-time pass rate, demonstrating the effectiveness of our teaching methods.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold uppercase inline-block mb-4">
            BENEFITS
          </div>
          <h2 className="pathway-extreme text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl mb-6">
            Why Choose Our Courses?
          </h2>
          <p className="onest text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive driving courses are designed to provide you with
            the knowledge, skills, and confidence needed to become a safe and
            responsible driver.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="pathway-extreme text-lg font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="onest text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Course Requirements */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="pathway-extreme text-2xl font-bold text-white mb-4">
              Course Requirements
            </h3>
            <p className="onest text-white/90 text-lg">
              Before enrolling in either course, please ensure you meet the
              following requirements:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="pathway-extreme text-lg font-semibold text-white mb-4">
                General Requirements:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="onest text-white/90">
                    Must be at least 16 years old
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="onest text-white/90">Valid G1 license</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="onest text-white/90">
                    Government-issued photo ID
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="onest text-white/90">
                    Completed registration form
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="pathway-extreme text-lg font-semibold text-white mb-4">
                For Online Course:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="onest text-white/90">
                    Reliable internet connection
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="onest text-white/90">
                    Computer, tablet, or smartphone
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="onest text-white/90">
                    Email address for course access
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="onest text-white/90">
                    Basic computer skills
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="pathway-extreme text-2xl font-bold text-gray-800 mb-4">
            Ready to Start Your Driving Journey?
          </h3>
          <p className="onest text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Choose the course that best fits your learning style and schedule.
            Both options will prepare you to become a confident, safe driver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/registration"
              className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
            >
              Enroll Now
            </a>
            <a
              href="/contact"
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-red-600 hover:text-white transition-colors"
            >
              Ask Questions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

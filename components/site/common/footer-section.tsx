"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationLinks1 = [
  "Top Courses",
  "Driving License",
  "Our Instructors",
  "Latest News",
  "Contact",
];

const navigationLinks2 = ["About", "Upcoming Events", "FAQs", "Insurance"];

export function FooterSection() {
  return (
    <footer
      className="text-white"
      style={{ backgroundColor: "var(--drivschol-black2, #111117)" }}
    >
      {/* Top Section - Logo */}
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex flex-col">
              {/* Main Logo with Road Graphic */}
              <div className="relative">
                {/* Road Graphic */}
                <div className="absolute -top-4 left-0 w-full h-8">
                  <svg viewBox="0 0 200 30" className="w-full h-full">
                    <path
                      d="M 10 25 Q 100 5 190 25"
                      stroke="#374151"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M 10 25 Q 100 5 190 25"
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>

                {/* TOP STAR Text */}
                <div className="flex items-center">
                  <span className="pathway-extreme text-3xl font-bold text-white">
                    TOP ST
                  </span>
                  {/* Red Star replacing A */}
                  <div className="relative">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="mx-1"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill="#dc2626"
                        stroke="#000"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                  <span className="pathway-extreme text-3xl font-bold text-white">
                    R
                  </span>
                </div>
              </div>

              {/* Sub-text */}
              <div className="mt-2">
                <span className="pathway-extreme text-sm font-medium text-gray-300 uppercase tracking-wide">
                  - DRIVING SCHOOL -
                </span>
              </div>
            </div>

            {/* Horizontal Line extending to the right */}
            <div className="flex-1 ml-8">
              <div className="h-px bg-gray-400/50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Navigation Links Column 1 */}
          <div>
            <ul className="space-y-3">
              {navigationLinks1.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="pathway-extreme text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links Column 2 */}
          <div>
            <ul className="space-y-3">
              {navigationLinks2.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="pathway-extreme text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info and Subscription */}
          <div>
            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-500" />
                <span className="pathway-extreme text-gray-300 text-sm">
                  6391 Elgin St. Celina, Delaware 10299
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-500" />
                <span className="pathway-extreme text-gray-300 text-sm">
                  (303) 555-0105
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span className="pathway-extreme text-gray-300 text-sm">
                  michael.mitc@example.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="border-t border-gray-700/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="pathway-extreme text-gray-400 text-sm">
              © Copyright 2025 by Drivschol HTML Template.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

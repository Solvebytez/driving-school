"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { LocationData } from "@/lib/locations";

interface ContactInfoSectionProps {
  locationData: LocationData;
}

export function ContactInfoSection({ locationData }: ContactInfoSectionProps) {
  return (
    <section className="relative w-full py-12 md:py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="pathway-extreme text-3xl font-bold text-charcoal md:text-4xl">
            Contact Information
          </h2>
          <p className="onest text-gray-600 mt-4 max-w-2xl mx-auto">
            We're here to help you with all your driving needs. Reach out to us
            using any of the methods below.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
              <Phone className="h-6 w-6 text-brand" />
            </div>
            <div>
              <h3 className="pathway-extreme font-semibold text-charcoal">
                Phone
              </h3>
              <p className="onest text-gray-600">{locationData.phone}</p>
              <p className="onest text-sm text-gray-500">
                Call us for immediate assistance
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
              <Mail className="h-6 w-6 text-brand" />
            </div>
            <div>
              <h3 className="pathway-extreme font-semibold text-charcoal">
                Email
              </h3>
              <p className="onest text-gray-600">{locationData.email}</p>
              <p className="onest text-sm text-gray-500">
                We'll respond within 24 hours
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
              <MapPin className="h-6 w-6 text-brand" />
            </div>
            <div>
              <h3 className="pathway-extreme font-semibold text-charcoal">
                Office
              </h3>
              <p className="onest text-gray-600">{locationData.address}</p>
              <p className="onest text-sm text-gray-500">
                Visit us during business hours
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-brand" />
            </div>
            <div>
              <h3 className="pathway-extreme font-semibold text-charcoal">
                Business Hours
              </h3>
              <p className="onest text-gray-600">{locationData.hours}</p>
              <p className="onest text-sm text-gray-500">
                We're here when you need us
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Button className="pathway-extreme bg-brand text-background hover:bg-brand/90 px-8 py-3 font-semibold rounded-md">
            Book Your Lesson Now
          </Button>
        </div>
      </div>
    </section>
  );
}

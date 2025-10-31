"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
import { ContactLocationDropdown } from "./location-dropdown";
import { LocationData } from "@/lib/locations";

interface ContactFormSectionProps {
  showLocationDropdown?: boolean;
  locationData: LocationData;
}

export function ContactFormSection({
  showLocationDropdown = false,
  locationData,
}: ContactFormSectionProps) {
  return (
    <section className="relative w-full py-12 md:py-16 bg-red-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="pathway-extreme text-3xl font-bold text-charcoal mb-4">
            Send Us a Message
          </h2>
          <p className="onest text-gray-600">
            Ready to start your driving journey? Send us a message and we'll get
            back to you as soon as possible.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Contact Form */}
          <div>
            <form className="space-y-6">
              {/* Location Dropdown - Only show when no location parameter */}
              {showLocationDropdown && <ContactLocationDropdown />}

              {/* Selected Location Display - Only show when location is selected */}
              {!showLocationDropdown && (
                <div className="mb-6">
                  <Label className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block">
                    Selected Location
                  </Label>
                  <div className="pathway-extreme h-12 bg-gray-100 border border-black rounded-md flex items-center px-3 text-charcoal">
                    <MapPin className="h-4 w-4 mr-2 text-brand" />
                    {locationData.name} - {locationData.address}
                  </div>
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Label
                    htmlFor="firstName"
                    className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                  >
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    className="onest h-12 border-black"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="lastName"
                    className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                  >
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    className="onest h-12 border-black"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                >
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  defaultValue={locationData.email}
                  className="onest h-12 border-black"
                />
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                >
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  defaultValue={locationData.phone}
                  className="onest h-12 border-black"
                />
              </div>

              <div>
                <Label
                  htmlFor="subject"
                  className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                >
                  Subject *
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What is this about?"
                  className="onest h-12 border-black"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                >
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your driving needs..."
                  rows={6}
                  className="onest border-black"
                />
              </div>

              <Button className="pathway-extreme bg-brand text-background hover:bg-brand/90 px-8 py-3 font-semibold rounded-md">
                Send Message
              </Button>
            </form>
          </div>

          {/* Right Column - Google Map */}
          <div>
            <div className="h-full">
              <h3 className="pathway-extreme text-xl font-bold text-charcoal mb-4">
                Find Us
              </h3>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={locationData.mapEmbed}
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Driving Hero - ${locationData.name}`}
                  className="w-full h-[500px]"
                />
              </div>

              {/* Map Info */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="pathway-extreme font-semibold text-charcoal mb-2">
                  {locationData.address}
                </h4>
                <p className="onest text-sm text-gray-600">
                  Visit us at our {locationData.name} office during business
                  hours. We're conveniently located with easy access and parking
                  available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

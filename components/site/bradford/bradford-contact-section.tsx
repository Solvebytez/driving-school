"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export function BradfordContactSection() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="pathway-extreme text-3xl font-bold text-charcoal mb-8">
              Contact Us in Bradford
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="pathway-extreme font-semibold text-charcoal">
                    Phone
                  </h3>
                  <p className="onest text-gray-600">(905)-392-1472</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="pathway-extreme font-semibold text-charcoal">
                    Address
                  </h3>
                  <p className="onest text-gray-600">
                    Bradford, Ontario
                    <br />
                    Serving the Greater Bradford Area
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
                  <p className="onest text-gray-600">
                    bradford@topstardriving.com
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
                    Hours
                  </h3>
                  <p className="onest text-gray-600">
                    Mon to Sat: 8:00 am - 7:00 pm
                    <br />
                    Sunday: 10:00 am - 5:00 pm
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button className="pathway-extreme bg-brand text-background hover:bg-brand/90 px-8 py-3 font-semibold rounded-md flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Book Your Lesson Now
              </Button>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="pathway-extreme text-2xl font-bold text-charcoal mb-6">
              We Serve Bradford & Surrounding Areas
            </h3>

            <div className="bg-gray-50 rounded-lg p-6">
              <p className="onest text-gray-600 mb-4">
                Our Bradford driving school serves students throughout the area
                including:
              </p>

              <ul className="grid grid-cols-2 gap-2 onest text-sm text-gray-600">
                <li>• Bradford West Gwillimbury</li>
                <li>• Newmarket</li>
                <li>• Aurora</li>
                <li>• East Gwillimbury</li>
                <li>• King City</li>
                <li>• Holland Landing</li>
                <li>• Mount Albert</li>
                <li>• Keswick</li>
              </ul>

              <div className="mt-6 p-4 bg-brand/10 rounded-lg">
                <p className="pathway-extreme text-sm font-semibold text-brand">
                  Free pickup and drop-off available in Bradford area!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

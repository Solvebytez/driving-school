"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CertificationFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const locations = [
    { id: "bradford", name: "Bradford" },
    { id: "markham", name: "Markham" },
    { id: "newmarket", name: "Newmarket" },
    { id: "richmond-hill", name: "Richmond Hill" },
    { id: "scarborough", name: "Scarborough" },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 bg-red-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Form */}
          <div>
            {/* Decorative Lines */}
            <div className="flex gap-1 mb-6">
              <div className="w-8 h-1 bg-red-500 rounded"></div>
              <div className="w-6 h-1 bg-red-500 rounded"></div>
            </div>

            {/* Instruction Text */}
            <div className="mb-8">
              <p className="onest text-gray-700 leading-relaxed">
                Please enter your first and last name as it appears on your
                Ontario drivers licence and location where you completed your
                course. Please allow up to 2 weeks from your last In-car lesson
                to check the status of your certification.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid gap-4 grid-cols-2">
                <div>
                  <Label
                    htmlFor="firstName"
                    className="onest text-sm font-medium text-gray-700 mb-2 block"
                  >
                    First Name*
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="onest h-12 border-gray-300 py-3 px-3 min-h-[48px] bg-gray-50"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="lastName"
                    className="onest text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Last Name*
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="onest h-12 border-gray-300 py-3 px-3 min-h-[48px] bg-gray-50"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              {/* Location Dropdown */}
              <div className="w-full">
                <Label
                  htmlFor="location"
                  className="onest text-sm font-medium text-gray-700 mb-2 block"
                >
                  Location*
                </Label>
                <Select
                  value={formData.location}
                  onValueChange={(value) =>
                    handleInputChange("location", value)
                  }
                >
                  <SelectTrigger className="onest w-full h-12 border-gray-300 py-3 px-3 min-h-[48px] bg-gray-50">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location.id} value={location.id}>
                        {location.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="pathway-extreme w-full bg-red-600 text-white hover:bg-red-700 px-8 py-4 font-semibold rounded-md text-lg"
                >
                  Check
                </Button>
              </div>
            </form>
          </div>

          {/* Right Column - Image */}
          <div className="rounded-lg p-6 flex items-center justify-center">
            <div className="relative w-full">
              <Image
                src="/images/certification-v1-1.jpg"
                alt="Driving instructor and student in car"
                width={400}
                height={300}
                className="object-cover rounded-lg shadow-lg w-full h-auto"
                priority
              />
              {/* Overlay with some styling to match the image description */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

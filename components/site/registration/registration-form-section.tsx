"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export function RegistrationFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    majorIntersection: "",
    courseStartDate: "",
    howDidYouHear: "",
    location: "",
    fullCourse: "",
    coursePackage: "",
    additionalDetails: "",
    creditCardNumber: "",
    nameOnCard: "",
    expiryDate: "",
    cvv: "",
    transactionAmount: "",
    agreeToTerms: false,
    agreeToPrivacy: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => {
      const newData = {
        ...prev,
        [field]: value,
      };

      // Reset coursePackage when fullCourse changes
      if (field === "fullCourse") {
        newData.coursePackage = "";
      }

      return newData;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Registration form submitted:", formData);
  };

  // Helper functions for package details
  const getPackageName = (packageValue: string) => {
    const packageNames: Record<string, string> = {
      basic: "Basic Package",
      premium: "Premium Package",
      ultra: "Ultra Package",
      "g1-1hour": "1 Hour G1 Lesson",
      "g1-5hours": "5 Hours G1 Lessons",
      "g1-10hours": "10 Hours G1 Lessons",
      "g2-1hour": "1 Hour G2 Lesson",
      "g2-5hours": "5 Hours G2 Lessons",
      "g2-10hours": "10 Hours G2 Lessons",
    };
    return packageNames[packageValue] || "Selected Package";
  };

  const getPackagePrice = (packageValue: string) => {
    const packagePrices: Record<string, string> = {
      basic: "$49.99",
      premium: "$89.99",
      ultra: "$124.99",
      "g1-1hour": "$40.00",
      "g1-5hours": "$200.00",
      "g1-10hours": "$400.00",
      "g2-1hour": "$45.00",
      "g2-5hours": "$225.00",
      "g2-10hours": "$450.00",
    };
    return packagePrices[packageValue] || "$0.00";
  };

  const getPackageFeatures = (packageValue: string) => {
    const packageFeatures: Record<string, string[]> = {
      basic: [
        "10 Hours of In-Car Training (1-On-1)",
        "20 Hours of In-Class Training or Online",
        "10 Hours of Homelinks",
        "Certification With The Ministry of Transportation",
        "Defensive Driving Techniques",
        "Free Pick up & Drop off",
        "Road Test Preparation",
        "Reduced Waiting Period for G2",
        "Flexible Scheduling",
      ],
      premium: [
        "15 Hours of In-Car Training (1-On-1)",
        "20 Hours of In-Class Training or Online",
        "10 Hours of Homelinks",
        "Certification With The Ministry of Transportation",
        "Use of an Instructor's car For G2 Road Test",
        "We will also book your Road Test",
        "Defensive Driving Techniques",
        "Free Pick up & Drop off",
        "Reduced Waiting Period for G2",
        "Flexible Scheduling",
      ],
      ultra: [
        "11 Hours Of In-Car Training (1-On-1)",
        "20 Hours of In-Class Training or Online",
        "10 Hours of Homelinks",
        "Certification With The Ministry of Transportation",
        "Use of an Instructor's car for G2 Road Test",
        "We will also book your Road Test",
        "Defensive Driving Techniques",
        "Free Pick up & Drop off",
        "Reduced Waiting Period for G2",
        "Flexible Scheduling",
      ],
      "g1-1hour": [
        "1 Hour of Professional In-Car Training",
        "MTO Certified Instructor",
        "G1 Exit Test Preparation",
        "Flexible Scheduling",
      ],
      "g1-5hours": [
        "5 Hours of Professional In-Car Training",
        "MTO Certified Instructor",
        "G1 Exit Test Preparation",
        "Flexible Scheduling",
      ],
      "g1-10hours": [
        "10 Hours of Professional In-Car Training",
        "MTO Certified Instructor",
        "G1 Exit Test Preparation",
        "Flexible Scheduling",
      ],
      "g2-1hour": [
        "1 Hour of Professional In-Car Training",
        "MTO Certified Instructor",
        "G2 Exit Test Preparation",
        "Flexible Scheduling",
      ],
      "g2-5hours": [
        "5 Hours of Professional In-Car Training",
        "MTO Certified Instructor",
        "G2 Exit Test Preparation",
        "Flexible Scheduling",
      ],
      "g2-10hours": [
        "10 Hours of Professional In-Car Training",
        "MTO Certified Instructor",
        "G2 Exit Test Preparation",
        "Flexible Scheduling",
      ],
    };
    return (
      packageFeatures[packageValue] || [
        "Package features will be displayed here",
      ]
    );
  };

  return (
    <section className="relative w-full py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="mb-8">
          <h1 className="pathway-extreme text-2xl font-bold text-charcoal">
            Please fill in all required fields with your details, you will
            receive an email confirming your package.
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Registration Form */}
          <div className="bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Details Section */}
              <div className="space-y-4">
                <h3 className="pathway-extreme text-lg font-semibold text-charcoal">
                  Personal Details
                </h3>

                {/* First Name and Last Name */}
                <div className="grid gap-4 grid-cols-2">
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
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="onest h-12 border-gray-300 py-3 px-3 min-h-[48px]"
                      required
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
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="onest h-12 border-gray-300 py-3 px-3 min-h-[48px]"
                      required
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid gap-4 grid-cols-2">
                  <div>
                    <Label
                      htmlFor="email"
                      className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="onest h-12 border-gray-300 py-3 px-3 min-h-[48px]"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                    >
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="onest h-12 border-gray-300 py-3 px-3 min-h-[48px]"
                      required
                    />
                  </div>
                </div>

                {/* Major Intersection and Course Start Date */}
                <div className="grid gap-4 grid-cols-2">
                  <div>
                    <Label
                      htmlFor="majorIntersection"
                      className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                    >
                      Major Intersection *
                    </Label>
                    <Input
                      id="majorIntersection"
                      type="text"
                      placeholder="Enter major intersection"
                      value={formData.majorIntersection || ""}
                      onChange={(e) =>
                        handleInputChange("majorIntersection", e.target.value)
                      }
                      className="onest h-12 border-gray-300 py-3 px-3 min-h-[48px]"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="courseStartDate"
                      className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                    >
                      Course Start Date *
                    </Label>
                    <Input
                      id="courseStartDate"
                      type="date"
                      value={formData.courseStartDate || ""}
                      onChange={(e) =>
                        handleInputChange("courseStartDate", e.target.value)
                      }
                      className="onest h-12 border-gray-300 py-3 px-3 min-h-[48px]"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Package Details Section */}
              <div className="space-y-4">
                <h3 className="pathway-extreme text-lg font-semibold text-charcoal">
                  Package Details
                </h3>

                {/* Payment Notice */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="onest text-sm text-red-700">
                    <strong>Please note:</strong> Driving Hero will
                    only take a $50 deposit at the time of registration for
                    Online Courses, *Full payment for Private Lesson Packages
                    will be required online
                  </p>
                </div>

                {/* How did you hear about us */}
                <div className="w-full">
                  <Label
                    htmlFor="howDidYouHear"
                    className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                  >
                    How did you hear about us?
                  </Label>
                  <Select
                    value={formData.howDidYouHear}
                    onValueChange={(value) =>
                      handleInputChange("howDidYouHear", value)
                    }
                  >
                    <SelectTrigger className="onest h-12 border-gray-300 w-full py-3 px-3 min-h-[48px]">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="referral">
                        Friend/Family Referral
                      </SelectItem>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Select Location */}
                <div className="w-full">
                  <Label
                    htmlFor="location"
                    className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                  >
                    Select Location *
                  </Label>
                  <Select
                    value={formData.location}
                    onValueChange={(value) =>
                      handleInputChange("location", value)
                    }
                  >
                    <SelectTrigger className="onest h-12 border-gray-300 w-full py-3 px-3 min-h-[48px]">
                      <SelectValue placeholder="Choose your location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bradford">Bradford</SelectItem>
                      <SelectItem value="markham">Markham</SelectItem>
                      <SelectItem value="newmarket">Newmarket</SelectItem>
                      <SelectItem value="richmond-hill">
                        Richmond Hill
                      </SelectItem>
                      <SelectItem value="scarborough">Scarborough</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Choose Package Type */}
                <div className="w-full">
                  <Label
                    htmlFor="fullCourse"
                    className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                  >
                    Choose Package type *
                  </Label>
                  <Select
                    value={formData.fullCourse}
                    onValueChange={(value) =>
                      handleInputChange("fullCourse", value)
                    }
                  >
                    <SelectTrigger className="onest h-12 border-gray-300 w-full py-3 px-3 min-h-[48px]">
                      <SelectValue placeholder="Choose Package type*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full Course">Full Course</SelectItem>
                      <SelectItem value="Private lessons">
                        Private lessons
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Conditional Package Selection */}
                {formData.fullCourse && (
                  <div className="w-full">
                    <Label
                      htmlFor="coursePackage"
                      className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                    >
                      {formData.fullCourse === "Full Course"
                        ? "Choose Full Course Package"
                        : "Choose Private Lesson Package"}
                    </Label>
                    <Select
                      value={formData.coursePackage}
                      onValueChange={(value) =>
                        handleInputChange("coursePackage", value)
                      }
                    >
                      <SelectTrigger className="onest h-12 border-gray-300 w-full py-3 px-3 min-h-[48px]">
                        <SelectValue
                          placeholder={
                            formData.fullCourse === "Full Course"
                              ? "Select course package"
                              : "Select lesson package"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {formData.fullCourse === "Full Course" ? (
                          // Full Course Package Options
                          <>
                            <SelectItem value="basic">
                              Basic Package - $49.99
                            </SelectItem>
                            <SelectItem value="premium">
                              Premium Package - $89.99
                            </SelectItem>
                            <SelectItem value="ultra">
                              Ultra Package - $124.99
                            </SelectItem>
                          </>
                        ) : (
                          // Private Lessons Package Options
                          <>
                            <SelectItem value="g1-1hour">
                              1 Hour G1 Lesson - $40.00
                            </SelectItem>
                            <SelectItem value="g1-5hours">
                              5 Hours G1 Lessons - $200.00
                            </SelectItem>
                            <SelectItem value="g1-10hours">
                              10 Hours G1 Lessons - $400.00
                            </SelectItem>
                            <SelectItem value="g2-1hour">
                              1 Hour G2 Lesson - $45.00
                            </SelectItem>
                            <SelectItem value="g2-5hours">
                              5 Hours G2 Lessons - $225.00
                            </SelectItem>
                            <SelectItem value="g2-10hours">
                              10 Hours G2 Lessons - $450.00
                            </SelectItem>
                          </>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Additional Details */}
                <div className="w-full">
                  <Label
                    htmlFor="additionalDetails"
                    className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                  >
                    Please include any details needed I.E Road test date, time,
                    DriveTest Location
                  </Label>
                  <Textarea
                    id="additionalDetails"
                    placeholder="Enter any additional details..."
                    value={formData.additionalDetails}
                    onChange={(e) =>
                      handleInputChange("additionalDetails", e.target.value)
                    }
                    rows={4}
                    className="onest border-gray-300 w-full"
                  />
                </div>
              </div>

              {/* Payment Details Section */}
              <div className="space-y-4">
                <h3 className="pathway-extreme text-lg font-semibold text-charcoal">
                  Payment Details
                </h3>

                {/* Credit Card Number */}
                <div className="w-full">
                  <Label
                    htmlFor="creditCardNumber"
                    className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                  >
                    Credit Card Number *
                  </Label>
                  <Input
                    id="creditCardNumber"
                    type="text"
                    placeholder="Format - 4124939999999990"
                    value={formData.creditCardNumber}
                    onChange={(e) =>
                      handleInputChange("creditCardNumber", e.target.value)
                    }
                    className="onest h-12 border-gray-300 py-3 px-3 min-h-[48px]"
                    required
                  />
                </div>

                {/* Name on Credit Card */}
                <div className="w-full">
                  <Label
                    htmlFor="nameOnCard"
                    className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                  >
                    Name on Credit Card *
                  </Label>
                  <Input
                    id="nameOnCard"
                    type="text"
                    placeholder="Enter name as it appears on card"
                    value={formData.nameOnCard}
                    onChange={(e) =>
                      handleInputChange("nameOnCard", e.target.value)
                    }
                    className="onest h-12 border-gray-300 py-3 px-3 min-h-[48px]"
                    required
                  />
                </div>

                {/* Expiry Date and CVV */}
                <div className="grid gap-4 grid-cols-2">
                  <div>
                    <Label
                      htmlFor="expiryDate"
                      className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                    >
                      Expiry date: mm/yy
                    </Label>
                    <Input
                      id="expiryDate"
                      type="text"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) =>
                        handleInputChange("expiryDate", e.target.value)
                      }
                      className="onest h-12 border-gray-300 py-3 px-3 min-h-[48px]"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="cvv"
                      className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                    >
                      CVV *
                    </Label>
                    <Input
                      id="cvv"
                      type="text"
                      placeholder="Format - 123"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange("cvv", e.target.value)}
                      className="onest h-12 border-gray-300 py-3 px-3 min-h-[48px]"
                      required
                    />
                  </div>
                </div>

                {/* Transaction Amount */}
                <div className="w-full">
                  <Label
                    htmlFor="transactionAmount"
                    className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block"
                  >
                    Transaction Amount:
                  </Label>
                  <Input
                    id="transactionAmount"
                    type="text"
                    placeholder="Amount will be calculated based on selected package"
                    value={formData.transactionAmount}
                    onChange={(e) =>
                      handleInputChange("transactionAmount", e.target.value)
                    }
                    className="onest h-12 border-gray-300 py-3 px-3 min-h-[48px]"
                    readOnly
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="pathway-extreme w-full bg-brand text-background hover:bg-brand/90 px-8 py-4 font-semibold rounded-md text-lg"
                >
                  Submit Registration
                </Button>
              </div>
            </form>
          </div>

          {/* Right Column - Dynamic Package Details */}
          <div className="bg-gray-50 rounded-lg p-6">
            {formData.coursePackage ? (
              // Show selected package details using exact card design
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 bg-white flex flex-col">
                {/* Section 1: Price Header */}
                <div className="p-6 rounded-t-lg bg-white">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-red-500">
                      <span className="text-2xl">$</span>
                      {
                        getPackagePrice(formData.coursePackage)
                          .replace("$", "")
                          .split(".")[0]
                      }
                      <span className="text-2xl">
                        .
                        {
                          getPackagePrice(formData.coursePackage)
                            .replace("$", "")
                            .split(".")[1]
                        }
                      </span>
                      <span className="text-sm text-gray-500 ml-2">
                        {formData.fullCourse === "Full Course"
                          ? "per Course"
                          : "per Lesson"}
                      </span>
                    </h2>
                  </div>
                </div>

                {/* Section 2: Package Info */}
                <div className="p-6 bg-gray-100">
                  <h4 className="pathway-extreme text-xl font-bold mb-1 text-charcoal">
                    {getPackageName(formData.coursePackage)}
                  </h4>
                  <p className="onest text-sm text-gray-600">
                    {formData.fullCourse === "Full Course"
                      ? "Complete driving course package"
                      : "Professional driving lesson package"}
                  </p>
                </div>

                {/* Section 3: Features */}
                <div className="p-6 bg-white flex-1">
                  <div className="space-y-0">
                    {getPackageFeatures(formData.coursePackage).map(
                      (feature, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center py-3">
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <div className="w-2 h-2 bg-green-500 transform rotate-45"></div>
                              </div>
                              <span className="onest text-sm text-gray-600">
                                {feature}
                              </span>
                            </div>
                          </div>
                          {index <
                            getPackageFeatures(formData.coursePackage).length -
                              1 && <div className="h-px bg-gray-200" />}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : (
              // Default content when no package selected
              <>
                <h3 className="pathway-extreme text-lg font-semibold text-charcoal mb-4">
                  Package Details
                </h3>
                <p className="onest text-sm text-gray-600 mb-6">
                  Select a package from the dropdown to see detailed information
                  and features.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="pathway-extreme text-sm font-semibold text-charcoal mb-1">
                        MTO Certified Instructors
                      </h4>
                      <p className="onest text-xs text-gray-600">
                        All our instructors are certified by the Ministry of
                        Transportation Ontario
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="pathway-extreme text-sm font-semibold text-charcoal mb-1">
                        Flexible Scheduling
                      </h4>
                      <p className="onest text-xs text-gray-600">
                        Choose from morning, afternoon, evening, or weekend
                        sessions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
                  <h4 className="pathway-extreme text-sm font-semibold text-charcoal mb-2">
                    Need Help?
                  </h4>
                  <p className="onest text-xs text-gray-600 mb-3">
                    Have questions about our courses or packages? Contact us:
                  </p>
                  <div className="space-y-2">
                    <p className="onest text-xs text-gray-600">
                      📞 <strong>Phone:</strong> (905)-392-1472
                    </p>
                    <p className="onest text-xs text-gray-600">
                      📧 <strong>Email:</strong> info@drivinghero.com
                    </p>
                    <p className="onest text-xs text-gray-600">
                      🕒 <strong>Hours:</strong> Mon-Sat 8:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

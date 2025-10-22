"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BreadcrumbHero } from "@/components/site/common/breadcrumb-hero";
import { ContactInfoSection } from "@/components/site/contact/contact-info-section";
import { ContactFormSection } from "@/components/site/contact/contact-form-section";
import { ContactLocationDropdown } from "@/components/site/contact/location-dropdown";
import { useLocationStore } from "@/lib/stores/location-store";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const { currentLocation, setLocation, getLocationData } = useLocationStore();

  // Get location data based on URL parameter only
  const urlLocation = searchParams.get("location");
  const locationData = urlLocation
    ? getLocationData(urlLocation)
    : getLocationData("bradford");

  // Sync URL query parameter with store
  useEffect(() => {
    const locationParam = searchParams.get("location");
    if (locationParam && locationParam !== currentLocation) {
      setLocation(locationParam);
    } else if (!locationParam && currentLocation) {
      // Reset location if no query parameter and there's a stored location
      setLocation("");
    }
  }, [searchParams, currentLocation, setLocation]);

  // Get the actual location from URL only (don't use store for contact page)
  const activeLocation = urlLocation;

  return (
    <main>
      <BreadcrumbHero
        leftText={
          activeLocation ? `Contact Us - ${locationData.name}` : "Contact Us"
        }
        rightText={
          activeLocation
            ? `Home - Contact Us - ${locationData.name}`
            : "Home - Contact Us"
        }
        backgroundImage="/modern-car-interior-driving.jpg"
      />
      <ContactInfoSection locationData={locationData} />
      <ContactFormSection
        showLocationDropdown={!urlLocation}
        locationData={locationData}
      />
    </main>
  );
}

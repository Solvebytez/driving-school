"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocationStore } from "@/lib/stores/location-store";

export function useLocationReset() {
  const pathname = usePathname();
  const { resetLocation } = useLocationStore();

  useEffect(() => {
    // Reset location when navigating to contact page without location parameter
    // or when navigating away from contact page
    if (pathname === "/contact") {
      // Reset location when visiting contact page directly (no query parameter)
      resetLocation();
    } else if (pathname !== "/contact") {
      // Reset location when navigating away from contact page
      resetLocation();
    }
  }, [pathname, resetLocation]);
}

"use client";

import { useLocationReset } from "@/lib/hooks/use-location-reset";

interface LocationResetProviderProps {
  children: React.ReactNode;
}

export function LocationResetProvider({
  children,
}: LocationResetProviderProps) {
  // This hook will reset location when navigating away from contact page
  useLocationReset();

  return <>{children}</>;
}







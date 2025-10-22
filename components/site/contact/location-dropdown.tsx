"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const locationOptions = [
  { id: "bradford", name: "Bradford" },
  { id: "markham", name: "Markham" },
  { id: "newmarket", name: "Newmarket" },
  { id: "richmond-hill", name: "Richmond Hill" },
  { id: "scarborough", name: "Scarborough" },
];

export function ContactLocationDropdown() {
  const [open, setOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const handleLocationSelect = (locationId: string) => {
    const location = locationOptions.find((loc) => loc.id === locationId);
    if (location) {
      setSelectedLocation(location);
    }
    setOpen(false);
  };

  return (
    <div className="mb-8">
      <label className="pathway-extreme text-sm font-semibold text-charcoal mb-2 block">
        Select Location *
      </label>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button className="pathway-extreme w-full h-12 bg-white border-black text-charcoal hover:bg-gray-50 justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>
                {selectedLocation
                  ? selectedLocation.name
                  : "Choose your location"}
              </span>
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full min-w-[200px]" align="start">
          {locationOptions.map((location) => (
            <DropdownMenuItem
              key={location.id}
              className="pathway-extreme cursor-pointer"
              onClick={() => handleLocationSelect(location.id)}
            >
              <span className="w-full">{location.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

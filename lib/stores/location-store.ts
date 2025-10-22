import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  LocationData,
  locations,
  defaultLocation,
  getLocationData,
} from "../locations";

interface LocationStore {
  currentLocation: string;
  setLocation: (location: string) => void;
  resetLocation: () => void;
  getLocationData: () => LocationData;
  getDefaultLocation: () => string;
  getAllLocations: () => Record<string, LocationData>;
}

export const useLocationStore = create<LocationStore>()(
  persist(
    (set, get) => ({
      currentLocation: "",

      setLocation: (location: string) => {
        // Validate location exists, fallback to default if not
        const validLocation = locations[location] ? location : defaultLocation;
        set({ currentLocation: validLocation });
      },

      resetLocation: () => {
        set({ currentLocation: "" });
      },

      getLocationData: () => {
        const { currentLocation } = get();
        return currentLocation
          ? getLocationData(currentLocation)
          : getLocationData(defaultLocation);
      },

      getDefaultLocation: () => defaultLocation,

      getAllLocations: () => locations,
    }),
    {
      name: "location-storage", // unique name for localStorage key
      partialize: (state) => ({ currentLocation: state.currentLocation }), // only persist currentLocation
    }
  )
);

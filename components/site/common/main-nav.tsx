"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Phone, UserPlus, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocationStore } from "@/lib/stores/location-store";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "#", hasDropdown: true },
  { label: "Courses", href: "/courses" },
  { label: "FAQ", href: "/faq" },
  { label: "Check Certification", href: "/check-certification" },
  { label: "Contact", href: "/contact" },
];

const locationOptions = [
  { id: "bradford", name: "Bradford" },
  { id: "markham", name: "Markham" },
  { id: "newmarket", name: "Newmarket" },
  { id: "richmond-hill", name: "Richmond Hill" },
  { id: "scarborough", name: "Scarborough" },
];

export function MainNav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { currentLocation, setLocation, getLocationData } = useLocationStore();
  const currentLocationData = getLocationData();

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="relative flex items-center">
        {/* Main container */}
        <div className="mx-auto max-w-7xl px-4 flex-1">
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="#" className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-brand">
                <div className="h-2 w-5 rounded-full bg-brand" />
              </div>
              <span className="sr-only">Brand</span>
            </Link>

            {/* Center Nav */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {nav.map((n) => (
                  <li key={n.label}>
                    {n.hasDropdown ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="pathway-extreme text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground flex items-center gap-1">
                            {n.label}
                            <ChevronDown className="h-3 w-3" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48">
                          {locationOptions.map((location) => (
                            <DropdownMenuItem
                              key={location.id}
                              className="pathway-extreme cursor-pointer"
                              onClick={() => {
                                setLocation(location.id);
                                router.push(`/${location.id}`);
                              }}
                            >
                              <span className="w-full">{location.name}</span>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <a
                        href={n.href}
                        className="pathway-extreme text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {n.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-4">
              {/* Phone block */}
              <div className="hidden items-center gap-3 rounded-md bg-charcoal px-4 py-2 text-background lg:flex">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-brand/20">
                  <Phone className="h-4 w-4 text-brand" />
                </span>
                <div className="leading-none">
                  <p className="pathway-extreme text-[11px] opacity-80">
                    Call to Questions
                  </p>
                  <p className="pathway-extreme text-sm font-bold">
                    (303) 555-0105
                  </p>
                </div>
              </div>

              {/* Register CTA button */}
              <Button
                asChild
                className="pathway-extreme hidden items-center gap-2 rounded-md bg-brand px-16 py-6 font-semibold text-background hover:bg-brand/90 md:inline-flex"
              >
                <Link href="/registration">
                  <UserPlus className="h-4 w-4" />
                  <span>Register</span>
                </Link>
              </Button>

              {/* Mobile menu */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button size="icon" variant="outline" aria-label="Open menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-72">
                  <nav className="mt-8">
                    <ul className="grid gap-4">
                      {nav.map((n) => (
                        <li key={n.label}>
                          {n.hasDropdown ? (
                            <div>
                              <div className="pathway-extreme block rounded-md px-2 py-2 text-base font-semibold text-foreground">
                                {n.label}
                              </div>
                              <ul className="ml-4 space-y-2 mt-2">
                                {locationOptions.map((location) => (
                                  <li key={location.id}>
                                    <button
                                      className="pathway-extreme block rounded-md px-2 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted w-full text-left"
                                      onClick={() => {
                                        setLocation(location.id);
                                        setOpen(false);
                                        router.push(`/${location.id}`);
                                      }}
                                    >
                                      {location.name}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <a
                              className="pathway-extreme block rounded-md px-2 py-2 text-base font-semibold hover:bg-muted"
                              href={n.href}
                              onClick={() => setOpen(false)}
                            >
                              {n.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                    {/* Mobile Register button */}
                    <div className="mt-6">
                      <Button
                        asChild
                        className="pathway-extreme w-full items-center gap-2 bg-brand text-background hover:bg-brand/90"
                      >
                        <Link
                          href="/registration"
                          onClick={() => setOpen(false)}
                        >
                          <UserPlus className="h-4 w-4" />
                          <span>Register</span>
                        </Link>
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Location Dropdown - Centered on mobile, extreme right on desktop */}
        <div className="absolute top-0 h-20 flex items-center left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 md:pr-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="pathway-extreme flex items-center gap-2 px-3 py-2 h-auto bg-white/80 hover:bg-white/90 border border-gray-200 rounded-lg shadow-sm sm:px-4"
              >
                <MapPin className="h-4 w-4 text-brand" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-brand font-semibold hidden sm:block">
                    Select Location
                  </span>
                  <span className="text-xs sm:text-sm text-charcoal font-medium">
                    {currentLocation
                      ? currentLocationData.name
                      : "Select Location"}
                  </span>
                </div>
                <ChevronDown className="h-4 w-4 text-charcoal" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48 md:align-end">
              {locationOptions.map((location) => (
                <DropdownMenuItem
                  key={location.id}
                  onClick={() => {
                    setLocation(location.id);
                    router.push(`/contact?location=${location.id}`);
                  }}
                  className="pathway-extreme cursor-pointer"
                >
                  <span className="w-full">{location.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

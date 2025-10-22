"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Paintbrush as Pinterest,
  Clock,
  MapPin,
  Mail,
} from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-brand text-background text-xs">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-10 items-center justify-between gap-4">
          {/* Left: Social */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              aria-label="Facebook"
              href="#"
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              aria-label="Twitter"
              href="#"
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              aria-label="Pinterest"
              href="#"
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <Pinterest className="h-4 w-4" />
            </a>
            <a
              aria-label="Instagram"
              href="#"
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          {/* Center: Hours */}
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="pathway-extreme font-medium">
              Mon to Sat: 8.00 am - 7.00 pm
            </span>
          </div>

          {/* Right: Location + Email (collapse on small) */}
          <div className="hidden items-center gap-6 sm:flex">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="pathway-extreme">
                30 Commercial Road Fratton, Australia
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="pathway-extreme">needhelp@company.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

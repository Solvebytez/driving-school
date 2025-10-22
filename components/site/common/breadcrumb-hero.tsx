"use client";

import Image from "next/image";
import Link from "next/link";

interface BreadcrumbHeroProps {
  leftText: string; // Main title text
  rightText: string; // Breadcrumb text
  backgroundImage: string; // Image path
  minHeight?: string; // Optional height override (default: 220px)
  leftFontSize?: string; // Optional left text font size
  rightFontSize?: string; // Optional right text font size
}

export function BreadcrumbHero({
  leftText,
  rightText,
  backgroundImage,
  minHeight = "220px",
  leftFontSize = "text-2xl md:text-3xl lg:text-4xl",
  rightFontSize = "text-sm",
}: BreadcrumbHeroProps) {
  return (
    <section className="relative w-full" style={{ minHeight }}>
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Background image"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent md:from-background/40" />
      <div className="absolute inset-0 bg-black/50" />

      {/* Breadcrumb Navigation - Right Side */}
      <div className="absolute inset-0 z-20 flex items-center justify-end">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-end">
          <nav className={`pathway-extreme ${rightFontSize} text-white/90`}>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2 text-white">-</span>
            <span className="text-white font-medium">
              {rightText.replace("Home - ", "")}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Title - Left Side */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h1
              className={`pathway-extreme ${leftFontSize} font-bold leading-tight text-white`}
            >
              {leftText}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}


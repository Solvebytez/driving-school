"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const slides = [
  {
    src: "/images/slide-v1.jpg",
    alt: "Driving Hero Slide 1",
    title: "Professional Driving Lessons",
  },
  {
    src: "/images/slide-v2.jpg",
    alt: "Driving Hero Slide 2",
    title: "Get Your License Today",
  },
];

export function Hero() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section aria-label="Hero banner" className="relative">
      <Carousel
        opts={{ loop: true, align: "start" }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((s, i) => (
            <CarouselItem key={s.src}>
              <div className="relative w-full">
                <div className="h-[70vh] w-full md:h-[80vh] lg:h-[85vh]">
                  <Image
                    src={s.src || "/placeholder.svg"}
                    alt={s.alt}
                    fill
                    priority={i === 0}
                    className="object-cover"
                  />
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent md:from-background/40" />
                    <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4">
                      <div className="max-w-2xl rounded-xl bg-black/50 p-6 text-white shadow-lg backdrop-blur-sm border border-white/10 md:p-8">
                        <div className="space-y-4">
                          <h1 className="pathway-extreme text-pretty text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                            {s.title}
                          </h1>
                          <p className="pathway-extreme text-lg font-medium text-white/90 md:text-xl max-w-lg">
                            Professional driving instruction with MTO certified
                            instructors. Get your license with confidence.
                          </p>
                          <div className="flex items-center gap-4 pt-2">
                            <div className="h-1 w-16 bg-gradient-to-r from-brand to-brand/60 rounded-full" />
                            <div className="h-1 w-8 bg-white/30 rounded-full" />
                          </div>
                        </div>
                        <div className="mt-6">
                          <Button
                            asChild
                            className="pathway-extreme inline-flex items-center gap-2 bg-brand text-background hover:bg-brand/90 px-4 py-2 font-semibold rounded-md"
                          >
                            <Link href="/registration">
                              <UserPlus className="h-4 w-4" />
                              <span>Start Learning Today</span>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur hover:bg-background" />
        <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur hover:bg-background" />
      </Carousel>
      <div className="pointer-events-auto absolute bottom-3 left-1/2 z-20 -translate-x-1/2 md:bottom-6">
        <div
          className="hidden items-center gap-6 bg-charcoal/95 px-6 py-3 text-muted-foreground shadow-md md:flex"
          style={{ clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)" }}
          role="tablist"
          aria-label="Slide selector"
        >
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className="text-lg font-semibold tracking-widest outline-none transition-colors focus:text-foreground"
              aria-selected={current === i}
              role="tab"
            >
              <span
                className={
                  current === i ? "text-brand" : "text-muted-foreground/80"
                }
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 w-6 rounded-full ${
                current === i ? "bg-brand" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

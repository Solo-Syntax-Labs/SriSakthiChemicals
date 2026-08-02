"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

export default function HeroSlider() {
  const slides = site.heroSlides;
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  return (
    <section
      className="hero-slider"
      aria-label="Homepage slider"
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current == null) return;
        const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(delta) < 40) return;
        goTo(delta < 0 ? index + 1 : index - 1);
      }}
    >
      <div className="hero-slides">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`hero-slide ${i === index ? "is-active" : ""}`}
            aria-hidden={i !== index}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="hero-slide-image"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="hero-arrow hero-arrow-prev"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="hero-arrow hero-arrow-next"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
      >
        ›
      </button>

      <div className="hero-dots" role="tablist" aria-label="Slide indicators">
        {slides.map((src, i) => (
          <button
            key={src}
            type="button"
            role="tab"
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            className={`hero-dot ${i === index ? "is-active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

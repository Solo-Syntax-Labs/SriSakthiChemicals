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
    }, 5000);
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
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className={`hero-slide ${i === index ? "is-active" : ""}`}
            aria-hidden={i !== index}
          >
            <div className="hero-card">
              <div className="hero-card-content">
                <div className="hero-card-content-inner">
                  {slide.eyebrow ? <p className="hero-eyebrow">{slide.eyebrow}</p> : null}
                  <h2 className="hero-title">{slide.title}</h2>
                  <p className="hero-highlight">
                    <span>{slide.highlight}</span>
                  </p>
                </div>
              </div>

              <div className="hero-card-media">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="hero-slide-image"
                />
              </div>

              <div className="hero-chevron" aria-hidden>
                <span className="hero-chevron-shape hero-chevron-dark" />
                <span className="hero-chevron-shape hero-chevron-mid" />
              </div>
            </div>
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
        {slides.map((slide, i) => (
          <button
            key={slide.image}
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

"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site";

export default function PlantSlider() {
  const slides = site.plantSlides;
  const [index, setIndex] = useState(0);

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  const slide = slides[index];

  return (
    <section className="plant-section" aria-label="Plant solutions">
      <div className="plant-slide">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          sizes="100vw"
          className="plant-slide-image"
          priority={index === 0}
        />
        <div className="plant-slide-overlay">
          <div className="plant-slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
        <div className="plant-controls">
          <button
            type="button"
            aria-label="Previous plant slide"
            onClick={() => goTo(index - 1)}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next plant slide"
            onClick={() => goTo(index + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

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
    <section className="plant-section home-plant" aria-label="Plant products">
      <div className="container plant-shell">
        <div className="plant-intro">
          <p className="section-kicker">Plant products</p>
          <h2>Treatment systems built for real industrial loads</h2>
          <p>
            From effluent and sewage treatment to RO and demineralization, Indigon
            designs and supports plants that keep process water reliable.
          </p>
          <div className="plant-tabs" role="tablist" aria-label="Plant types">
            {slides.map((item, i) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={`plant-tab ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="plant-slide">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            className="plant-slide-image"
            priority={index === 0}
          />
          <div className="plant-slide-overlay">
            <div className="plant-slide-content">
              <h3>{slide.title}</h3>
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
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function ClientsSection() {
  const clients = site.clients;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth <= 480) setVisible(1);
      else if (window.innerWidth <= 768) setVisible(2);
      else if (window.innerWidth <= 1280) setVisible(3);
      else setVisible(4);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % clients.length);
    }, 2500);
    return () => window.clearInterval(timer);
  }, [clients.length]);

  const items = Array.from({ length: visible }, (_, offset) => {
    return clients[(index + offset) % clients.length];
  });

  return (
    <section className="home-clients">
      <div className="container">
        <div className="home-clients-head">
          <p className="section-kicker">Customer network</p>
          <h2>Plants that trust Indigon day after day</h2>
          <p>
            From textile and sugar mills to power and process utilities, our chemistry
            and service teams support operations that cannot afford unstable water
            programs.
          </p>
        </div>

        <div className="home-clients-track-wrap">
          <button
            type="button"
            className="client-nav client-nav-prev"
            aria-label="Previous clients"
            onClick={() =>
              setIndex((current) => (current - 1 + clients.length) % clients.length)
            }
          >
            ‹
          </button>
          <div
            className="client-track"
            style={{ ["--client-cols" as string]: String(visible) }}
          >
            {items.map((client, i) => (
              <div className="client-logo" key={`${client.src}-${i}`}>
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={220}
                  height={120}
                  className="client-logo-image"
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="client-nav client-nav-next"
            aria-label="Next clients"
            onClick={() => setIndex((current) => (current + 1) % clients.length)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

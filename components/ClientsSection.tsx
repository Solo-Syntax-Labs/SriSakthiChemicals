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
    }, 2000);
    return () => window.clearInterval(timer);
  }, [clients.length]);

  const items = Array.from({ length: visible }, (_, offset) => {
    return clients[(index + offset) % clients.length];
  });

  return (
    <section className="homepage-sec-3 home-clients">
      <div className="container">
        <div className="homepage-sec-3-cont">
          <div className="clients-heading">
            <p className="section-kicker">Trusted partnerships</p>
            <h2>Valuable Clients</h2>
            <p>
              Industries across manufacturing, power, and process plants rely on
              Indigon chemistry and technical support.
            </p>
          </div>
          <div className="logo-container">
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
      </div>
    </section>
  );
}

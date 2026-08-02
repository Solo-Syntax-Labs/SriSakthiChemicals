"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const MIN_VISIBLE_MS = 700;

export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const isFirstLoad = useRef(true);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const clearTimers = () => {
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [];
    };

    const hide = (startedAt: number) => {
      const elapsed = Date.now() - startedAt;
      const wait = Math.max(MIN_VISIBLE_MS - elapsed, 0);
      const hideTimer = window.setTimeout(() => {
        setFadeOut(true);
        const doneTimer = window.setTimeout(() => setVisible(false), 350);
        timers.current.push(doneTimer);
      }, wait);
      timers.current.push(hideTimer);
    };

    clearTimers();
    setVisible(true);
    setFadeOut(false);
    const startedAt = Date.now();

    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      let finished = false;
      const finish = () => {
        if (finished) return;
        finished = true;
        hide(startedAt);
      };

      if (document.readyState === "complete") {
        finish();
      } else {
        window.addEventListener("load", finish, { once: true });
        const fallback = window.setTimeout(finish, 2200);
        timers.current.push(fallback);
      }

      return () => {
        window.removeEventListener("load", finish);
        clearTimers();
      };
    }

    // Route changes: show loader briefly on every page
    hide(startedAt);
    return clearTimers;
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className={`page-loader${fadeOut ? " is-hiding" : ""}`}
      aria-live="polite"
      aria-busy="true"
      role="status"
    >
      <div className="page-loader-inner">
        <Image
          src="/images/loading.gif"
          alt="Loading"
          width={240}
          height={90}
          className="page-loader-gif"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}

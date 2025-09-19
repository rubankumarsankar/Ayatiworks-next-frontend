"use client";
import { useEffect, useState } from "react";

export default function ScrollControls() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow((document.documentElement.scrollTop || 0) > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toBottom = () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  return (
    <div
      className={`fixed right-4 bottom-5 z-50 flex flex-col gap-2 transition-opacity ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-live="polite"
    >
      {/* Scroll to Top */}
      <button
        onClick={toTop}
        className="rounded-full bg-primary text-primary-foreground shadow-soft px-4 py-3 text-sm font-medium hover:opacity-90"
        aria-label="Scroll to top"
        title="Top"
      >
        ↑ Top
      </button>

      {/* Scroll to Bottom */}
      <button
        onClick={toBottom}
        className="rounded-full bg-foreground/90 text-background shadow-card px-4 py-3 text-sm font-medium hover:bg-foreground"
        aria-label="Scroll to bottom"
        title="Bottom"
      >
        ↓ Bottom
      </button>
    </div>
  );
}

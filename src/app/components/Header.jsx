"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Navbar, Menu, MenuHandler, MenuList, Button, Drawer } from "@material-tailwind/react";
import { ChevronDownIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import MobileMenu from "./MobileMenu"; // <-- use the Next.js version below

/* ---------------- NAV JSON ---------------- */
export const NAV = [
  { kind: "logo", src: "/ayatiworks_logo.svg", alt: "Logo", to: "/" },
  {
    kind: "dropdown",
    title: "About",
    items: [
      { label: "About", path: "/about-us" },
      { label: "Teams", path: "/team" },
      { label: "Careers", path: "/careers" },
    ],
  },
  {
    kind: "mega",
    title: "Services",
    groups: [
      {
        heading: "Digital Marketing Services",
        basePath: "/digital-marketing-services",
        items: [
          { label: "SEO Services", path: "/digital-marketing-services/seo" },
          { label: "Social Media Marketing", path: "/digital-marketing-services/social-media-marketing" },
          { label: "Email Marketing", path: "/digital-marketing-services/email-marketing" },
          { label: "Instagram Marketing", path: "/digital-marketing-services/instagram-marketing" },
          { label: "Affiliate Marketing", path: "/digital-marketing-services/affiliate-marketing" },
          { label: "Programmatic Marketing", path: "/digital-marketing-services/programmatic-marketing" },
          { label: "Video Marketing", path: "/digital-marketing-services/video-marketing" },
        ],
      },
      {
        heading: "Content as a Service",
        basePath: "/content-as-a-service",
        items: [
          { label: "Brand Consultant", path: "/content-as-a-service/branding-service" },
          { label: "Video Creation", path: "/content-as-a-service/video-creation" },
          { label: "Multi-lingual Marketing", path: "/content-as-a-service/multilingual-marketing" },
        ],
      },
      {
        heading: "Digital PR Service",
        basePath: "/digital-pr",
        items: [
          { label: "Digital PR", path: "/digital-pr/digital-pr-services" },
          { label: "Influencer Marketing", path: "/digital-pr/influencer-marketing" },
          { label: "Online Reputation & Media Outreach", path: "/digital-pr/online-reputation-media-outreach" },
        ],
      },
      {
        heading: "Web & E-commerce",
        basePath: "/web-ecommerce",
        items: [
          { label: "UX/UI Design", path: "/web-ecommerce/ux-ui-design" },
          { label: "Web Development Services", path: "/web-ecommerce/web-development" },
          { label: "Web Maintenance Services", path: "/web-ecommerce/web-maintenance" },
          { label: "Shopify Development Services", path: "/web-ecommerce/shopify-development" },
          { label: "E-commerce", path: "/web-ecommerce/ecommerce-solutions" },
        ],
      },
    ],
  },
  {
    kind: "dropdown",
    title: "Insights",
    items: [
      { label: "Blogs", path: "/blogs" },
      { label: "Awards", path: "/awards" },
      { label: "Case Studies", path: "/case-study" },
    ],
  },
  { kind: "link", label: "Contact", path: "/contact-us" },
];

/* ---------------- UTIL ---------------- */
const cx = (...a) => a.filter(Boolean).join(" ");
const anyMatch = (paths, pathname) => paths.some((p) => pathname === p || pathname.startsWith(p + "/"));

/* ---------------- SIMPLE DROPDOWN ---------------- */
function SimpleDropdown({ title, items, active, pathname, onSelect }) {
  const [open, setOpen] = useState(false);
  const btn = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={close}>
      <Menu open={open} handler={setOpen} allowHover placement="bottom-start" offset={12}>
        <MenuHandler>
          <Button
            ref={btn}
            variant="text"
            className={cx(
              "flex items-center gap-2 text-sm border-none hover:border-none font-medium px-4 py-2 rounded-full transition",
              active || open
                ? "bg-primary font-secondary text-white font-semibold hover:text-white hover:bg-primary shadow-lg"
                : "text-black font-secondary font-semibold hover:bg-primary hover:text-white"
            )}
            aria-haspopup="menu"
            aria-expanded={open}
          >
            {title}
            <ChevronDownIcon className={cx("h-3 w-3 transition-transform", open && "-rotate-180")} />
          </Button>
        </MenuHandler>

        <MenuList className="p-2 mt-3 border-none hover:border-none rounded-xl shadow-xl min-w-[220px] ring-1">
          {items.map((item) => {
            const isItemActive = anyMatch([item.path], pathname);
            return (
              <button
                key={item.path}
                onClick={() => {
                  onSelect?.(item.path);
                  close();
                }}
                className={cx(
                  "block w-full text-left text-sm px-3 py-2  hover:border-none rounded-lg",
                  isItemActive
                    ? "bg-primary font-primary text-xl text-white"
                    : "text-black font-primary text-xl hover:bg-primary hover:text-white"
                )}
              >
                {item.label}
              </button>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
}

/* ---------------- MEGA MENU (SERVICES) ---------------- */
function MegaMenu({ title, groups, active, pathname, onSelect }) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const wrapRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
      if (e.key === "ArrowDown") setActiveIdx((i) => Math.min(i + 1, groups.length - 1));
      if (e.key === "ArrowUp") setActiveIdx((i) => Math.max(i - 1, 0));
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, groups.length]);

  const close = () => setOpen(false);

  return (
    <div ref={wrapRef} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={close}>
      <Menu open={open} handler={setOpen} allowHover placement="bottom-start" offset={12}>
        <MenuHandler>
          <Button
            ref={btnRef}
            variant="text"
            className={cx(
              "flex items-center gap-2 border-none hover:border-none text-sm font-medium px-4 py-2 rounded-full transition",
              active || open
                ? "bg-primary font-secondary font-semibold text-white shadow-xl"
                : "text-black font-secondary font-semibold hover:bg-primary hover:text-white"
            )}
            aria-haspopup="menu"
            aria-expanded={open}
          >
            {title}
            <ChevronDownIcon className={cx("h-3 w-3 transition-transform", open && "-rotate-180")} />
          </Button>
        </MenuHandler>

        <MenuList className="mt-3 p-0 bg-transparent border-none  hover:border-none shadow-none">
          <div className="flex gap-4 rounded-2xl bg-white/95 backdrop-blur p-3 shadow-xl ring-1 ring-black/5">
            {/* Left: group headings */}
            <div className="w-64 rounded-xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
              {groups.map((g, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={g.heading}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => {
                      if (g.basePath) onSelect?.(g.basePath);
                      close();
                    }}
                    className={cx(
                      "block w-full text-left px-4 py-3 text-xl font-primary  transition",
                      isActive
                        ? "bg-primary rounded-xl shadow-xl font-primary text-white"
                        : "text-black/80 hover:bg-white hover:text-secondary",
                      !g.basePath && "cursor-default"
                    )}
                  >
                    {g.heading}
                  </button>
                );
              })}
            </div>

            {/* Right: items */}
            <div className="w-80 rounded-xl bg-white shadow-xl ring-1 ring-black/5 p-3">
              {groups[activeIdx]?.basePath && (
                <button
                  onClick={() => {
                    onSelect?.(groups[activeIdx].basePath);
                    close();
                  }}
                  className="mb-2 inline-block rounded-ful px-3 py-1 text-xs font-medium text-slate-600 hover:bg-secondary font-secondary hover:text-white"
                >
                  View all {groups[activeIdx].heading}
                </button>
              )}

              {groups[activeIdx]?.items.map((it) => {
                const isItemActive = anyMatch([it.path], pathname);
                return (
                  <button
                    key={it.path}
                    onClick={() => {
                      onSelect?.(it.path);
                      close();
                    }}
                    className={cx(
                      "block w-full text-left rounded-lg px-3 py-2  transition",
                      isItemActive
                        ? "bg-primary font-primary text-xl text-white"
                        : "text-black/80 hover:bg-primary font-primary rounded-xl text-xl hover:text-white"
                    )}
                  >
                    {it.label}
                  </button>
                );
              })}
            </div>
          </div>
        </MenuList>
      </Menu>
    </div>
  );
}

/* A reliable viewport height (for iOS Safari) */
function useViewportHeight(enabled = true) {
  const [vh, setVh] = React.useState(0);
  React.useEffect(() => {
    if (!enabled) return;
    const read = () => setVh((window.visualViewport?.height ?? window.innerHeight) || 0);
    read();
    window.addEventListener("resize", read);
    window.addEventListener("orientationchange", read);
    return () => {
      window.removeEventListener("resize", read);
      window.removeEventListener("orientationchange", read);
    };
  }, [enabled]);
  return vh;
}

/* ---------------- MAIN NAV ---------------- */
export default function Header({ nav = NAV, onSelect, autoExpandMs = 2000 }) {
  const [expanded, setExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const expandTimer = useRef(null);

  const isTopActive = (entry) => {
    if (entry.kind === "link") return anyMatch([entry.path], pathname);
    if (entry.kind === "dropdown")
      return anyMatch(entry.items.map((i) => i.path), pathname);
    if (entry.kind === "mega") {
      const starts = [
        ...entry.groups.map((g) => g.basePath),
        ...entry.groups.flatMap((g) => g.items.map((i) => i.path)),
      ].filter(Boolean);
      return anyMatch(starts, pathname);
    }
    return pathname === "/" && entry.kind === "logo";
  };

  // Auto-expand desktop pill after delay on each route
  useEffect(() => {
    setExpanded(false);
    if (expandTimer.current) clearTimeout(expandTimer.current);
    expandTimer.current = setTimeout(() => setExpanded(true), autoExpandMs);
    return () => {
      if (expandTimer.current) clearTimeout(expandTimer.current);
    };
  }, [pathname, autoExpandMs]);

  // Scroll to top after route changes
  useEffect(() => {
    if (!mobileOpen) {
      const id = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      return () => cancelAnimationFrame(id);
    }
  }, [pathname, mobileOpen]);

  const routerPush = useCallback(
    (path) => {
      if (typeof onSelect === "function") onSelect(path);
      else router.push(path);
    },
    [router, onSelect]
  );

  const handleSelect = (path) => {
    routerPush(path);
    setExpanded(false);
    if (expandTimer.current) clearTimeout(expandTimer.current);
  };

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock background scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = useCallback(() => setMobileOpen(false), []);
  const toggleMenu = useCallback(() => setMobileOpen((v) => !v), []);

  // full-screen drawer height (iOS-safe)
  const drawerHeight = useViewportHeight(mobileOpen);

  return (
    <>
      {/* MOBILE: top bar + drawer trigger */}
      <div className="sm:hidden fixed top-4 left-0 right-0 z-50 px-4">
        <div className="flex items-center justify-between rounded-full bg-white/90 backdrop-blur px-3 py-2 shadow-xl">
          <Link href="/" className="shrink-0" onClick={() => handleSelect("/")}>
            <img src="/ayatiworks_logo.svg" alt="Logo" className="h-8 w-auto" />
          </Link>

          <button
            type="button"
            className="p-2 rounded-full hover:bg-black/5 transition"
            onClick={toggleMenu}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE: Drawer with full-height MobileMenu content */}
      <Drawer
        id="mobile-nav-drawer"
        open={mobileOpen}
        onClose={closeMenu}
        placement="top"
        size={drawerHeight || 600}
        overlayProps={{ className: "fixed inset-0 bg-black/45 backdrop-blur-md" }}
        className="sm:hidden p-0 bg-transparent shadow-none !overflow-hidden"
      >
        <div className="h-full w-full overflow-hidden">
          <MobileMenu
            nav={nav}
            open={mobileOpen}
            setOpen={setMobileOpen}
            pathname={pathname}
            onSelect={routerPush}
          />
        </div>
      </Drawer>

      {/* DESKTOP: centered auto-expanding pill */}
      <div className="hidden sm:flex fixed top-8 left-1/2 -translate-x-1/2 z-40 justify-center items-center">
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="backdrop-blur shadow-glow w-[110px] rounded-full p-3 hover:scale-105 transition"
          >
            <img src="/logo.png" alt="Logo" className="h-8 w-auto mx-auto" />
          </button>
        )}

        {expanded && (
          <div className="animate-[fadeInScale_.35s_ease-out]">
            <Navbar className="relative w-[760px] max-w-[95vw] backdrop-blur shadow-3xl hover:shadow-glow px-3 py-2 flex flex-wrap items-center justify-center gap-2 rounded-full">
              {/* Logo */}
              <Button variant="text" className="p-0 hover:bg-transparent">
                <Link href="/" onClick={() => handleSelect("/")}>
                  <img src="/ayatiworks_logo.svg" alt="Logo" className="h-10 w-auto" />
                </Link>
              </Button>

              {nav.map((entry) => {
                if (entry.kind === "dropdown") {
                  return (
                    <SimpleDropdown
                      key={entry.title}
                      title={entry.title}
                      items={entry.items}
                      active={isTopActive(entry)}
                      pathname={pathname}
                      onSelect={handleSelect}
                    />
                  );
                }
                if (entry.kind === "mega") {
                  return (
                    <MegaMenu
                      key={entry.title}
                      title={entry.title}
                      groups={entry.groups}
                      active={isTopActive(entry)}
                      pathname={pathname}
                      onSelect={handleSelect}
                    />
                  );
                }
                if (entry.kind === "link") {
                  const active = isTopActive(entry);
                  return (
                    <Button
                      key={entry.path}
                      variant="text"
                      onClick={() => handleSelect(entry.path)}
                      className={cx(
                        "text-sm rounded-full font-secondary font-semibold px-4 py-2 transition",
                        active ? "bg-primary text-white shadow-xl" : "text-black/80 hover:bg-primary hover:text-white"
                      )}
                    >
                      {entry.label}
                    </Button>
                  );
                }
                return null;
              })}
            </Navbar>
          </div>
        )}
      </div>
    </>
  );
}

/* Add once in your globals.css (Tailwind v4)
@layer utilities {
  @keyframes fadeInScale {
    from { opacity: 0; transform: translateY(6px) scale(.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
}
*/

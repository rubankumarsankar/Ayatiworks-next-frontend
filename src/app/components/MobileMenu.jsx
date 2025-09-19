"use client";

import Link from "next/link";

export default function MobileMenu({ nav, open, setOpen, pathname, onSelect }) {
  const closeAndGo = (path) => {
    onSelect?.(path);
    setOpen(false);
  };

  return (
    <div className="h-full w-full bg-white text-black overflow-auto p-4">
      <div className="max-w-xl mx-auto space-y-4">
        {nav.map((entry, i) => {
          if (entry.kind === "logo") {
            return (
              <Link key={i} href="/" onClick={() => closeAndGo("/")}>
                <img src={entry.src} alt={entry.alt} className="h-10 w-auto" />
              </Link>
            );
          }
          if (entry.kind === "link") {
            return (
              <button
                key={i}
                onClick={() => closeAndGo(entry.path)}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-primary hover:text-white"
              >
                {entry.label}
              </button>
            );
          }
          if (entry.kind === "dropdown") {
            return (
              <div key={i} className="border rounded-lg">
                <div className="px-3 py-2 font-semibold">{entry.title}</div>
                <div className="p-2 space-y-1">
                  {entry.items.map((it) => (
                    <button
                      key={it.path}
                      onClick={() => closeAndGo(it.path)}
                      className="block w-full text-left px-3 py-2 rounded-md hover:bg-primary hover:text-white"
                    >
                      {it.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          }
          if (entry.kind === "mega") {
            return (
              <div key={i} className="border rounded-lg">
                <div className="px-3 py-2 font-semibold">{entry.title}</div>
                <div className="p-2 grid grid-cols-1 gap-3">
                  {entry.groups.map((g) => (
                    <div key={g.heading}>
                      <button
                        onClick={() => g.basePath && closeAndGo(g.basePath)}
                        className="block w-full text-left px-3 py-2 rounded-md font-medium hover:bg-primary/10"
                      >
                        {g.heading}
                      </button>
                      <div className="mt-1 space-y-1">
                        {g.items.map((it) => (
                          <button
                            key={it.path}
                            onClick={() => closeAndGo(it.path)}
                            className="block w-full text-left px-3 py-2 rounded-md hover:bg-primary hover:text-white"
                          >
                            {it.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

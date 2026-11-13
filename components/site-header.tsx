"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { advisorLink } from "@/components/advisor-link";

const links = [
  { href: "/services", label: "What we do" },
  { href: "/work", label: "Client work" },
  { href: "/ventures", label: "Ventures" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-wrap container">
        <Link
          className="brand"
          href="/"
          aria-label="BuildGenie Labs home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name">
            BuildGenie <span>Labs</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-dark nav-cta" href={advisorLink("Start a project")}>
          Work with us <ArrowUpRight size={16} />
        </Link>

        <button
          className="mobile-menu"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              {link.label}
              <ArrowUpRight size={17} />
            </Link>
          ))}
          <Link
            className="button button-orange"
            href={advisorLink("Start a project")}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            Work with us <ArrowUpRight size={17} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

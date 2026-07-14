"use client";

import { useState } from "react";
import Link from "next/link";
import { profile } from "../data/portfolio";

const navItems = [
  ["About", "/#about"],
  ["Experience", "/#experience"],
  ["Projects", "/#projects"],
  ["Skills", "/#skills"],
  ["Education", "/#education"],
  ["Contact", "/#contact"],
] as const;

export function ThemeToggle() {
  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
      <span aria-hidden="true">◐</span>
    </button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="wordmark" aria-label={`${profile.name}, home`}>
          <span>{profile.initials}</span>
          <span className="wordmark-copy">{profile.name}</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="button button-small button-solid" href={profile.resume} download>Resume <span aria-hidden="true">↓</span></a>
          <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation">
            <span /><span />
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
        {navItems.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}<span aria-hidden="true">↗</span></Link>)}
        <a href={profile.resume} download>Download resume <span aria-hidden="true">↓</span></a>
      </nav>
    </header>
  );
}

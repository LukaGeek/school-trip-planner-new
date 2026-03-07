"use client";

import { Bus, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#destinations", label: "Destinations" },
    { href: "#services", label: "Services" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-xl dark:bg-black/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" prefetch className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-lg transition group-hover:scale-105">
              <Bus className="h-5 w-5 text-white" />
            </div>

            <span className="hidden text-lg font-bold sm:block">
              <span className="text-foreground">SchoolTrip</span>
              <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                .ge
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {link.label}

                {/* hover underline */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-linear-to-r from-blue-500 to-purple-600 transition-all duration-300 hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button className="bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-md transition hover:scale-105 hover:shadow-lg">
              Plan Your Trip
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 transition hover:bg-muted md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="animate-in fade-in slide-in-from-top-2 mt-4 rounded-2xl border border-white/20 bg-white/90 p-6 shadow-xl backdrop-blur dark:bg-black/80 md:hidden">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground transition hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}

              <Button className="mt-3 bg-linear-to-r from-blue-500 to-purple-600 text-white">
                Plan Your Trip
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

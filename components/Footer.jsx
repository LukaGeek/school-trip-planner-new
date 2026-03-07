"use client";

import React from "react";
import {
  Bus,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    company: [
      { label: "About Us", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
    services: [
      { label: "Bus Booking", href: "#services" },
      { label: "Food Catering", href: "#services" },
      { label: "Route Planning", href: "#services" },
      { label: "Custom Trips", href: "#" },
    ],
    destinations: [
      { label: "Sataflia", href: "#destinations" },
      { label: "Gelati Monastery", href: "#destinations" },
      { label: "Signagi", href: "#destinations" },
      { label: "Motsameta", href: "#destinations" },
    ],
  };

  return (
    <footer className="bg-[#0f172a] text-white relative">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold font-display">
                  SchoolTrip
                </span>
                <span className="text-xl font-bold font-display text-blue-400">
                  .ge
                </span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              Georgia&apos;s premier platform for organizing safe, educational,
              and memorable school trips. Trusted by hundreds of schools
              nationwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+995555123456"
                className="flex items-center gap-3 text-white/70 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +995 555 123 456
              </a>
              <a
                href="mailto:info@schooltrip.ge"
                className="flex items-center gap-3 text-white/70 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@schooltrip.ge
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5" />
                Tbilisi, Georgia
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-bold text-lg mb-6">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} SchoolTrip.ge. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Youtube].map((Icon, idx) => (
              <Link
                key={idx}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-linear-to-r from-blue-400 to-purple-500 flex items-center justify-center transition-all"
                aria-label={Icon.name}
              >
                <Icon className="w-5 h-5 text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

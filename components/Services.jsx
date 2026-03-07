"use client";

import {
  Bus,
  Utensils,
  MapPinned,
  Calendar,
  Shield,
  Headphones,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Bus,
    title: "Trusted Bus Partners",
    description:
      "Choose from verified drivers with detailed profiles, vehicle photos, and safety ratings.",
    features: [
      "Driver profiles & reviews",
      "Vehicle gallery",
      "Safety certifications",
      "GPS tracking",
    ],
  },
  {
    icon: Utensils,
    title: "Food & Catering",
    description:
      "Browse menus from local restaurants and caterers, perfect for student dietary needs.",
    features: [
      "Diverse menu options",
      "Dietary accommodations",
      "Bulk order discounts",
      "Fresh & healthy",
    ],
  },
  {
    icon: MapPinned,
    title: "Route Planning",
    description:
      "Get optimized travel routes with stops, timings, and educational points of interest.",
    features: [
      "Optimized itineraries",
      "Rest stop planning",
      "Time estimates",
      "Local guides",
    ],
  },
];

const additionalFeatures = [
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Book trips weeks in advance",
  },
  {
    icon: Shield,
    title: "Full Insurance",
    description: "Comprehensive trip coverage",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Help whenever you need it",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md mb-4">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm text-white/80 font-medium">
              Our Services
            </span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            Everything You Need for a{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Perfect School Trip
            </span>
          </h2>

          <p className="text-white/70 text-lg">
            From transportation to food and route planning, we handle every
            detail so teachers can focus on creating unforgettable experiences
            for students.
          </p>
        </div>

        {/* MAIN SERVICE CARDS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-white/70 mb-6 text-sm">
                  {service.description}
                </p>

                {/* FEATURES */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20">
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                      </span>

                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* ADDITIONAL FEATURES */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-10">
          <div className="grid md:grid-cols-3 gap-10">
            {additionalFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {feature.title}
                    </h4>

                    <p className="text-sm text-white/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

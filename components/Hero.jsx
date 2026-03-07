"use client";

import Image from "next/image";
import { ArrowRight, MapPin, Users, Utensils } from "lucide-react";
import heroImage from "@/assets/hero-bus-trip.jpg";
import { Button } from "./ui/Button";

export default function Hero() {
  const stats = [
    { icon: MapPin, value: "50+", label: "Destinations" },
    { icon: Users, value: "10K+", label: "Happy Students" },
    { icon: Utensils, value: "100+", label: "Menu Options" },
  ];

  return (
    <section className="relative flex min-h-screen items-center pt-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="School children on bus trip through Georgian mountains"
          fill
          priority
          className="object-cover"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/20" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            <span className="text-sm font-medium text-white/90">
              Georgia's #1 School Trip Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Plan Unforgettable{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              School Adventures
            </span>{" "}
            with Ease
          </h1>

          {/* Description */}
          <p className="mb-10 text-lg text-white/80 sm:text-xl">
            Connect with trusted bus drivers, choose perfect destinations, and
            plan delicious meals — all in one place. Make every school trip
            memorable.
          </p>

          {/* Buttons */}
          <div className="mb-14 flex flex-col gap-4 sm:flex-row">
            <Button className="group bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg transition hover:scale-105 hover:shadow-xl">
              Start Planning Now
              <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
            </Button>

            <Button className="border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20">
              View Destinations
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;

              return (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-5 w-5 text-blue-400" />
                    <span className="text-2xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>

                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-[95%]">
        <div className="flex h-12 w-8 justify-center rounded-full border border-white/30 p-2">
          <div className="h-3 w-1.5 animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}

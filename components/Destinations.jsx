"use client";

import { MapPin, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import destinationSataflia from "../assets/destination-sataflia.jpg";
import destinationGelati from "../assets/destination-gelati.jpg";
import destinationSignagi from "../assets/destination-signagi.jpg";
import destinationMotsameta from "../assets/destination-motsameta.jpg";

const destinations = [
  {
    name: "Sataflia",
    description:
      "Explore dinosaur footprints, caves and glass walkways in one of Georgia’s most fascinating natural parks.",
    image: destinationSataflia,
    duration: "Full Day",
    rating: 4.9,
    tags: ["Nature", "Science", "Adventure"],
  },
  {
    name: "Gelati Monastery",
    description:
      "A UNESCO World Heritage monastery famous for its medieval frescoes and deep Georgian history.",
    image: destinationGelati,
    duration: "Half Day",
    rating: 4.8,
    tags: ["History", "Culture", "UNESCO"],
  },
  {
    name: "Signagi",
    description:
      "The romantic city of love with panoramic views of Alazani Valley and charming streets.",
    image: destinationSignagi,
    duration: "Full Day",
    rating: 4.9,
    tags: ["Culture", "Views", "Wine Region"],
  },
  {
    name: "Motsameta",
    description:
      "A dramatic cliffside monastery surrounded by lush forest and canyon landscapes.",
    image: destinationMotsameta,
    duration: "Half Day",
    rating: 4.7,
    tags: ["Nature", "History", "Scenic"],
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative py-28 bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md mb-4">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm text-white/80 font-medium">
              Popular Destinations
            </span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            Discover Georgia’s{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Best School Trip Locations
            </span>
          </h2>

          <p className="text-white/70 text-lg">
            Carefully selected destinations combining education, adventure and
            unforgettable memories for students.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                {/* RATING */}
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/90 px-2 py-1 text-xs font-semibold shadow">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  {destination.rating}
                </div>

                {/* DURATION */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-black/90 px-3 py-1 text-xs font-medium shadow">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  {destination.duration}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  {destination.name}
                </h3>

                <p className="text-sm text-white/70 mb-4 line-clamp-2">
                  {destination.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {destination.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-md backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <Link
                  href="#"
                  className="block text-center rounded-lg bg-linear-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:scale-[1.03]"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="text-center mt-16">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 px-8 py-3 text-white font-medium shadow-lg transition hover:scale-105 hover:shadow-xl"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}

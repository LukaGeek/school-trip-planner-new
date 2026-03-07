"use client";

import React, { useState } from "react";
import {
  Users,
  GraduationCap,
  UserCheck,
  MapPin,
  Utensils,
  Calendar,
} from "lucide-react";
import { Button } from "./ui/Button";

export default function RegistrationPreview() {
  const [students, setStudents] = useState(1);
  const [parents, setParents] = useState(0);
  const [teachers, setTeachers] = useState(1);
  const [destination, setDestination] = useState("sataflia");
  const [menu, setMenu] = useState("traditional");

  const destinations = [
    { id: "sataflia", name: "Sataflia", price: 15 },
    { id: "gelati", name: "Gelati Monastery", price: 12 },
    { id: "signagi", name: "Signagi", price: 20 },
    { id: "motsameta", name: "Motsameta", price: 10 },
  ];

  const menus = [
    { id: "traditional", name: "Georgian Traditional", price: 8 },
    { id: "international", name: "International Kids", price: 10 },
    { id: "healthy", name: "Healthy Choice", price: 12 },
    { id: "vegetarian", name: "Vegetarian", price: 9 },
  ];

  const totalPeople = students + parents + teachers;
  const selectedDestination = destinations.find((d) => d.id === destination);
  const selectedMenu = menus.find((m) => m.id === menu);

  const transportCost = totalPeople * (selectedDestination?.price || 0);
  const foodCost = totalPeople * (selectedMenu?.price || 0);
  const totalCost = transportCost + foodCost;

  return (
    <section id="contact" className="py-28 bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md mb-4">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm text-white/80 font-medium">
              Quick Quote
            </span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            Plan Your{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              School Trip
            </span>{" "}
            Now
          </h2>

          <p className="text-white/70 text-lg">
            Fill in your trip details and get an instant estimate. Our team will
            contact you with a detailed proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-8">
              Trip Details
            </h3>

            {/* Participants */}
            <div className="space-y-6 mb-8">
              {[
                {
                  label: "Students",
                  value: students,
                  setValue: setStudents,
                  icon: GraduationCap,
                  min: 1,
                  bg: "bg-blue-500/10",
                  color: "text-blue-400",
                },
                {
                  label: "Parents",
                  value: parents,
                  setValue: setParents,
                  icon: Users,
                  min: 0,
                  bg: "bg-purple-500/10",
                  color: "text-purple-400",
                },
                {
                  label: "Teachers",
                  value: teachers,
                  setValue: setTeachers,
                  icon: UserCheck,
                  min: 1,
                  bg: "bg-green-500/10",
                  color: "text-green-400",
                },
              ].map(({ label, value, setValue, icon: Icon, min, bg, color }) => (
                <div
                  key={label}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/10 border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${bg}`}
                    >
                      <Icon className={`w-5 h-5 ${color}`} />
                    </div>
                    <span className="font-medium text-white">{label}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setValue(Math.max(min, value - 1))}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold text-white transition-colors"
                    >
                      −
                    </button>
                    <span className="w-12 text-center font-bold text-xl text-white">
                      {value}
                    </span>
                    <button
                      onClick={() => setValue(value + 1)}
                      className="w-8 h-8 rounded-lg bg-blue-500 hover:bg-blue-400 flex items-center justify-center font-bold text-white transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Destination */}
            <div className="mb-6">
              <label className="flex items-center gap-2 text-sm font-medium text-white mb-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                Destination
              </label>
              <div className="grid grid-cols-2 gap-3">
                {destinations.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => setDestination(dest.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      destination === dest.id
                        ? "border-blue-400 bg-blue-500/10"
                        : "border-white/20 hover:border-blue-400/50"
                    }`}
                  >
                    <span className="font-medium text-white block">{dest.name}</span>
                    <span className="text-sm text-white/70">
                      ₾{dest.price}/person
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Menu */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-white mb-3">
                <Utensils className="w-4 h-4 text-purple-400" />
                Food Menu
              </label>
              <div className="grid grid-cols-2 gap-3">
                {menus.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMenu(m.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      menu === m.id
                        ? "border-purple-400 bg-purple-500/10"
                        : "border-white/20 hover:border-purple-400/50"
                    }`}
                  >
                    <span className="font-medium text-white block">{m.name}</span>
                    <span className="text-sm text-white/70">₾{m.price}/person</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300 text-white">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold">Trip Summary</h3>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="opacity-80">Total Participants</span>
                <span className="font-bold text-2xl">{totalPeople}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="opacity-80">Destination</span>
                <span className="font-medium">
                  {selectedDestination?.name || "-"}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="opacity-80">Menu Selection</span>
                <span className="font-medium">{selectedMenu?.name || "-"}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="opacity-80">Transport Cost</span>
                <span className="font-medium">₾{transportCost}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="opacity-80">Food Cost</span>
                <span className="font-medium">₾{foodCost}</span>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-lg">Estimated Total</span>
                <span className="text-4xl font-bold">₾{totalCost}</span>
              </div>
              <p className="text-sm opacity-70 mt-2">
                *Final price may vary based on specific requirements
              </p>
            </div>

            <button
              className="w-full h-[40px] rounded-lg bg-linear-to-r from-blue-500 to-purple-600 text-white font-medium text-lg hover:scale-[1.03] transition-all"
            >
              Request Detailed Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
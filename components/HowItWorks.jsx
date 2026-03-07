"use client";

import React from "react";
import {
  ClipboardList,
  Bus,
  UtensilsCrossed,
  PartyPopper,
  Check,
} from "lucide-react";
import { Button } from "./ui/Button";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Fill Registration Form",
    description:
      "Enter trip details: number of students, parents, teachers, and special requirements.",
    color: "blue",
  },
  {
    number: "02",
    icon: Bus,
    title: "Choose Your Bus",
    description:
      "Browse verified drivers, view bus photos, check ratings, and select the best fit.",
    color: "purple",
  },
  {
    number: "03",
    icon: UtensilsCrossed,
    title: "Select Food Menu",
    description:
      "Pick from diverse catering options that accommodate all dietary needs.",
    color: "cyan",
  },
  {
    number: "04",
    icon: PartyPopper,
    title: "Enjoy the Trip!",
    description:
      "Relax and create unforgettable memories while we handle the logistics.",
    color: "green",
  },
];

const getGradientClass = (color) => {
  const gradients = {
    blue: "bg-linear-to-r from-blue-500 to-blue-400",
    purple: "bg-linear-to-r from-purple-500 to-purple-400",
    cyan: "bg-linear-to-r from-cyan-500 to-cyan-400",
    green: "bg-linear-to-r from-green-500 to-green-400",
  };
  return gradients[color] || gradients.blue;
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md mb-4">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm text-white/80 font-medium">
              Simple Process
            </span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            Plan Your Trip in{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              4 Easy Steps
            </span>
          </h2>

          <p className="text-white/70 text-lg">
            Our streamlined process makes organizing school trips effortless.
            From registration to departure, we handle everything.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-[60%] w-[80%] h-0.5 bg-linear-to-r from-white/20 to-transparent" />
                )}

                {/* CARD */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300 h-full">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-white/50">
                      {step.number}
                    </span>

                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${getGradientClass(step.color)} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center">
          <button className="inline-block rounded-lg bg-linear-to-r from-blue-500 to-purple-600 px-8 py-3 text-white font-medium text-lg shadow-lg hover:scale-[1.03] transition-all">
            Start Planning Today
          </button>
        </div>
      </div>
    </section>
  );
}

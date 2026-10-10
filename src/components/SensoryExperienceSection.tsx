"use client";

import React from "react";
import { Eye, Hand, Sparkles, ArrowRight } from "lucide-react";

export const SensoryExperienceSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      verb: "SEE",
      icon: Eye,
      title: "Visual Discovery",
      desc: "Before a single drop is diffused, your eye takes in the flacon. The crystal clarity of the glass, the organic contours of the sculptural cap, and the warm amber refraction invite contemplation.",
      highlight: "Light & Proportion",
    },
    {
      num: "02",
      verb: "TOUCH",
      icon: Hand,
      title: "Tactile Connection",
      desc: "Reaching for the bottle, your fingers meet raw texture — sculpted stone petals, carved sandalwood grain, delicate sheer mesh, and the cool weight of the antique-gold talisman.",
      highlight: "Material Sensation",
    },
    {
      num: "03",
      verb: "SMELL",
      icon: Sparkles,
      title: "Olfactory Immersion",
      desc: "The ritual culminates as the fine atomizer releases the pure eau de parfum. The visual and tactile expectations unlock their full olfactory reality in harmonic unity.",
      highlight: "Harmonic Awakening",
    },
  ];

  return (
    <section id="experience" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#090807] overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-radial-spotlight opacity-30 pointer-events-none blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-8 h-[1px] bg-[#B49A6A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#B49A6A]">
              THE IN-PERSON DISCOVERY RITUAL
            </span>
            <span className="w-8 h-[1px] bg-[#B49A6A]" />
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#F3EBDD] tracking-[0.05em] font-light leading-tight">
            See → Touch → Smell
          </h2>

          <p className="font-editorial italic text-xl md:text-2xl text-[#D8C4A6] tracking-wide mt-4 mb-2">
            “Begin with what you see. Discover what you can touch. Then experience the fragrance for yourself.”
          </p>

          <p className="font-sans text-xs md:text-sm text-[#C4B5A2] tracking-[0.1em] font-light max-w-lg mx-auto leading-relaxed mt-4">
            An experiential journey crafted for bespoke boutiques and sensory showcases,
            where each flacon is accompanied by tactile material references and bespoke discovery rituals.
          </p>
        </div>

        {/* 3 Step Progression Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-[#14100D]/80 rounded-2xl p-8 border border-white/5 hover:border-[#B49A6A]/40 transition-all duration-500 flex flex-col justify-between group shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-editorial text-3xl font-light text-[#B49A6A]">
                      {step.verb}
                    </span>
                    <span className="text-xs font-mono text-[#C4B5A2]/40 tracking-widest">
                      {step.num} / 03
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#B49A6A]/10 text-[#B49A6A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-editorial text-2xl text-[#F3EBDD] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#C4B5A2] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#B49A6A]">
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

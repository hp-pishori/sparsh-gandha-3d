"use client";

import React, { useState } from "react";
import { Sparkles, Layers, Box, Key, Droplets } from "lucide-react";

export const BottleAnatomySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const elements = [
    {
      num: "01",
      title: "Sculptural Cap",
      quote: "A tactile form inspired by the character of the fragrance.",
      description:
        "Every perfume cap is an original sculptural tribute — from the carved timber grain of Sandalwood and the layered rose petals, to the porcelain jasmine bud, celadon Kasturi petals, and the carved translucent citrus wheel. It turns opening the flacon into a physical tactile discovery.",
      image: "/FinalFrames/RosFram/ezgif-frame-001.jpg",
      icon: Layers,
      highlight: "Custom Tactile Architecture",
    },
    {
      num: "02",
      title: "Ingredient Pouch",
      quote: "A visible material reference that invites curiosity and discovery.",
      description:
        "Suspended beside the bottle neck, a delicate sheer woven pouch presents the raw botanical inspiration — dried rose petals, aromatic sandalwood shavings, or whole jasmine blossoms. It acts as an unadulterated visual anchor to the earth from which the fragrance was conceived.",
      image: "/FinalFrames/LemFram/ezgif-frame-001.jpg",
      icon: Box,
      highlight: "Sensory Raw Material Reference",
    },
    {
      num: "03",
      title: "Keepsake Charm",
      quote: "A considered detail that gives the bottle its distinctive identity.",
      description:
        "An antique-gold engraved medallion clasped around the flacon's collar. Embossed with the botanical emblem of the fragrance, it serves as an heirloom talisman that endures long after the final spray.",
      image: "/FinalFrames/KasFram/ezgif-frame-001.jpg",
      icon: Key,
      highlight: "Antique-Gold Talisman",
    },
    {
      num: "04",
      title: "The Fragrance & Flacon",
      quote: "The scent that completes the experience.",
      description:
        "Heavy architectural crystal glass with radiused corners, housing the luminous golden-amber eau de parfum. Designed with balanced proportions to refract ambient light like fine crystal.",
      image: "/FinalFrames/MogFram/ezgif-frame-001.jpg",
      icon: Droplets,
      highlight: "Architectural Crystal Flacon",
    },
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#090807] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-8 h-[1px] bg-[#B49A6A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#B49A6A]">
              SIGNATURE PHYSICAL ELEMENTS
            </span>
            <span className="w-8 h-[1px] bg-[#B49A6A]" />
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#F3EBDD] tracking-[0.05em] font-light leading-tight">
            The bottle is the
            <br />
            <span className="italic text-gold-gradient font-normal">first touchpoint.</span>
          </h2>

          <p className="font-sans text-xs md:text-sm text-[#C4B5A2] tracking-[0.12em] font-light mt-6 max-w-xl mx-auto leading-relaxed">
            Treating the sculptural cap, heirloom charm, ingredient pouch, and crystal glass
            as an integrated luxury product design system.
          </p>
        </div>

        {/* 4 Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {elements.map((elem, idx) => {
            const Icon = elem.icon;
            return (
              <div
                key={elem.num}
                onClick={() => setActiveTab(idx)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between border ${
                  activeTab === idx
                    ? "bg-[#14100D] border-[#B49A6A] shadow-[0_15px_40px_rgba(180,154,106,0.15)] scale-[1.02]"
                    : "bg-[#0E0C0A] border-white/5 hover:border-[#B49A6A]/30 hover:bg-[#14100D]/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-editorial text-sm font-semibold text-[#B49A6A]">
                      {elem.num}
                    </span>
                    <Icon size={18} className={activeTab === idx ? "text-[#B49A6A]" : "text-[#C4B5A2]/40"} />
                  </div>

                  <h3 className="font-editorial text-2xl text-[#F3EBDD] font-normal tracking-wide mb-2">
                    {elem.title}
                  </h3>

                  <p className="font-editorial italic text-xs text-[#D8C4A6] mb-3">
                    “{elem.quote}”
                  </p>

                  <p className="font-sans text-[11px] text-[#C4B5A2] font-light leading-relaxed">
                    {elem.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] tracking-wider uppercase">
                  <span className="text-[#B49A6A]">{elem.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner featuring active item */}
        <div className="mt-12 rounded-3xl bg-[#14100D]/90 border border-[#B49A6A]/20 p-6 md:p-10 flex flex-col lg:flex-row items-center gap-8 shadow-2xl">
          <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden bg-[#050403] relative border border-white/5">
            <img
              src={elements[activeTab].image}
              alt={elements[activeTab].title}
              className="w-full h-full object-contain p-4"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B49A6A] font-medium">
              Featured Detail • {elements[activeTab].num}
            </span>
            <h4 className="font-editorial text-3xl sm:text-4xl text-[#F3EBDD]">
              {elements[activeTab].title}
            </h4>
            <p className="font-editorial italic text-lg text-[#D8C4A6]">
              “{elements[activeTab].quote}”
            </p>
            <p className="text-xs md:text-sm text-[#C4B5A2] font-light leading-relaxed">
              {elements[activeTab].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

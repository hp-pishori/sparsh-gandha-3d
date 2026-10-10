"use client";

import React, { useState } from "react";
import { FRAGRANCES, FragranceData } from "@/data/fragrances";
import { Sparkles, ArrowRight, Eye, ShieldCheck, Compass } from "lucide-react";

interface CollectionSectionProps {
  onSelectFragrance: (fragrance: FragranceData) => void;
  activeFragrance: FragranceData;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({
  onSelectFragrance,
  activeFragrance,
}) => {
  const [hoveredFragrance, setHoveredFragrance] = useState<FragranceData | null>(null);

  const handleSelectAndScroll = (fragrance: FragranceData) => {
    onSelectFragrance(fragrance);
    const overviewEl = document.getElementById("overview");
    if (overviewEl) {
      overviewEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="collection" className="relative py-32 px-6 md:px-12 lg:px-20 bg-[#090807] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-radial-spotlight opacity-40 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-8 h-[1px] bg-[#B49A6A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#B49A6A]">
              THE PRODUCT COLLECTION
            </span>
            <span className="w-8 h-[1px] bg-[#B49A6A]" />
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#F3EBDD] tracking-[0.05em] font-light leading-tight">
            Five expressions.
            <br />
            <span className="italic text-gold-gradient font-normal">One sensory language.</span>
          </h2>

          <p className="font-sans text-xs md:text-sm text-[#C4B5A2] tracking-[0.12em] font-light mt-6 max-w-xl mx-auto leading-relaxed">
            Discover the individual character of every fragrance through form, material, and scent.
            Each flacon pairs sculptural cap artistry with an antique-gold keepsake charm and an ingredient pouch.
          </p>
        </div>

        {/* 5 Fragrance Curated Editorial Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {FRAGRANCES.map((fragrance, idx) => {
            const isCurrentActive = activeFragrance.id === fragrance.id;

            return (
              <div
                key={fragrance.id}
                onMouseEnter={() => setHoveredFragrance(fragrance)}
                onMouseLeave={() => setHoveredFragrance(null)}
                className={`group relative rounded-2xl bg-[#14100D]/70 border transition-all duration-700 overflow-hidden flex flex-col justify-between ${
                  isCurrentActive
                    ? "border-[#B49A6A] shadow-[0_10px_40px_rgba(180,154,106,0.15)]"
                    : "border-white/5 hover:border-[#B49A6A]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                }`}
              >
                {/* Active Badge */}
                {isCurrentActive && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] bg-[#B49A6A] text-[#090807] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#090807] animate-ping" />
                      <span>Current Hero</span>
                    </span>
                  </div>
                )}

                {/* Number Watermark */}
                <span className="absolute top-4 right-4 text-3xl font-editorial text-[#B49A6A]/15 font-bold select-none">
                  0{idx + 1}
                </span>

                {/* Fragrance Real Image Frame */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#050403] flex items-center justify-center p-6">
                  {/* Subtle inner radial glow */}
                  <div
                    className="absolute inset-0 transition-opacity duration-700 opacity-20 group-hover:opacity-40"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${fragrance.themeAccent}33 0%, transparent 70%)`,
                    }}
                  />

                  {/* Real Frame Image */}
                  <img
                    src={fragrance.heroFrame}
                    alt={`${fragrance.name} Luxury Perfume Flacon`}
                    className="w-full h-full object-contain filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Content Box */}
                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-editorial text-2xl md:text-3xl text-[#F3EBDD] tracking-wide font-normal group-hover:text-gold-gradient transition-all duration-300">
                        {fragrance.name}
                      </h3>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#B49A6A]">
                        {fragrance.bottleLabel}
                      </span>
                    </div>

                    <p className="text-xs text-[#C4B5A2] font-light tracking-wide leading-relaxed mb-6">
                      {fragrance.sensorySummary}
                    </p>

                    {/* Signature Physical Language Specs */}
                    <div className="space-y-2.5 border-t border-white/5 pt-4 mb-6">
                      <div className="flex items-start text-[11px]">
                        <span className="w-24 text-[#B49A6A] uppercase tracking-wider shrink-0 font-medium">
                          Cap:
                        </span>
                        <span className="text-[#F3EBDD]/90 font-light">{fragrance.capDescription}</span>
                      </div>

                      <div className="flex items-start text-[11px]">
                        <span className="w-24 text-[#B49A6A] uppercase tracking-wider shrink-0 font-medium">
                          Charm:
                        </span>
                        <span className="text-[#F3EBDD]/90 font-light">{fragrance.charmDescription}</span>
                      </div>

                      <div className="flex items-start text-[11px]">
                        <span className="w-24 text-[#B49A6A] uppercase tracking-wider shrink-0 font-medium">
                          Pouch:
                        </span>
                        <span className="text-[#F3EBDD]/90 font-light">{fragrance.pouchDescription}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleSelectAndScroll(fragrance)}
                    className="w-full mt-2 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 border border-[#B49A6A]/30 text-[#F3EBDD] hover:bg-[#B49A6A] hover:text-[#090807] hover:border-[#B49A6A] shadow-sm hover:shadow-[0_4px_20px_rgba(180,154,106,0.3)] active:scale-[0.98]"
                  >
                    <span>{isCurrentActive ? "Viewing in 360° Light" : "Experience in 360° Light"}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { Sparkles, Compass, Shield } from "lucide-react";

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-32 md:py-44 px-6 md:px-12 lg:px-24 bg-[#090807] overflow-hidden border-t border-white/5">
      {/* Subtle background radial ambient */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-radial-glow opacity-30 pointer-events-none blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Editorial Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center space-x-2">
              <span className="w-8 h-[1px] bg-[#B49A6A]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#B49A6A]">
                OUR PHILOSOPHY
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl text-[#F3EBDD] tracking-[0.04em] font-light leading-[1.15]">
              More than what
              <br />
              <span className="italic text-gold-gradient font-normal">you smell.</span>
            </h2>

            <div className="w-16 h-[1px] bg-[#B49A6A]/40" />

            <p className="font-editorial italic text-xl md:text-2xl text-[#D8C4A6] tracking-wide leading-relaxed">
              “Sparsh Gandha explores the meeting point of scent, touch, and sight — translating the character of fragrance into a physical form.”
            </p>

            <p className="text-xs md:text-sm text-[#C4B5A2] tracking-[0.08em] font-light leading-loose">
              In traditional perfumery, fragrance is treated as an ephemeral mist — invisible, intangible, and fleeting.
              Sparsh Gandha asks: What if you could touch the scent before the first mist? What if the weight of the cap,
              the texture of the raw botanical pouch, and the glint of the antique gold medallion revealed its sacred personality?
            </p>

            <div className="pt-4 flex items-center space-x-8 border-t border-white/5">
              <div>
                <span className="font-editorial text-2xl text-[#F3EBDD] block">05</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B49A6A]">Sculptural Forms</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div>
                <span className="font-editorial text-2xl text-[#F3EBDD] block">100%</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B49A6A]">Sensory Harmony</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div>
                <span className="font-editorial text-2xl text-[#F3EBDD] block">1 Flacon</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B49A6A]">Complete Ritual</span>
              </div>
            </div>
          </div>

          {/* Editorial Visual Showcase Right Column */}
          <div className="lg:col-span-7 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-3xl overflow-hidden border border-[#B49A6A]/20 bg-[#14100D]/80 p-3 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              {/* Inner frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#050403]">
                <img
                  src="/FinalFrames/SanFram/ezgif-frame-120.jpg"
                  alt="Sparsh Gandha Artisanal Sandalwood Flacon"
                  className="w-full h-full object-contain filter contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-transparent to-transparent opacity-60" />
                
                {/* Floating Quote Stamp */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#090807]/80 backdrop-blur-md border border-[#B49A6A]/30">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#B49A6A] font-semibold block mb-1">
                    THE BRAND MANIFESTO
                  </span>
                  <p className="font-editorial italic text-base text-[#F3EBDD]">
                    “From invisible to tangible — where form guides memory.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { FragranceData } from "@/data/fragrances";
import { ChevronDown, Sparkles, Feather, Eye, Wind } from "lucide-react";

interface StoryOverlayProps {
  progress: number; // 0.0 to 1.0
  activeFragrance: FragranceData;
  onExploreCollection: () => void;
  onDiscoverPhilosophy: () => void;
}

export const StoryOverlay: React.FC<StoryOverlayProps> = ({
  progress,
  activeFragrance,
  onExploreCollection,
  onDiscoverPhilosophy,
}) => {
  // Compute smooth opacity envelopes for each story beat
  const getBeatOpacity = (start: number, peakStart: number, peakEnd: number, end: number) => {
    if (progress < start || progress > end) return 0;
    if (progress >= peakStart && progress <= peakEnd) return 1;
    if (progress < peakStart) {
      return (progress - start) / (peakStart - start);
    }
    return 1 - (progress - peakEnd) / (end - peakEnd);
  };

  const beat1Opacity = getBeatOpacity(0.0, 0.0, 0.12, 0.18);
  const beat2Opacity = getBeatOpacity(0.18, 0.24, 0.38, 0.44);
  const beat3Opacity = getBeatOpacity(0.44, 0.50, 0.68, 0.74);
  const beat4Opacity = getBeatOpacity(0.74, 0.80, 1.0, 1.0);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 md:p-14 lg:p-20 overflow-hidden">
      {/* Top micro-bar: active fragrance indicator */}
      <div className="w-full flex justify-between items-center transition-opacity duration-500">
        <div className="inline-flex items-center space-x-2 text-[10px] md:text-xs tracking-[0.25em] text-[#B49A6A] uppercase bg-[#14100D]/70 px-3.5 py-1.5 rounded-full border border-[#B49A6A]/20 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B49A6A] animate-pulse" />
          <span>Active Expression: {activeFragrance.name}</span>
        </div>

        <div className="text-[10px] md:text-xs tracking-[0.25em] text-[#C4B5A2]/60 uppercase hidden sm:block">
          Frame: {Math.round(progress * 239) + 1} / 240
        </div>
      </div>

      {/* BEAT 1: HERO / INTRO (0 - 18%) */}
      {beat1Opacity > 0.01 && (
        <div
          style={{ opacity: beat1Opacity, transform: `translateY(${(1 - beat1Opacity) * 20}px)` }}
          className="my-auto max-w-3xl mx-auto text-center px-4 transition-all duration-300"
        >
          <div className="inline-block mb-3">
            <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.35em] text-[#B49A6A] px-4 py-1 rounded-full border border-[#B49A6A]/30 bg-[#14100D]/60 backdrop-blur-sm">
              THE SCENT YOU CAN SEE
            </span>
          </div>

          <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.18em] text-[#F3EBDD] uppercase font-light leading-[1.05] drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
            SPARSH
            <br />
            <span className="tracking-[0.22em] text-gold-gradient font-normal">GANDHA</span>
          </h1>

          <p className="font-editorial italic text-xl md:text-3xl text-[#D8C4A6] tracking-[0.08em] mt-4 mb-2">
            Where Senses Converge.
          </p>

          <p className="font-sans text-xs md:text-sm text-[#C4B5A2] tracking-[0.15em] max-w-lg mx-auto font-light leading-relaxed">
            An exploration of fragrance through sight, touch, and scent.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center space-y-2 text-[#B49A6A]/80">
            <span className="text-[10px] uppercase tracking-[0.25em]">Scroll to experience</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#B49A6A] to-transparent animate-pulse" />
          </div>
        </div>
      )}

      {/* BEAT 2: THE IDEA (18% - 44%) */}
      {beat2Opacity > 0.01 && (
        <div
          style={{ opacity: beat2Opacity, transform: `translateY(${(1 - beat2Opacity) * 20}px)` }}
          className="my-auto max-w-xl text-left pl-2 md:pl-10 transition-all duration-300"
        >
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B49A6A]" />
            <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-[#B49A6A]">
              PHILOSOPHY
            </span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F3EBDD] tracking-[0.05em] font-light leading-tight drop-shadow-lg">
            From invisible
            <br />
            <span className="italic text-gold-gradient font-normal">to tangible.</span>
          </h2>

          <p className="font-sans text-xs md:text-sm text-[#C4B5A2] tracking-[0.08em] mt-4 mb-8 font-light leading-relaxed bg-[#090807]/60 p-3 rounded-lg backdrop-blur-sm border-l border-[#B49A6A]/40">
            A fragrance is more than a name and a note. It can have a texture, a form, a material —
            something to discover before the first spray.
          </p>

          {/* Three Sensory Pillars */}
          <div className="space-y-4">
            <div className="flex items-start space-x-4 bg-[#14100D]/80 p-3.5 rounded-lg border border-white/5 backdrop-blur-md">
              <div className="p-2 rounded-full bg-[#B49A6A]/10 text-[#B49A6A]">
                <Feather size={16} />
              </div>
              <div>
                <h4 className="font-editorial text-base text-[#F3EBDD] tracking-wide font-medium">Touch</h4>
                <p className="text-[11px] text-[#C4B5A2] tracking-wider font-light mt-0.5">
                  A sculptural form inspired by the fragrance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#14100D]/80 p-3.5 rounded-lg border border-white/5 backdrop-blur-md">
              <div className="p-2 rounded-full bg-[#B49A6A]/10 text-[#B49A6A]">
                <Eye size={16} />
              </div>
              <div>
                <h4 className="font-editorial text-base text-[#F3EBDD] tracking-wide font-medium">Sight</h4>
                <p className="text-[11px] text-[#C4B5A2] tracking-wider font-light mt-0.5">
                  A visual language shaped by material and detail.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#14100D]/80 p-3.5 rounded-lg border border-white/5 backdrop-blur-md">
              <div className="p-2 rounded-full bg-[#B49A6A]/10 text-[#B49A6A]">
                <Wind size={16} />
              </div>
              <div>
                <h4 className="font-editorial text-base text-[#F3EBDD] tracking-wide font-medium">Scent</h4>
                <p className="text-[11px] text-[#C4B5A2] tracking-wider font-light mt-0.5">
                  The fragrance itself, waiting to be experienced.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BEAT 3: THE MATERIAL LANGUAGE (44% - 74%) */}
      {beat3Opacity > 0.01 && (
        <div
          style={{ opacity: beat3Opacity, transform: `translateY(${(1 - beat3Opacity) * 20}px)` }}
          className="my-auto max-w-lg ml-auto text-right pr-2 md:pr-10 transition-all duration-300"
        >
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-[#B49A6A]">
              THE ARCHITECTURE
            </span>
            <span className="w-6 h-[1px] bg-[#B49A6A]" />
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#F3EBDD] tracking-[0.05em] font-light leading-tight drop-shadow-lg">
            Every scent has a
            <br />
            <span className="italic text-gold-gradient font-normal">physical language.</span>
          </h2>

          <p className="font-sans text-xs md:text-sm text-[#C4B5A2] tracking-[0.08em] mt-4 mb-6 font-light leading-relaxed bg-[#090807]/60 p-3 rounded-lg backdrop-blur-sm border-r border-[#B49A6A]/40">
            Distinctive forms, tactile references, and considered details give every fragrance its own visual identity.
          </p>

          {/* Annotations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="bg-[#14100D]/85 p-3 rounded-lg border border-[#B49A6A]/20 backdrop-blur-md">
              <span className="font-editorial text-xs text-[#B49A6A] font-semibold">01</span>
              <h5 className="font-editorial text-sm text-[#F3EBDD] tracking-wide mt-0.5">Sculptural Cap</h5>
              <p className="text-[10px] text-[#C4B5A2] font-light mt-1 leading-snug">
                {activeFragrance.capDescription}
              </p>
            </div>

            <div className="bg-[#14100D]/85 p-3 rounded-lg border border-[#B49A6A]/20 backdrop-blur-md">
              <span className="font-editorial text-xs text-[#B49A6A] font-semibold">02</span>
              <h5 className="font-editorial text-sm text-[#F3EBDD] tracking-wide mt-0.5">Keepsake Charm</h5>
              <p className="text-[10px] text-[#C4B5A2] font-light mt-1 leading-snug">
                {activeFragrance.charmDescription}
              </p>
            </div>

            <div className="bg-[#14100D]/85 p-3 rounded-lg border border-[#B49A6A]/20 backdrop-blur-md">
              <span className="font-editorial text-xs text-[#B49A6A] font-semibold">03</span>
              <h5 className="font-editorial text-sm text-[#F3EBDD] tracking-wide mt-0.5">Ingredient Pouch</h5>
              <p className="text-[10px] text-[#C4B5A2] font-light mt-1 leading-snug">
                {activeFragrance.pouchDescription}
              </p>
            </div>

            <div className="bg-[#14100D]/85 p-3 rounded-lg border border-[#B49A6A]/20 backdrop-blur-md">
              <span className="font-editorial text-xs text-[#B49A6A] font-semibold">04</span>
              <h5 className="font-editorial text-sm text-[#F3EBDD] tracking-wide mt-0.5">Glass Flacon</h5>
              <p className="text-[10px] text-[#C4B5A2] font-light mt-1 leading-snug">
                {activeFragrance.fluidDescription}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* BEAT 4: SENSORY RESOLUTION & CTAs (74% - 100%) */}
      {beat4Opacity > 0.01 && (
        <div
          style={{ opacity: beat4Opacity, transform: `translateY(${(1 - beat4Opacity) * 20}px)` }}
          className="my-auto max-w-2xl mx-auto text-center px-4 transition-all duration-300"
        >
          <div className="inline-block mb-3">
            <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.35em] text-[#B49A6A] px-4 py-1 rounded-full border border-[#B49A6A]/30 bg-[#14100D]/60 backdrop-blur-sm">
              THE HARMONY
            </span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#F3EBDD] tracking-[0.08em] font-light leading-tight drop-shadow-xl">
            Scent becomes
            <br />
            <span className="italic text-gold-gradient font-normal">an experience.</span>
          </h2>

          <p className="font-editorial italic text-lg md:text-2xl text-[#D8C4A6] tracking-[0.05em] mt-3 mb-2">
            See the form. Discover the material. Experience the fragrance.
          </p>

          <p className="font-sans text-xs md:text-sm text-[#C4B5A2] tracking-[0.12em] max-w-md mx-auto font-light leading-relaxed mb-8">
            {activeFragrance.sensorySummary}
          </p>

          {/* Action Buttons with real destination links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
            <a
              href="#collection"
              onClick={onExploreCollection}
              className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-[#090807] bg-gradient-to-r from-[#F3EBDD] via-[#D8C59A] to-[#B49A6A] hover:to-[#F3EBDD] transition-all duration-300 font-medium shadow-[0_6px_25px_rgba(180,154,106,0.35)] hover:scale-105 active:scale-95"
            >
              Explore the Collection
            </a>

            <a
              href="#philosophy"
              onClick={onDiscoverPhilosophy}
              className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-[#F3EBDD] border border-[#B49A6A]/50 hover:border-[#B49A6A] hover:bg-white/5 transition-all duration-300 font-light backdrop-blur-sm"
            >
              Discover Our Philosophy
            </a>
          </div>
        </div>
      )}

      {/* Bottom bar indicator: scroll progress bar */}
      <div className="w-full flex flex-col items-center">
        <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#B49A6A] to-[#F3EBDD] transition-all duration-100 ease-out"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
        <div className="mt-2 text-[9px] uppercase tracking-[0.25em] text-[#C4B5A2]/60">
          Scroll Axis: {Math.round(progress * 100)}%
        </div>
      </div>
    </div>
  );
};

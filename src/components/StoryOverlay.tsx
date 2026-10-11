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
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 md:p-12 lg:p-16 overflow-hidden">
      {/* Dynamic Directional Gradient Scrims (behind text to separate from 3D animation) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 z-0"
        style={{
          opacity: Math.max(beat1Opacity * 0.75, beat4Opacity * 0.75),
          background: "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(9, 8, 7, 0.82) 0%, rgba(9, 8, 7, 0.35) 60%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-[#090807]/92 via-[#090807]/55 to-transparent pointer-events-none transition-opacity duration-700 z-0"
        style={{ opacity: beat2Opacity }}
      />
      <div
        className="absolute inset-y-0 right-0 w-full md:w-3/5 bg-gradient-to-l from-[#090807]/92 via-[#090807]/55 to-transparent pointer-events-none transition-opacity duration-700 z-0"
        style={{ opacity: beat3Opacity }}
      />

      {/* Top micro-bar: active fragrance indicator + progress */}
      <div className="w-full flex justify-between items-center transition-opacity duration-500 relative z-20">
        <div className="inline-flex items-center space-x-2 text-[10px] md:text-xs tracking-[0.25em] text-[#E5CA92] uppercase bg-[#090807]/85 px-4 py-1.5 rounded-full border border-[#E5CA92]/30 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5CA92] animate-pulse" />
          <span className="font-medium">Active Expression: {activeFragrance.name}</span>
        </div>

        <div className="inline-flex items-center space-x-3 bg-[#090807]/85 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <div className="w-16 sm:w-24 h-[2px] bg-white/15 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#E5CA92] to-[#FAF6EE] transition-all duration-150 ease-out"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <span className="text-[10px] tracking-[0.15em] text-[#C8BCAB] font-medium">
            {Math.round(progress * 100)}%
          </span>
        </div>
      </div>

      {/* BEAT 1: HERO / INTRO (0 - 18%) */}
      {beat1Opacity > 0.01 && (
        <div
          style={{ opacity: beat1Opacity, transform: `translateY(${(1 - beat1Opacity) * 20}px)` }}
          className="my-auto max-w-3xl mx-auto text-center px-4 transition-all duration-300 relative z-10"
        >
          <div className="p-6 sm:p-10 rounded-3xl bg-[#090807]/60 backdrop-blur-md border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
            <div className="inline-block mb-4">
              <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-[#E5CA92] px-4 py-1.5 rounded-full border border-[#E5CA92]/40 bg-[#090807]/80 backdrop-blur-sm font-medium">
                THE SCENT YOU CAN SEE
              </span>
            </div>

            <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.10em] text-[#FAF6EE] uppercase font-normal leading-[1.04] drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
              SPARSH
              <br />
              <span className="tracking-[0.12em] text-gold-gradient font-medium">GANDHA</span>
            </h1>

            <p className="font-editorial italic text-2xl md:text-3xl text-[#F0E6D2] tracking-[0.04em] mt-4 mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Where Senses Converge.
            </p>

            <p className="font-sans text-xs md:text-sm text-[#D8CEBE] tracking-[0.10em] max-w-lg mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              An exploration of fragrance through sight, touch, and scent.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center space-y-2 text-[#E5CA92]">
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll to experience</span>
              <div className="w-[1px] h-8 bg-gradient-to-b from-[#E5CA92] to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      )}

      {/* BEAT 2: THE IDEA (18% - 44%) */}
      {beat2Opacity > 0.01 && (
        <div
          style={{ opacity: beat2Opacity, transform: `translateY(${(1 - beat2Opacity) * 20}px)` }}
          className="my-auto max-w-xl text-left pl-2 md:pl-6 transition-all duration-300 relative z-10"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-[#090807]/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
            <div className="inline-flex items-center space-x-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#E5CA92]" />
              <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-[#E5CA92] font-semibold">
                PHILOSOPHY
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#FAF6EE] tracking-[0.04em] font-normal leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              From invisible
              <br />
              <span className="italic text-gold-gradient font-medium">to tangible.</span>
            </h2>

            <p className="font-sans text-xs md:text-sm text-[#D8CEBE] tracking-[0.04em] mt-4 mb-6 font-normal leading-relaxed border-l-2 border-[#E5CA92]/60 pl-3.5 py-1 bg-white/[0.02] rounded-r-lg">
              A fragrance is more than a name and a note. It can have a texture, a form, a material —
              something to discover before the first spray.
            </p>

            {/* Three Streamlined Sensory Pillars */}
            <div className="space-y-2.5">
              <div className="flex items-center space-x-3.5 bg-white/[0.04] hover:bg-white/[0.07] p-3 rounded-xl border border-white/10 backdrop-blur-md transition-colors">
                <div className="p-2 rounded-lg bg-[#E5CA92]/15 text-[#E5CA92] shrink-0">
                  <Feather size={16} />
                </div>
                <div>
                  <h4 className="font-editorial text-base text-[#FAF6EE] tracking-wide font-medium">Touch</h4>
                  <p className="text-[11px] text-[#C8BCAB] tracking-normal font-light">
                    A sculptural form inspired by the fragrance.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 bg-white/[0.04] hover:bg-white/[0.07] p-3 rounded-xl border border-white/10 backdrop-blur-md transition-colors">
                <div className="p-2 rounded-lg bg-[#E5CA92]/15 text-[#E5CA92] shrink-0">
                  <Eye size={16} />
                </div>
                <div>
                  <h4 className="font-editorial text-base text-[#FAF6EE] tracking-wide font-medium">Sight</h4>
                  <p className="text-[11px] text-[#C8BCAB] tracking-normal font-light">
                    A visual language shaped by material and detail.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 bg-white/[0.04] hover:bg-white/[0.07] p-3 rounded-xl border border-white/10 backdrop-blur-md transition-colors">
                <div className="p-2 rounded-lg bg-[#E5CA92]/15 text-[#E5CA92] shrink-0">
                  <Wind size={16} />
                </div>
                <div>
                  <h4 className="font-editorial text-base text-[#FAF6EE] tracking-wide font-medium">Scent</h4>
                  <p className="text-[11px] text-[#C8BCAB] tracking-normal font-light">
                    The fragrance itself, waiting to be experienced.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BEAT 3: THE MATERIAL LANGUAGE (44% - 74%) */}
      {beat3Opacity > 0.01 && (
        <div
          style={{ opacity: beat3Opacity, transform: `translateY(${(1 - beat3Opacity) * 20}px)` }}
          className="my-auto max-w-xl ml-auto text-right pr-2 md:pr-6 transition-all duration-300 relative z-10"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-[#090807]/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
            <div className="inline-flex items-center space-x-2 mb-3">
              <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-[#E5CA92] font-semibold">
                THE ARCHITECTURE
              </span>
              <span className="w-6 h-[1.5px] bg-[#E5CA92]" />
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#FAF6EE] tracking-[0.04em] font-normal leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              Every scent has a
              <br />
              <span className="italic text-gold-gradient font-medium">physical language.</span>
            </h2>

            <p className="font-sans text-xs md:text-sm text-[#D8CEBE] tracking-[0.04em] mt-4 mb-6 font-normal leading-relaxed border-r-2 border-[#E5CA92]/60 pr-3.5 py-1 bg-white/[0.02] rounded-l-lg text-right">
              Distinctive forms, tactile references, and considered details give every fragrance its own visual identity.
            </p>

            {/* Annotations Grid with High Contrast Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left">
              <div className="bg-white/[0.04] hover:bg-white/[0.07] p-3 rounded-xl border border-white/10 backdrop-blur-md transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-editorial text-sm text-[#FAF6EE] tracking-wide font-medium">Sculptural Cap</h5>
                  <span className="font-editorial text-xs text-[#E5CA92] font-semibold">01</span>
                </div>
                <p className="text-[11px] text-[#C8BCAB] font-light leading-relaxed">
                  {activeFragrance.capDescription}
                </p>
              </div>

              <div className="bg-white/[0.04] hover:bg-white/[0.07] p-3 rounded-xl border border-white/10 backdrop-blur-md transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-editorial text-sm text-[#FAF6EE] tracking-wide font-medium">Keepsake Charm</h5>
                  <span className="font-editorial text-xs text-[#E5CA92] font-semibold">02</span>
                </div>
                <p className="text-[11px] text-[#C8BCAB] font-light leading-relaxed">
                  {activeFragrance.charmDescription}
                </p>
              </div>

              <div className="bg-white/[0.04] hover:bg-white/[0.07] p-3 rounded-xl border border-white/10 backdrop-blur-md transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-editorial text-sm text-[#FAF6EE] tracking-wide font-medium">Ingredient Pouch</h5>
                  <span className="font-editorial text-xs text-[#E5CA92] font-semibold">03</span>
                </div>
                <p className="text-[11px] text-[#C8BCAB] font-light leading-relaxed">
                  {activeFragrance.pouchDescription}
                </p>
              </div>

              <div className="bg-white/[0.04] hover:bg-white/[0.07] p-3 rounded-xl border border-white/10 backdrop-blur-md transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-editorial text-sm text-[#FAF6EE] tracking-wide font-medium">Glass Flacon</h5>
                  <span className="font-editorial text-xs text-[#E5CA92] font-semibold">04</span>
                </div>
                <p className="text-[11px] text-[#C8BCAB] font-light leading-relaxed">
                  {activeFragrance.fluidDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BEAT 4: SENSORY RESOLUTION & CTAs (74% - 100%) */}
      {beat4Opacity > 0.01 && (
        <div
          style={{ opacity: beat4Opacity, transform: `translateY(${(1 - beat4Opacity) * 20}px)` }}
          className="my-auto max-w-2xl mx-auto text-center px-4 transition-all duration-300 relative z-10"
        >
          <div className="p-6 sm:p-10 rounded-3xl bg-[#090807]/80 backdrop-blur-xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
            <div className="inline-block mb-3">
              <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-[#E5CA92] px-4 py-1.5 rounded-full border border-[#E5CA92]/40 bg-[#090807]/80 backdrop-blur-sm font-medium">
                THE HARMONY
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl text-[#FAF6EE] tracking-[0.05em] font-normal leading-tight drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)]">
              Scent becomes
              <br />
              <span className="italic text-gold-gradient font-medium">an experience.</span>
            </h2>

            <p className="font-editorial italic text-lg md:text-2xl text-[#F0E6D2] tracking-[0.03em] mt-3 mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              See the form. Discover the material. Experience the fragrance.
            </p>

            <p className="font-sans text-xs md:text-sm text-[#D8CEBE] tracking-[0.06em] max-w-md mx-auto font-normal leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              {activeFragrance.sensorySummary}
            </p>

            {/* Action Buttons with high contrast and glow */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
              <a
                href="#collection"
                onClick={onExploreCollection}
                className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-[#090807] bg-gradient-to-r from-[#FAF6EE] via-[#EADBBA] to-[#CBB078] hover:via-[#FAF6EE] transition-all duration-300 font-medium shadow-[0_6px_25px_rgba(180,154,106,0.4)] hover:scale-105 active:scale-95"
              >
                Explore the Collection
              </a>

              <a
                href="#philosophy"
                onClick={onDiscoverPhilosophy}
                className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-[#FAF6EE] border border-[#E5CA92]/60 hover:border-[#FAF6EE] hover:bg-white/10 transition-all duration-300 font-normal backdrop-blur-md"
              >
                Discover Our Philosophy
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Bottom spacer for floating fragrance selector pill */}
      <div className="w-full h-8 pointer-events-none" />
    </div>
  );
};

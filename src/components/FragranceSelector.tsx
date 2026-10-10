"use client";

import React from "react";
import { FRAGRANCES, FragranceData } from "@/data/fragrances";

interface FragranceSelectorProps {
  activeFragrance: FragranceData;
  onSelectFragrance: (fragrance: FragranceData) => void;
  className?: string;
  compact?: boolean;
}

export const FragranceSelector: React.FC<FragranceSelectorProps> = ({
  activeFragrance,
  onSelectFragrance,
  className = "",
  compact = false,
}) => {
  return (
    <div
      className={`inline-flex items-center p-1.5 rounded-full bg-[#14100D]/85 backdrop-blur-md border border-[#B49A6A]/25 shadow-[0_10px_35px_rgba(0,0,0,0.6)] ${className}`}
      role="tablist"
      aria-label="Select Fragrance"
    >
      {FRAGRANCES.map((f) => {
        const isSelected = f.id === activeFragrance.id;
        return (
          <button
            key={f.id}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectFragrance(f)}
            className={`relative px-3.5 py-1.5 md:px-5 md:py-2 rounded-full text-[11px] md:text-xs uppercase tracking-[0.2em] transition-all duration-500 font-medium ${
              isSelected
                ? "text-[#090807] bg-gradient-to-r from-[#F3EBDD] via-[#D8C59A] to-[#B49A6A] shadow-[0_2px_15px_rgba(180,154,106,0.35)]"
                : "text-[#C4B5A2] hover:text-[#F3EBDD] hover:bg-white/5"
            }`}
          >
            <span className="relative z-10">{f.shortName}</span>
          </button>
        );
      })}
    </div>
  );
};

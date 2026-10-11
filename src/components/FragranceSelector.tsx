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
      className={`inline-flex items-center p-1.5 rounded-full bg-[#090807]/90 backdrop-blur-xl border border-[#E5CA92]/30 shadow-[0_12px_40px_rgba(0,0,0,0.8)] ${className}`}
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
                ? "text-[#090807] bg-gradient-to-r from-[#FAF6EE] via-[#EADBBA] to-[#CBB078] shadow-[0_2px_15px_rgba(180,154,106,0.4)] font-semibold"
                : "text-[#C8BCAB] hover:text-[#FAF6EE] hover:bg-white/5"
            }`}
          >
            <span className="relative z-10">{f.shortName}</span>
          </button>
        );
      })}
    </div>
  );
};

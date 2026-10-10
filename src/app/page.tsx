"use client";

import React, { useState } from "react";
import { FRAGRANCES, FragranceData } from "@/data/fragrances";
import { Navbar } from "@/components/Navbar";
import { ScrollytellingCanvas } from "@/components/ScrollytellingCanvas";
import { CollectionSection } from "@/components/CollectionSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { BottleAnatomySection } from "@/components/BottleAnatomySection";
import { SensoryExperienceSection } from "@/components/SensoryExperienceSection";
import { Footer } from "@/components/Footer";
import { AudioAmbient } from "@/components/AudioAmbient";

export default function HomePage() {
  const [activeFragrance, setActiveFragrance] = useState<FragranceData>(FRAGRANCES[0]); // Defaults to Rose
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleSoundToggle = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  return (
    <main className="relative min-h-screen bg-[#090807] text-[#F3EBDD] selection:bg-[#B49A6A] selection:text-[#090807]">
      {/* Ambient Sensory Sound Generator */}
      <AudioAmbient isPlaying={isAudioPlaying} />

      {/* Global Minimal Luxury Navbar */}
      <Navbar onSoundToggle={handleSoundToggle} isMuted={!isAudioPlaying} />

      {/* Hero Pinned Scrollytelling Experience */}
      <ScrollytellingCanvas
        activeFragrance={activeFragrance}
        onSelectFragrance={setActiveFragrance}
      />

      {/* Section: The Curated Collection */}
      <CollectionSection
        activeFragrance={activeFragrance}
        onSelectFragrance={setActiveFragrance}
      />

      {/* Section A: The Philosophy */}
      <PhilosophySection />

      {/* Section B: The Bottle Anatomy & Signature Elements */}
      <BottleAnatomySection />

      {/* Section C: The Sensory Experience (See -> Touch -> Smell) */}
      <SensoryExperienceSection />

      {/* Section D & Luxury Brand Footer */}
      <Footer />
    </main>
  );
}

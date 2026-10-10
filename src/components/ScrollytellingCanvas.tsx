"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { FragranceData, FRAGRANCES } from "@/data/fragrances";
import { SequenceImageLoader, drawContainedImage } from "@/lib/canvasUtils";
import { StoryOverlay } from "./StoryOverlay";
import { FragranceSelector } from "./FragranceSelector";

interface ScrollytellingCanvasProps {
  activeFragrance: FragranceData;
  onSelectFragrance: (fragrance: FragranceData) => void;
}

export const ScrollytellingCanvas: React.FC<ScrollytellingCanvasProps> = ({
  activeFragrance,
  onSelectFragrance,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [loaderProgress, setLoaderProgress] = useState(0);
  const [isPriorityLoaded, setIsPriorityLoaded] = useState(false);
  const [loaderRef] = useState(() => new SequenceImageLoader(activeFragrance.folder, activeFragrance.frameCount));

  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const animFrameIdRef = useRef<number | null>(null);

  // Initialize and load frames when fragrance changes
  useEffect(() => {
    loaderRef.setFolder(activeFragrance.folder);
    setIsPriorityLoaded(false);

    // Preload first 20 frames immediately for instant responsiveness
    loaderRef.preloadPriority(activeFragrance.folder, 20).then(() => {
      setIsPriorityLoaded(true);
      // Immediately render frame 0 once priority loaded
      renderFrame(0);
    });

    // Progressively load remaining frames
    loaderRef.preloadProgressive(activeFragrance.folder, (pct) => {
      setLoaderProgress(pct);
    });
  }, [activeFragrance.folder, loaderRef]);

  // Main draw function
  const renderFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = loaderRef.getImage(Math.round(frameIndex), activeFragrance.folder);
      if (img && img.complete && img.naturalWidth > 0) {
        drawContainedImage(ctx, img, canvas.width, canvas.height, {
          scale: 1.0,
          featherEdges: true,
        });
      }
    },
    [activeFragrance.folder, loaderRef]
  );

  // Resize canvas to match display size and DPI
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      renderFrame(currentFrameRef.current);
    }
  }, [renderFrame]);

  // Set up resize observer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    handleResize();
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(canvas);

    window.addEventListener("resize", handleResize);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // Smooth frame interpolation loop (requestAnimationFrame)
  useEffect(() => {
    const tick = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        // Smooth lerping
        currentFrameRef.current += diff * 0.18;
        renderFrame(currentFrameRef.current);
      }
      animFrameIdRef.current = requestAnimationFrame(tick);
    };

    animFrameIdRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [renderFrame]);

  // Scroll handler calculating progress within pinned container
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      // When container top reaches top of viewport, scroll starts
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);

      setScrollProgress(progress);
      targetFrameRef.current = progress * (activeFragrance.frameCount - 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeFragrance.frameCount]);

  const handleExploreCollection = () => {
    const el = document.getElementById("collection");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleDiscoverPhilosophy = () => {
    const el = document.getElementById("philosophy");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      id="overview"
      className="relative w-full h-[450vh] bg-[#090807]"
    >
      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#090807]">
        {/* Subtle Ambient Light Spotlights behind the bottle */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
          style={{
            background: `radial-gradient(ellipse 65% 55% at 50% 40%, ${activeFragrance.themeAccent}18 0%, rgba(9,8,7,0) 70%)`,
          }}
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 pointer-events-none luxury-vignette z-[1]" />

        {/* HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain block relative z-[2]"
          style={{
            filter: "contrast(1.02) brightness(1.01)",
          }}
        />

        {/* Synchronized Storytelling Overlay */}
        <StoryOverlay
          progress={scrollProgress}
          activeFragrance={activeFragrance}
          onExploreCollection={handleExploreCollection}
          onDiscoverPhilosophy={handleDiscoverPhilosophy}
        />

        {/* Floating Luxury Fragrance Selector Pill (bottom of pinned viewport) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
          <FragranceSelector
            activeFragrance={activeFragrance}
            onSelectFragrance={onSelectFragrance}
          />
        </div>

        {/* Initial priority loading indicator */}
        {!isPriorityLoaded && (
          <div className="absolute inset-0 z-30 bg-[#090807] flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 rounded-full border border-[#B49A6A]/20 border-t-[#B49A6A] animate-spin" />
            <div className="flex flex-col items-center">
              <span className="font-editorial text-lg tracking-[0.2em] text-[#F3EBDD] uppercase">
                SPARSH GANDHA
              </span>
              <span className="font-sans text-[10px] tracking-[0.25em] text-[#B49A6A] uppercase mt-1">
                Awakening Sensory Sequence
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

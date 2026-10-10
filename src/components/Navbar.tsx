"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, Volume2, VolumeX } from "lucide-react";

interface NavbarProps {
  onSoundToggle?: () => void;
  isMuted?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onSoundToggle, isMuted = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "The Collection", href: "#collection" },
    { label: "Our Philosophy", href: "#philosophy" },
    { label: "The Experience", href: "#experience" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? "bg-[#090807]/85 backdrop-blur-md border-b border-[#B49A6A]/15 py-3 shadow-2xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <a
            href="#overview"
            className="group flex items-center space-x-3 text-left focus:outline-none"
            aria-label="Sparsh Gandha Home"
          >
            {/* Elegant luxury monogram / crest */}
            <div className="w-8 h-8 rounded-full border border-[#B49A6A]/40 flex items-center justify-center transition-all duration-500 group-hover:border-[#B49A6A] group-hover:shadow-[0_0_15px_rgba(180,154,106,0.3)]">
              <span className="font-editorial text-sm tracking-widest text-[#B49A6A] font-semibold">
                SG
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg md:text-xl tracking-[0.22em] text-[#F3EBDD] uppercase font-medium leading-none group-hover:text-gold-gradient transition-all duration-300">
                SPARSH GANDHA
              </span>
              <span className="font-sans text-[9px] tracking-[0.28em] text-[#B49A6A] uppercase mt-1">
                Senses Beyond Scent
              </span>
            </div>
          </a>

          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-[#C4B5A2] hover:text-[#F3EBDD] hover:tracking-[0.24em] transition-all duration-300 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#B49A6A] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </nav>

          {/* Right Action & Audio Toggle */}
          <div className="hidden md:flex items-center space-x-5">
            {onSoundToggle && (
              <button
                onClick={onSoundToggle}
                className="p-2 text-[#C4B5A2] hover:text-[#B49A6A] transition-colors duration-300 rounded-full border border-white/5 hover:border-[#B49A6A]/30"
                title={isMuted ? "Unmute sensory ambience" : "Mute ambience"}
                aria-label="Toggle ambient sound"
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-[#B49A6A]" />}
              </button>
            )}

            <a
              href="#collection"
              className="inline-flex items-center space-x-2 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#090807] bg-[#B49A6A] hover:bg-[#D8C59A] transition-all duration-300 font-medium shadow-[0_4px_20px_rgba(180,154,106,0.2)] hover:shadow-[0_6px_25px_rgba(180,154,106,0.4)] active:scale-95"
            >
              <span>Discover</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            {onSoundToggle && (
              <button
                onClick={onSoundToggle}
                className="p-2 text-[#C4B5A2] hover:text-[#B49A6A] rounded-full"
                aria-label="Toggle ambient sound"
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} className="text-[#B49A6A]" />}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F3EBDD] hover:text-[#B49A6A] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090807]/95 backdrop-blur-xl md:hidden flex flex-col justify-center px-10 pt-20 pb-12 animate-fadeIn">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-editorial text-2xl tracking-[0.15em] text-[#F3EBDD] hover:text-[#B49A6A] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6">
              <a
                href="#collection"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-3 px-6 text-xs uppercase tracking-[0.25em] text-[#090807] bg-[#B49A6A] font-medium"
              >
                Discover the Collection
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

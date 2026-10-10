"use client";

import React, { useState } from "react";
import { ArrowUp, Sparkles, Mail, CheckCircle } from "lucide-react";

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050403] text-[#F3EBDD] overflow-hidden border-t border-[#B49A6A]/20">
      {/* SECTION D — CLOSING BRAND STATEMENT */}
      <div className="py-28 px-6 md:px-12 lg:px-24 text-center relative z-10 border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-3 mb-2">
            <span className="w-12 h-[1px] bg-[#B49A6A]/60" />
            <span className="text-xs uppercase tracking-[0.35em] text-[#B49A6A]">
              THE INVITATION
            </span>
            <span className="w-12 h-[1px] bg-[#B49A6A]/60" />
          </div>

          <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl text-[#F3EBDD] tracking-[0.08em] font-light leading-tight">
            Where Senses
            <br />
            <span className="italic text-gold-gradient font-normal">Converge.</span>
          </h2>

          <p className="font-editorial italic text-2xl md:text-3xl text-[#D8C4A6] tracking-wide">
            “Sparsh Gandha. Senses Beyond Scent.”
          </p>

          <p className="font-sans text-xs md:text-sm text-[#C4B5A2] tracking-[0.15em] max-w-lg mx-auto font-light leading-relaxed">
            Experience the harmony of form, material, and memory. The collection is available
            for private sensory discovery and curated exhibitions.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#collection"
              className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-[#090807] bg-gradient-to-r from-[#F3EBDD] via-[#D8C59A] to-[#B49A6A] hover:to-[#F3EBDD] transition-all duration-300 font-medium shadow-[0_6px_25px_rgba(180,154,106,0.35)] hover:scale-105 active:scale-95"
            >
              Explore All 5 Flacons
            </a>
          </div>

          {/* Curated Sensory Inquiry Newsletter */}
          <div className="mt-14 max-w-md mx-auto pt-10 border-t border-white/5">
            <p className="text-xs text-[#C4B5A2] tracking-[0.15em] uppercase mb-4">
              Join the Private Circle of Fragrance Connoisseurs
            </p>
            {subscribed ? (
              <div className="flex items-center justify-center space-x-2 text-xs text-[#B49A6A] py-3 bg-[#14100D] rounded-full border border-[#B49A6A]/30">
                <CheckCircle size={14} />
                <span>Thank you. Your sensory invitation is noted.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex rounded-full bg-[#14100D] border border-[#B49A6A]/30 p-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-transparent px-5 py-2.5 text-xs text-[#F3EBDD] placeholder-[#C4B5A2]/50 focus:outline-none flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#B49A6A] hover:bg-[#D8C59A] text-[#090807] text-[11px] uppercase tracking-wider font-medium transition-colors"
                >
                  Inquire
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-full border border-[#B49A6A] flex items-center justify-center">
              <span className="font-editorial text-xs text-[#B49A6A]">SG</span>
            </div>
            <span className="font-editorial text-lg tracking-[0.2em] text-[#F3EBDD] uppercase font-medium">
              SPARSH GANDHA
            </span>
          </div>
          <p className="text-[11px] text-[#C4B5A2]/70 tracking-widest uppercase">
            Senses Beyond Scent • The Scent You Can See
          </p>
        </div>

        <div className="flex items-center space-x-8 text-xs text-[#C4B5A2] uppercase tracking-[0.15em]">
          <a href="#overview" className="hover:text-[#F3EBDD] transition-colors">Overview</a>
          <a href="#collection" className="hover:text-[#F3EBDD] transition-colors">Collection</a>
          <a href="#philosophy" className="hover:text-[#F3EBDD] transition-colors">Philosophy</a>
          <a href="#experience" className="hover:text-[#F3EBDD] transition-colors">Experience</a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-full border border-white/10 hover:border-[#B49A6A] text-[#C4B5A2] hover:text-[#B49A6A] transition-all duration-300"
          title="Scroll to top"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>

      {/* Legal & Copyright */}
      <div className="border-t border-white/5 py-6 px-6 text-center text-[10px] tracking-widest text-[#C4B5A2]/50 uppercase">
        © {new Date().getFullYear()} Sparsh Gandha. All rights reserved. Designed for contemporary luxury sensory exploration.
      </div>
    </footer>
  );
};

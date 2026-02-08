"use client";

import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[100px] rounded-full opacity-40 pointer-events-none" />

      <ScrollReveal 
        scale={0.95}
        viewportAmount={0.5}
        className="relative z-10 glass-card max-w-4xl w-full mx-6 p-12 text-center rounded-3xl border border-white/10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to reclaim your <br/> browsing experience?
        </h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of users who have switched to intelligent, context-aware content moderation.
          Private. Secure. Fast.
        </p>
        
        <button className="group px-8 py-4 bg-primary text-white font-bold rounded-full shadow-[0_0_20px_rgba(109,40,217,0.4)] hover:shadow-[0_0_40px_rgba(109,40,217,0.6)] hover:bg-primary/90 transition-all flex items-center gap-2 mx-auto">
          Add to Chrome for Free
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="mt-6 text-sm text-zinc-500">
          No credit card required. Works on Chrome, Edge, and Brave.
        </p>
      </ScrollReveal>
    </section>
  );
}

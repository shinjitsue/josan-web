"use client";

import ScrollReveal from "./ScrollReveal";
import ParallaxElement from "./ParallaxElement";
import { Brain, Globe, Shield, Activity, Sliders, Lock } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    title: "Context-Aware Analysis",
    description: "JoSan understands the meaning behind words, reducing false positives by analyzing context, not just keywords."
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    title: "Multilingual Support",
    description: "Protecting users across 12+ languages including English, Spanish, Japanese, and more with native-level understanding."
  },
  {
    icon: <Activity className="w-8 h-8 text-green-400" />,
    title: "Real-Time Statistics",
    description: "Visualize your browsing safety with a dashboard tracking blocked threats and scanned pages in real-time."
  },
  {
    icon: <Sliders className="w-8 h-8 text-yellow-400" />,
    title: "Customizable Filters",
    description: "Tailor the sensitivity and categories to your needs. Your web experience, your rules."
  },
  {
    icon: <Lock className="w-8 h-8 text-red-400" />,
    title: "Privacy First",
    description: "All analysis happens locally or via secure, anonymous API calls. Your browsing history never leaves your device."
  },
  {
    icon: <Shield className="w-8 h-8 text-indigo-400" />,
    title: "Lightning Fast",
    description: "Optimized for performance with minimal impact on page load speeds or browser memory."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative bg-black overflow-hidden">
      <ParallaxElement offset={60} className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      </ParallaxElement>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal className="mb-4">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
              Intelligent Protection
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Beyond simple blocklists. JoSan brings enterprise-grade AI moderation to your personal browser.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-4 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

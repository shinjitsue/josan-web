"use client";

import { motion } from "framer-motion";
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
    <section id="features" className="py-24 relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-4"
          >
            Intelligent Protection
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Beyond simple blocklists. JoSan brings enterprise-grade AI moderation to your personal browser.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-4 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

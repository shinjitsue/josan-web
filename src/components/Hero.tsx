"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 animate-pulse-slow" />
      
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          v2.0 Now Available
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl"
        >
          Experience the Web, <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-200">Filtered by Intelligence.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed"
        >
          JoSan uses advanced context-aware AI to block harmful content in real-time. 
          Multilingual protection that understands nuance, not just keywords.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-full overflow-hidden shadow-[0_0_40px_rgba(109,40,217,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(109,40,217,0.6)]">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2">
              Add to Chrome <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
            View Features
          </button>
        </motion.div>

        {/* Visual Mockup Area */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
           animate={{ opacity: 1, scale: 1, rotateX: 0 }}
           transition={{ delay: 0.9, duration: 1, type: "spring" }}
           className="mt-20 relative w-full max-w-5xl perspective-1000"
        >
          {/* Glass Card Container reflecting the UI from screenshots */}
          <div className="relative z-10 glass-card p-4 md:p-8 rounded-2xl border border-white/10 shadow-2xl bg-[#0a0a0a]/80">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Feature 1 */}
               <div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors flex flex-col items-center text-center">
                  <div className="p-3 rounded-lg bg-primary/20 text-primary mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">61 Threats Blocked</h3>
                  <p className="text-sm text-zinc-400">Real-time protection stats visible at a glance.</p>
               </div>
               {/* Feature 2 */}
               <div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors flex flex-col items-center text-center">
                  <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400 mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Multilingual</h3>
                  <p className="text-sm text-zinc-400">Scanning content across 12+ languages instantly.</p>
               </div>
               {/* Feature 3 */}
               <div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors flex flex-col items-center text-center">
                  <div className="p-3 rounded-lg bg-yellow-500/20 text-yellow-400 mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Context Aware</h3>
                  <p className="text-sm text-zinc-400">AI understands intent, reducing false positives.</p>
               </div>
            </div>
            
            {/* Fake UI Elements representing the extension interface */}
            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-50">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="h-2 w-32 bg-white/10 rounded-full" />
            </div>
          </div>
          
          {/* Decorative Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] -z-10 rounded-full opacity-30" />
        </motion.div>

      </div>
    </section>
  );
}

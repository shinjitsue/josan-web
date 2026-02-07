"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Zap, ThumbsUp, MessageSquare, MoreHorizontal, Eye, EyeOff, Smile, Camera, Sticker, FileVideo, MessageCircle } from "lucide-react";
import { PiShareFatLight } from "react-icons/pi";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Lock } from "lucide-react";

export default function Hero() {
  const [isCensored, setIsCensored] = useState(true);

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

        {/* Visual Mockup Area - Browser Window Style */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
           animate={{ opacity: 1, scale: 1, rotateX: 0 }}
           transition={{ delay: 0.9, duration: 1, type: "spring" }}
           className="mt-20 relative w-full high-end-dashboard-mockup perspective-1000 mx-auto max-w-3xl"
        >
          {/* Browser Window Container */}
          <div className="relative z-10 bg-black/40 glass-card backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5">
             
             {/* Browser Header */}
             <div className="flex items-center gap-4 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/80" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                   <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 bg-black/40 rounded-md px-3 py-1.5 text-xs text-zinc-500 flex items-center gap-2 font-mono">
                   <Lock className="w-3 h-3 rounded-full" />
                   <span>https://social-media-feed.com</span>
                </div>
             </div>

             {/* Browser Content */}
             <div className="p-6 space-y-6 bg-[#0a0a0a]">
                
                {/* HARMFUL POST */}
                <div className="relative font-sans text-sm">
                   
                   {/* Post Container - Facebook Dark Mode Style with Red Tint */}
                   <div className="bg-white/3 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-gray-500/10 text-left">
                      
                      {/* Post Header */}
                      <div className="p-3 flex items-start justify-between">
                         <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full bg-zinc-600 flex-shrink-0 relative overflow-hidden">
                               <svg className="w-full h-full text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                               </svg>
                            </div>
                            <div>
                               <h3 className="text-[#E4E6EB] font-semibold text-[15px] leading-tight">Saiba Sangetsu</h3>
                               <div className="flex items-center gap-1.5 text-[#B0B3B8] text-[13px] mt-0.5">
                                  <span>November 28, 2025</span>
                                  <span>·</span>
                                  <Globe className="w-3 h-3" />
                               </div>
                            </div>
                         </div>
                         <button className="text-[#B0B3B8] hover:bg-white/10 p-2 rounded-full transition-colors">
                            <MoreHorizontal className="w-5 h-5" />
                         </button>
                      </div>

                      {/* Post Content Area */}
                      <div className="px-3 pb-1">
                         {isCensored ? (
                            <div className="mt-1 mb-3 flex justify-start">
                                <div className="bg-red-500/20 backdrop-blur-md px-5 py-2.5 rounded-full inline-flex items-center gap-3 select-none border border-red-500/20">
                                  <span className="text-red-200 font-bold text-[16px]">Harmful Content Blocked</span>
                                  <div className="bg-red-500/20 rounded-full p-0.5">
                                     <EyeOff className="w-4 h-4 text-red-200" />
                                  </div>
                               </div>
                            </div>
                         ) : (
                            <div className="text-[#E4E6EB] text-[15px] pb-4">
                               <p>You are honestly the worst person I have ever met. Nobody likes you at all.</p>
                               <button 
                                  onClick={() => setIsCensored(true)}
                                  className="text-primary hover:underline text-sm mt-2 block"
                               >
                                  Hide content
                               </button>
                            </div>
                         )}

                         {!isCensored && (
                            <div className="mt-2 text-xs text-red-400 font-medium bg-red-500/10 px-3 py-2 rounded border border-red-500/20">
                               Flagged: Harassment detected (98% confidence)
                            </div>
                         )}
                      </div>

                      {/* Interaction Stats */}
                      <div className="px-3 py-1 flex items-center justify-between text-[#B0B3B8] text-[13px] border-b border-[#3E4042]">
                         <div className="flex items-center gap-1.5">
                             {/* Keep it simple for stats */}
                         </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="px-2 py-0.5 flex items-center justify-between border-b border-[#3E4042]">
                         <button className="flex-1 flex items-center justify-center gap-2 py-1.5 text-[#B0B3B8] hover:bg-[#3A3B3C] rounded-md transition-colors font-medium cursor-default">
                            <ThumbsUp className="w-5 h-5" />
                            <span>Like</span>
                         </button>
                         <button className="flex-1 flex items-center justify-center gap-2 py-1.5 text-[#B0B3B8] hover:bg-[#3A3B3C] rounded-md transition-colors font-medium cursor-default">
                            <MessageCircle className="w-5 h-5" />
                            <span>Comment</span>
                         </button>
                         <button className="flex-1 flex items-center justify-center gap-2 py-1.5 text-[#B0B3B8] hover:bg-[#3A3B3C] rounded-md transition-colors font-medium cursor-default">
                            <PiShareFatLight className="w-5 h-5" />
                            <span>Share</span>
                         </button>
                      </div>

                      {/* Comment Section */}
                      <div className="p-3 flex gap-2">
                         <div className="w-8 h-8 rounded-full bg-zinc-700 flex-shrink-0 relative overflow-hidden">
                             <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-xs font-bold">
                                JS
                             </div>
                         </div>
                         <div className="flex-1 bg-white/5 rounded-full px-3 py-1.5 flex items-center justify-between">
                            <span className="text-[#B0B3B8] text-[15px] pl-1 cursor-text">Write a comment...</span>
                            <div className="flex items-center gap-2 text-[#B0B3B8] opacity-70">
                               <div className="w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center cursor-pointer">
                                  <Smile className="w-5 h-5" />
                               </div>
                               <div className="w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center cursor-pointer">
                                  <Camera className="w-5 h-5" />
                               </div>
                               <div className="w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center cursor-pointer">
                                  <FileVideo className="w-5 h-5" />
                               </div>
                               <div className="w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center cursor-pointer">
                                  <Sticker className="w-5 h-5" />
                               </div>
                            </div>
                         </div>
                      </div>

                   </div>
                </div>

                {/* SAFE POST */}
                <div className="bg-white/3 backdrop-blur-md rounded-xl p-4 border border-gray-500/20 relative shadow-sm">
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-500/30 animate-pulse" />
                      <div className="space-y-2">
                         <div className="h-2.5 w-24 bg-gray-500/30 rounded-full animate-pulse" />
                         <div className="h-2 w-16 bg-gray-500/10 rounded-full animate-pulse" />
                      </div>
                   </div>
                   <div className="space-y-2 mb-4">
                      <div className="h-2.5 w-full bg-gray-500/20 rounded-full animate-pulse" />
                      <div className="h-2.5 w-[90%] bg-gray-500/20 rounded-full animate-pulse" />
                      <div className="h-2.5 w-[60%] bg-gray-500/10 rounded-full animate-pulse" />
                   </div>
                   {/* Safe Badge */}
                   <div className="absolute top-4 right-4 bg-green-500/20 text-green-300 text-[10px] font-bold px-2 py-1 rounded border border-green-500/20 uppercase tracking-wider backdrop-blur-sm">
                      Safe
                   </div>
                </div>

             </div>
          </div>
          
          {/* Decorative Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] -z-10 rounded-full opacity-30" />
        </motion.div>

      </div>
    </section>
  );
}

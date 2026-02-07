"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-black/50 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
             <Shield className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
             <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">JoSan</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">How it Works</Link>
          <a
            href="https://github.com/shinjitsue/JoSan"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        <button className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-full shadow-[0_0_15px_rgba(109,40,217,0.3)] hover:shadow-[0_0_25px_rgba(109,40,217,0.6)] transition-all transform hover:scale-105 active:scale-95">
          <span>Add to Chrome</span>
        </button>
      </div>
    </motion.nav>
  );
}

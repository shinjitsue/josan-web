"use client";

import { motion } from "framer-motion";
import { Download, ToggleRight, Eye } from "lucide-react";

const steps = [
  {
    icon: <Download className="w-8 h-8" />,
    title: "1. Install",
    description: "Add JoSan to Chrome in one click. No complex setup or registration required."
  },
  {
    icon: <ToggleRight className="w-8 h-8" />,
    title: "2. Activate",
    description: "Enable the filter with a single toggle. Customize settings if you need to."
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "3. Browse",
    description: "Enjoy a safer internet. JoSan works silently in the background."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-zinc-950 relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How it Works</h2>
          <p className="text-zinc-400">Up and running in less than 30 seconds.</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-zinc-800 via-primary/50 to-zinc-800 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-xl relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-zinc-400 text-sm max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
             <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Get Started Now
             </button>
        </div>
      </div>
    </section>
  );
}

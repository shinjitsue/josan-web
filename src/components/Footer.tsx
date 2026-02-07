import Link from "next/link";
import { Shield, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-white">JoSan</span>
          </Link>
          <p className="text-sm text-zinc-500 text-center md:text-left max-w-xs">
            Intelligent content moderation for a safer web experience. 
            Open source and privacy-focused.
          </p>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <Link href="#features" className="text-sm text-zinc-400 hover:text-primary transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-sm text-zinc-400 hover:text-primary transition-colors">How it Works</Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-primary transition-colors">Download</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white">Resources</h4>
            <a href="https://github.com/shinjitsue/JoSan" target="_blank" rel="noreferrer" className="text-sm text-zinc-400 hover:text-primary transition-colors">GitHub</a>
            <Link href="#" className="text-sm text-zinc-400 hover:text-primary transition-colors">Documentation</Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-zinc-600">© 2026 JoSan. All rights reserved.</p>
        <div className="flex gap-4">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Github className="w-5 h-5"/></a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
        </div>
      </div>
    </footer>
  );
}

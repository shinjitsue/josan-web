import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "JoSan - AI-Powered Content Moderation",
  description: "Experience the web, filtered by intelligence. JoSan uses context-aware AI to block harmful content in real-time.",
  keywords: ["Content Moderation", "AI Filter", "Chrome Extension", "Online Safety", "Parental Control"],
};

export const viewport: Viewport = {
  themeColor: "#6d28d9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head />
      <body
        suppressHydrationWarning
        className={`${inter.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

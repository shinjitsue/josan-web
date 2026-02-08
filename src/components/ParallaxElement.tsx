"use client";

import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number; // Multiplier for global scroll (absolute mode). e.g. 0.2
  offset?: number; // Total distance to move in pixels (relative mode). e.g. 100
  className?: string;
  smooth?: boolean; // Whether to apply spring smoothing
}

/**
 * ParallaxElement
 * Wraps content to move at a different speed than the scroll.
 * Best used for absolute positioned background elements.
 */
export default function ParallaxElement({ 
  children, 
  speed, 
  offset,
  className = "",
  smooth = true 
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // We track both for flexibility.
  // scrollY is window absolute scroll.
  // scrollYProgress is progress of THIS element through the viewport (0 = entering, 1 = leaving).
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Decide which transform to use
  // If offset is provided, use relative mode (better for sections).
  // If speed is provided (or default), use absolute mode (better for hero/fixed).
  let y;
  
  if (offset !== undefined) {
    // Relative mode: move from -offset to +offset as it passes through viewport
    y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  } else {
    // Absolute mode: strict multiplier
    const factor = speed ?? 0.2;
    // Map scrollY directly
    y = useTransform(scrollY, (v) => v * factor);
  }

  // Apply smoothing for a "floating" feel, well suitable for UI
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothY = useSpring(y, springConfig);
  
  const finalY = smooth ? smoothY : y;

  return (
    <motion.div ref={ref} style={{ y: finalY }} className={className}>
      {children}
    </motion.div>
  );
}

"use client";

import { motion, Variants, Variant } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number | "some" | "all";
  once?: boolean; // Default to false based on user request to hide when scrolling away
  scale?: number; // Optional scale effect
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  viewportAmount = 0.3, // Require 30% visibility before triggering
  once = false, // Allow re-triggering animation (hide when out of view)
  scale = 1,
}: ScrollRevealProps) {
  
  const getVariants = (dir: Direction): Variants => {
    const distance = 50;
    
    const hidden: Variant = { opacity: 0, scale: scale !== 1 ? 0.9 : 1 };
    const visible: Variant = { opacity: 1, scale: 1 };

    switch (dir) {
      case "up":
        hidden.y = distance;
        visible.y = 0;
        break;
      case "down":
        hidden.y = -distance;
        visible.y = 0;
        break;
      case "left":
        hidden.x = distance;
        visible.x = 0;
        break;
      case "right":
        hidden.x = -distance;
        visible.x = 0;
        break;
    }

    return { hidden, visible };
  };

  const variants = getVariants(direction);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once, amount: viewportAmount, margin: "0px 0px -100px 0px" }} // margin bottom negative to trigger exit earlier
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

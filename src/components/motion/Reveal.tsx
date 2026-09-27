"use client";

import { motion } from "framer-motion";
import { variants } from "@/lib/motion/variants";

export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
  className?: string;
}) {
  const selectedVariant = variants[variant];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...selectedVariant.visible.transition,
            delay,
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

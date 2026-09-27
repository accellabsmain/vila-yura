"use client";

import { motion } from "framer-motion";
import { variants } from "@/lib/motion/variants";
import Image, { ImageProps } from "next/image";

interface ImageRevealProps extends ImageProps {
  wrapperClassName?: string;
}

export function ImageReveal({ wrapperClassName, alt, ...props }: ImageRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants.imageReveal}
      className={`overflow-hidden relative ${wrapperClassName || ""}`}
    >
      <Image alt={alt || ""} {...props} />
    </motion.div>
  );
}

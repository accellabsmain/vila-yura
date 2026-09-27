import { Easing } from "framer-motion";

const customEase: Easing = [0.22, 1, 0.36, 1];

export const transitions = {
  standard: {
    duration: 0.8,
    ease: customEase, // as defined in ARCHITECTURE.md
  },
  slow: {
    duration: 1.2,
    ease: customEase,
  },
  fast: {
    duration: 0.4,
    ease: customEase,
  },
};

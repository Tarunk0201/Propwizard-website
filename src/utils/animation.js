// src/utils/animation.js
export const premiumSpring = {
  type: "spring",
  stiffness: 100,
  damping: 22,
  mass: 0.5,
};

export const slowSpring = {
  type: "spring",
  stiffness: 50,
  damping: 20,
  mass: 0.8,
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const textRevealVariant = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: premiumSpring },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

export const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: premiumSpring,
  },
};

export const slideIn = (direction = "left", amount = 30) => ({
  initial: {
    x: direction === "left" ? -amount : direction === "right" ? amount : 0,
    y: direction === "up" ? -amount : direction === "down" ? amount : 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: premiumSpring,
  },
});

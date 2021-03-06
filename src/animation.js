export const pageAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: { opacity: 0, y: 300, transition: { duration: 0.35 } },
};

export const titleAnimation = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 1.75, ease: "easeOut" } },
};

export const fadeAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75, ease: "easeOut" } },
};

export const fotoAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeOut", delay: 1.25 },
  },
};

export const lineAnimation = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

export const sliderAnimation = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, ease: "easeOut" },
  },
};

export const scrollAnimation = {
  hidden: { opacity: 0, x: -400, transition: { duration: 2 } },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

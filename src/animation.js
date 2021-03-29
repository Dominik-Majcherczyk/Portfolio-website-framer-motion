export const pageAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
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
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

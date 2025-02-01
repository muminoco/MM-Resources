import { createScrollTrigger } from "../utils/scrollTriggers.js";
import { splitTextForAnimation, SPLIT_TYPES } from "../utils/textSplitter.js";

// Default animation settings
const DEFAULT = {
  duration: 0.75,
  ease: "sine.out",
  delay: 0,
  stagger: {
    amount: 0.75,
  },
};

/**
 * Base animation function that sets up common properties
 * @param {HTMLElement} element - Target element
 * @param {function} animationCallback - Function to create the timeline
 */
function createBaseAnimation(element, animationCallback) {
  gsap.set(element, { opacity: 1 });
  const target = element;
  const tl = gsap.timeline({ paused: true });
  createScrollTrigger(target, tl);
  animationCallback(target, tl);
}

/*
 * Line-Based Animations
 * These animations split text into lines and animate them
 */
const lineAnimations = {
  // Simple fade in, line by line
  line01(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.LINES, SPLIT_TYPES.WORDS]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        opacity: 0,
        duration: 1.5,
        delay,
        stagger: 0.2,
        ease: "power1.out",
      });
    });
  },

  // Mask reveal from bottom with slight overlap
  line02(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS, SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        opacity: 0,
        yPercent: 150,
        duration: 1,
        delay,
        stagger: 0.005,
        ease: "power1.out",
      });
    });
  },

  // Blur fade with upward motion
  line03(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS, SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const lines = target.querySelectorAll(".line");
      tl.from(lines, {
        filter: "blur(10px)",
        opacity: 0,
        yPercent: 50,
        duration: 1,
        delay,
        stagger: { amount: 0.3 },
        ease: "power1.out",
      });
    });
  },
};

/*
 * Word-Based Animations
 * These animations split text into words and animate them
 */
const wordAnimations = {
  // Blur fade with upward motion, word by word
  word01(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS, SPLIT_TYPES.CHARS]);

    createBaseAnimation(element, (target, tl) => {
      const words = target.querySelectorAll(".word");
      tl.from(words, {
        filter: "blur(2px)",
        autoAlpha: 0,
        duration: DEFAULT.duration,
        delay,
        yPercent: 30,
        stagger: DEFAULT.stagger,
        ease: DEFAULT.ease,
      });
    });
  },
};

/*
 * Character-Based Animations
 * These animations split text into individual characters and animate them
 */
const letterAnimations = {
  // Hero header with scale, color transition, and left origin
  letter01(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS, SPLIT_TYPES.CHARS, SPLIT_TYPES.LINES]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        color: "#d18d78",
        autoAlpha: 0,
        scale: 0.8,
        yPercent: 25,
        transformOrigin: "left top",
        duration: 1,
        delay,
        stagger: { amount: 0.75, from: "left" },
        ease: DEFAULT.ease,
      });
    });
  },

  // Section header with color fade and left-to-right reveal
  letter02(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS, SPLIT_TYPES.CHARS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        color: "#d18d78",
        autoAlpha: 0,
        duration: 1,
        delay,
        stagger: { amount: 0.75, from: "left" },
        ease: DEFAULT.ease,
      });
    });
  },

  // Quote animation with scale and center-out reveal
  letter03(element, delay = 0) {
    splitTextForAnimation(element, [SPLIT_TYPES.WORDS, SPLIT_TYPES.CHARS]);

    createBaseAnimation(element, (target, tl) => {
      const chars = target.querySelectorAll(".char");
      tl.from(chars, {
        autoAlpha: 0,
        scale: 0.9,
        transformOrigin: "center bottom",
        duration: 1,
        delay,
        stagger: { amount: 0.75, from: "center" },
        ease: DEFAULT.ease,
      });
    });
  },
};

// Export all animation categories
export const textEffects = {
  line: lineAnimations,
  word: wordAnimations,
  char: letterAnimations,
};

/* Usage Examples:

// Line-based animations
textEffects.line.line01(element, 0.5);  // Simple fade in
textEffects.line.line02(element);       // Mask reveal
textEffects.line.line03(element);       // Blur fade up

// Word-based animation
textEffects.word.word01(element, 0.3);  // Blur fade up

// Character-based animations
textEffects.char.letter01(element);       // Hero header
textEffects.char.letter02(element);       // Section header
textEffects.char.letter03(element);       // Quote animation
*/

// /config/selectors.js

/**
 * Animation selectors organized by animation category
 * Text: Animations that involve text splitting and manipulation
 * Reveal: Animations that show/hide elements
 * Stagger: Animations that affect multiple elements in sequence
 * Hover: Animations triggered by hover state
 */

const animationAttributeName = "data-ani";
const delayAttributeName = "data-ani-delay";

export const animationSelectors = {
  // Text-based animations (uses text splitting)
  text: {
    line01: `[${animationAttributeName}="line01"]`,
    line02: `[${animationAttributeName}="line02"]`,

    // displays: `[${animationAttributeName}="display"]`,
    // headings: `[${animationAttributeName}="heading"]`,
    // paragraphs: `[${animationAttributeName}="display"]`,
  },

  // Reveal animations (fade, slide, etc.)
  reveal: {
    //   fadeIn: '[mm-ani="reveal-fade"]',
    //   fadeUp: '[mm-ani="reveal-up"]',
    //   fadeDown: '[mm-ani="reveal-down"]',
    //   fadeLeft: '[mm-ani="reveal-left"]',
    //   fadeRight: '[mm-ani="reveal-right"]'
  },

  // Stagger animations (for groups/lists)
  stagger: {
    //   list: '[mm-ani="stagger-list"]',
    //   grid: '[mm-ani="stagger-grid"]',
    //   gallery: '[mm-ani="stagger-gallery"]'
  },

  // Hover animations
  hover: {
    //   scale: '[mm-ani="hover-scale"]',
    //   lift: '[mm-ani="hover-lift"]',
    //   glow: '[mm-ani="hover-glow"]'
  },
};

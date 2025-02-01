// /config/selectors.js

/**
 * Animation selectors organized by animation category
 * Text: Animations that involve text splitting and manipulation
 * Reveal: Animations that show/hide elements
 * Stagger: Animations that affect multiple elements in sequence
 * Hover: Animations triggered by hover state
 */

const animationAttributeName = "data-ani";

export const animationSelectors = {
  // For the resources project, the selector name MUST match the animation name.
  text: {
    line01: `[${animationAttributeName}="line01"]`,
    line02: `[${animationAttributeName}="line02"]`,
    line03: `[${animationAttributeName}="line03"]`,
    line04: `[${animationAttributeName}="line04"]`,
    line05: `[${animationAttributeName}="line05"]`,
    line06: `[${animationAttributeName}="line06"]`,
    line07: `[${animationAttributeName}="line07"]`,
    line08: `[${animationAttributeName}="line08"]`,
    line09: `[${animationAttributeName}="line09"]`,
    line10: `[${animationAttributeName}="line10"]`,
    line11: `[${animationAttributeName}="line11"]`,
    line12: `[${animationAttributeName}="line12"]`,
    line13: `[${animationAttributeName}="line13"]`,
    line14: `[${animationAttributeName}="line14"]`,
    line15: `[${animationAttributeName}="line15"]`,
    line16: `[${animationAttributeName}="line16"]`,
    line17: `[${animationAttributeName}="line17"]`,
    line18: `[${animationAttributeName}="line18"]`,
    line19: `[${animationAttributeName}="line19"]`,
    line20: `[${animationAttributeName}="line20"]`,

    word01: `[${animationAttributeName}="word01"]`,
    word02: `[${animationAttributeName}="word02"]`,
    word03: `[${animationAttributeName}="word03"]`,
    word04: `[${animationAttributeName}="word04"]`,
    word05: `[${animationAttributeName}="word05"]`,
    word06: `[${animationAttributeName}="word06"]`,
    word07: `[${animationAttributeName}="word07"]`,
    word08: `[${animationAttributeName}="word08"]`,
    word09: `[${animationAttributeName}="word09"]`,
    word10: `[${animationAttributeName}="word10"]`,
    word11: `[${animationAttributeName}="word11"]`,
    word12: `[${animationAttributeName}="word12"]`,
    word13: `[${animationAttributeName}="word13"]`,
    word14: `[${animationAttributeName}="word14"]`,
    word15: `[${animationAttributeName}="word15"]`,
    word16: `[${animationAttributeName}="word16"]`,
    word17: `[${animationAttributeName}="word17"]`,
    word18: `[${animationAttributeName}="word18"]`,
    word19: `[${animationAttributeName}="word19"]`,
    word20: `[${animationAttributeName}="word20"]`,

    letter01: `[${animationAttributeName}="letter01"]`,
    letter02: `[${animationAttributeName}="letter02"]`,
    letter03: `[${animationAttributeName}="letter03"]`,
    letter04: `[${animationAttributeName}="letter04"]`,
    letter05: `[${animationAttributeName}="letter05"]`,
    letter06: `[${animationAttributeName}="letter06"]`,
    letter07: `[${animationAttributeName}="letter07"]`,
    letter08: `[${animationAttributeName}="letter08"]`,
    letter09: `[${animationAttributeName}="letter09"]`,
    letter10: `[${animationAttributeName}="letter10"]`,
    letter11: `[${animationAttributeName}="letter11"]`,
    letter12: `[${animationAttributeName}="letter12"]`,
    letter13: `[${animationAttributeName}="letter13"]`,
    letter14: `[${animationAttributeName}="letter14"]`,
    letter15: `[${animationAttributeName}="letter15"]`,
    letter16: `[${animationAttributeName}="letter16"]`,
    letter17: `[${animationAttributeName}="letter17"]`,
    letter18: `[${animationAttributeName}="letter18"]`,
    letter19: `[${animationAttributeName}="letter19"]`,
    letter20: `[${animationAttributeName}="letter20"]`,
  },

  // Reveal animations (fade, slide, etc.)
  reveal: {},

  // Stagger animations (for groups/lists)
  stagger: {},

  // Hover animations
  hover: {},
};

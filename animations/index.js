// src/runners/textAnimationRunner.js

import { textEffects } from "../../animations/global/textEffects.js";
import { animationSelectors } from "../config/selectors.js";

const animationAttributeName = "data-ani";
const delayAttributeName = "data-ani-delay";

/**
 * Get animation delay from element's data-ani-delay attribute
 * @param {HTMLElement} element - The element to check for delay
 * @returns {number} Delay in seconds (0 if no delay set)
 */
function getDelay(element) {
  // If attribute doesn't exist, return 0
  if (!element.hasAttribute("data-ani-delay")) return 0;

  const delay = element.getAttribute("data-ani-delay");

  // If delay isn't a valid number, return 0
  const delayNumber = parseInt(delay);
  if (isNaN(delayNumber)) return 0;

  // Convert milliseconds to seconds
  return delayNumber / 1000;
}

/**
 * Check if a selector exists in our animation selectors config
 * @param {string} selector - The selector to check
 * @returns {boolean} True if selector exists in config
 */
function selectorExistsInConfig(selector) {
  // Check each category in animationSelectors
  const allCategories = [animationSelectors.text, animationSelectors.reveal, animationSelectors.stagger];

  // Look through all categories for this selector
  return allCategories.some((category) => Object.values(category).includes(selector));
}

/**
 * Animate elements with error handling
 * @param {string} selector - CSS selector to find elements
 * @param {Function} animationFunction - Animation to apply
 * @param {string} type - Name of animation for error logging
 */
function animateElements(selector, animationFunction, type) {
  // Find all elements matching the selector
  const elements = document.querySelectorAll(selector);

  // Check if any elements were found
  if (elements.length === 0) {
    // Only log if selector exists in our config (helps identify if it's intentionally unused)
    if (selectorExistsInConfig(selector)) {
      console.info(`No elements found for "${type}" animation with selector: ${selector}`);
    }
    return;
  }

  // Log how many elements were found (helpful for debugging)
  console.info(`Animating ${elements.length} ${type} element(s)`);

  // Apply animation to each element
  elements.forEach((element) => {
    try {
      // Get delay and run animation
      const delay = getDelay(element);
      animationFunction(element, delay);
    } catch (error) {
      console.warn(`Failed to animate ${type} element:`, error);
      console.warn("Problem element:", element);
    }
  });
}

/**
 * Run all text-based animations (character, word, and line animations)
 */
function runTextAnimations() {
  const { text } = animationSelectors;

  // Display text animations
  animateElements(text.line01, textEffects.line.line01, "line");

  // Section header animations
  animateElements(text.headings, textEffects.char.letter01, "section header");

  // Paragraph animations
  animateElements(text.paragraphs, textEffects.word.word01, "paragraph");
}

/**
 * Run all reveal animations (fade in, fade up, etc.)
 */
function runRevealAnimations() {
  const { reveal } = animationSelectors;

  // Fade animations
  animateElements(reveal.fadeIn, textEffects.line.line01, "fade in");

  // Fade up animations
  animateElements(reveal.fadeUp, textEffects.line.line01, "fade up");

  // Fade down animations
  animateElements(reveal.fadeDown, textEffects.line.line01, "fade down");
}

/**
 * Run all stagger animations (lists, grids, etc.)
 */
function runStaggerAnimations() {
  const { stagger } = animationSelectors;

  // List stagger animations
  animateElements(stagger.list, textEffects.line.line01, "stagger list");

  // Grid stagger animations
  animateElements(stagger.grid, textEffects.line.line01, "stagger grid");
}

/**
 * Initialize all text animations
 * This is the main function exported and called by mumino.js
 */
function initializeTextAnimations() {
  runTextAnimations(); // Character, word, and line animations
  //   runRevealAnimations(); // Fade and reveal animations
  //   runStaggerAnimations(); // Staggered animations
}

export { initializeTextAnimations };

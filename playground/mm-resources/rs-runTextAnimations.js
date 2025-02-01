// src/runners/textAnimationRunner.js

import { textEffects } from "./rs-textEffects.js";
import { animationSelectors } from "./rs-selectors.js";

const delayAttributeName = "data-ani-delay";

/**
 * Get animation delay from element's data-ani-delay attribute
 * @param {HTMLElement} element - The element to check for delay
 * @returns {number} Delay in seconds (0 if no delay set)
 */
function getDelay(element) {
  // If attribute doesn't exist, return 0
  if (!element.hasAttribute(`${delayAttributeName}`)) return 0;

  const delay = element.getAttribute(`${delayAttributeName}`);

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

  // Display line animations
  animateElements(text.line01, textEffects.line.line01, "line 01");
  animateElements(text.line02, textEffects.line.line02, "line 02");
  animateElements(text.line03, textEffects.line.line03, "line 03");
}

function runRSTextLineAnimations() {
  // Get all text animations
  const textSelectors = animationSelectors.text;

  // Loop through each selector
  Object.keys(textSelectors).forEach((animationName) => {
    // Get the selector (like '[data-ani="line01"]')
    const selector = textSelectors[animationName];

    // Get the matching animation function
    const animation = textEffects.line[animationName];

    // Run it if we found a matching function
    if (animation) {
      animateElements(selector, animation, animationName);
    } else {
      console.warn(`No matching animation found for: ${animationName}`);
    }
  });
}

function runRSTextWordAnimations() {
  // Get all text animations
  const textSelectors = animationSelectors.text;

  // Loop through each selector
  Object.keys(textSelectors).forEach((animationName) => {
    // Get the selector (like '[data-ani="line01"]')
    const selector = textSelectors[animationName];

    // Get the matching animation function
    const animation = textEffects.word[animationName];

    // Run it if we found a matching function
    if (animation) {
      animateElements(selector, animation, animationName);
    } else {
      console.warn(`No matching animation found for: ${animationName}`);
    }
  });
}

function runRSTextLetterAnimations() {
  // Get all text animations
  const textSelectors = animationSelectors.text;

  // Loop through each selector
  Object.keys(textSelectors).forEach((animationName) => {
    // Get the selector (like '[data-ani="line01"]')
    const selector = textSelectors[animationName];

    // Get the matching animation function
    const animation = textEffects.char[animationName];

    // Run it if we found a matching function
    if (animation) {
      animateElements(selector, animation, animationName);
    } else {
      console.warn(`No matching animation found for: ${animationName}`);
    }
  });
}
/**
 * Run all reveal animations (fade in, fade up, etc.)
 */
function runRevealAnimations() {}

/**
 * Run all stagger animations (lists, grids, etc.)
 */
function runStaggerAnimations() {}

/**
 * Initialize all text animations
 * This is the main function exported and called by mumino.js
 */
function initializeTextAnimations() {
  runRSTextLineAnimations();
  runRSTextWordAnimations();
  runRSTextLetterAnimations();
}

export { initializeTextAnimations };

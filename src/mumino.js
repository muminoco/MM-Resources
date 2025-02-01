// mumino.js
// import { initializeTextAnimations } from "../animations/index.js";
import { initializeTextAnimations } from "../playground/mm-resources/rs-runTextAnimations.js";
/**
 * Initialize all Mumino features
 */
function initializeMumino() {
  // Initialize features
  initializeTextAnimations();
}

// Start on DOM load
document.addEventListener("DOMContentLoaded", initializeMumino);

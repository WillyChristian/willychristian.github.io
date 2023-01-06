import Navbar from './js/navbar.js';
import HomeAnimation from './js/home_animation.js';
import ExperienceAnimation from './js/experience_animation.js';
import SmoothScroll from './js/smooth_scroll.js'

/**
 * The animation is being setup for large screens. 
 * For laptop and down, is in progress still.
 */
if (window.matchMedia('(max-width: 1300px)').matches) {
  SmoothScroll();
} else {
  Navbar();
  HomeAnimation();
  ExperienceAnimation();
}

export default function SmoothScroll() {
  document.querySelectorAll(".navbar__list a").forEach((link, index) => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      gsap.to(window, {duration: 1.5, scrollTo: e.target.hash, offsetY: 0});
    });
  });
}
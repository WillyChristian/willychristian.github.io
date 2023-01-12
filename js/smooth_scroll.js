export default function SmoothScroll() {
  document.querySelectorAll(".navbar__items a").forEach((link, index) => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      gsap.to(window, {duration: 1.5, scrollTo: e.target.hash, offsetY: 0});
    });
  });
}
const homeSection = document.querySelector('.section__home');
const contentTitle = document.querySelector('.home__title-title');
const arrow = document.querySelector('.wrapper-stack > i');

export default function HomeAnimation() {
  gsap.to(contentTitle, {
    scrollTrigger: {
      id: 'Home',
      trigger: homeSection,
      start: 'top top-=1',
      end: '+=200',
      scrub: 1,
    },
    opacity: 0
  });

  gsap.to(arrow, {
    duration: 1,
    y: 20,
    repeat: -1,
    yoyo: true
  })
}

const contentImage = $('.content__image > img');
const contentStack = $('.content__stack');
const contentText = $('.content__text');
const homeSection = $('.section__home');
const contactContainer = $('.navbar__contact');
const contentTitle = $('.title');

export default function HomeAnimation() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      id: 'Home',
      pin: $('.section__container'),
      trigger: homeSection,
      start: 'top top-=1',
      end: 'bottom',
      scrub: 1,
    },
  });

  timeline
    .to(contentImage, { opacity: 0})
    .to([contentText, contentStack], { x: contentText.innerWidth() + 10 }, 0)
    .to([contactContainer,contentTitle], {opacity: 0}, 0)
    .to(homeSection, {
      background:
        'linear-gradient(90deg, hsl(0deg, 0%, 90%) 62%, hsl(0deg, 0%, 30%) 62%)',
    })
}

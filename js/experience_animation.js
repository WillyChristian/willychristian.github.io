const arrContentItems = document.querySelectorAll(
  '.experience__content--items'
);
const experienceLineLeft = document.querySelector('.title-decoration__left');
const experienceLineRight = document.querySelector('.title-decoration__right');
const experienceContainer = document.querySelector('#experience');
const sectionsWrapper = document.querySelector('.section__container');

export default function ExperienceAnimation() {
  const linesAnimation = gsap.timeline({
    scrollTrigger: {
      id: 'left-line',
      pin: sectionsWrapper,
      pinnedContainer: sectionsWrapper,
      trigger: experienceContainer,
      start: 'top top',
      scrub: 1,
    },
  });

  linesAnimation
    .to(experienceLineRight, { width: 0 })
    .from(experienceLineLeft, { width: 0 });

  arrContentItems.forEach(containerItem => {
    const bullet = containerItem.querySelector('.bullet');
    const card = containerItem.querySelector('.card');
    const description = containerItem.querySelector('.description');

    gsap.from([bullet, card, description], {
      scrollTrigger: {
        id: 'content',
        pinnedContainer: sectionsWrapper,
        trigger: containerItem,
        start: 'bottom bottom',
        end: '+=200',
        scrub: 1,
      },
      x: 20,
      opacity: 0,
    });
  });
}

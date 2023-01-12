const arrContentItems = document.querySelectorAll(
  '.experience__content--items'
);
const experienceLineLeft = document.querySelector('.title-decoration__left');
const experienceLineRight = document.querySelector('.title-decoration__right');
const experienceContainer = document.querySelector('#experience');
const experienceTitle = document.querySelector('.experience__title--title')

export default function ExperienceAnimation() {

  gsap.to(experienceLineRight, {
    scrollTrigger: {
      id: 'LL',
      trigger: experienceContainer,
      start: 'top bottom',
      end: 'top top',
      scrub: 1,
    },
    width: 0
  });

  gsap.from(experienceLineLeft, {
    scrollTrigger: {
      id: 'RL',
      trigger: experienceTitle,
      start: 'center center',
      end: 'center center',
      scrub: 1,
    },
    width: 0
  });

  arrContentItems.forEach(containerItem => {
    const bullet = containerItem.querySelector('.bullet');
    const card = containerItem.querySelector('.card');
    const description = containerItem.querySelector('.description');

    gsap.from([bullet, card, description], {
      scrollTrigger: {
        id: 'content',
        trigger: containerItem,
        start: 'top bottom',
        end: '+=200',
        scrub: 1,
      },
      x: 20,
      opacity: 0,
    });
  });
}

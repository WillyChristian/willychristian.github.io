let media = window.matchMedia('(max-width: 992px)').matches;

export default function Projects() {
  if (media) Wrapper();
}

function Wrapper() {
  const content = document.querySelector('.projects__content');

  [...content.children].forEach(child => {
    const description = child.querySelector('.description__container');

    // Create the wrapper.
    const projectsWrapper = document.createElement('div');
    projectsWrapper.classList.add('wrapper');

    // Insert on the wrapper.
    projectsWrapper.appendChild(child);
    projectsWrapper.appendChild(description);

    // Insert on the container.
    content.appendChild(projectsWrapper);
  });
}

function Unwrapper() {
  const content = document.querySelector('.projects__content');

  [...content.children].forEach(child => {
    const description = child.querySelector('.description__container');
    const banner = child.querySelector('.projects__content-banner');
    // Insert description on the Banner
    banner.appendChild(description);
    // Remove banner from inside wrapper
    content.appendChild(banner);
    // Remove Wrapper
    child.remove();
  });
}

window.addEventListener('resize', () => {
  media = window.matchMedia('(max-width: 992px)').matches;
  let firstChild = document.querySelector('.projects__content')
    .firstElementChild;
  if (media && !firstChild.classList.contains('wrapper')) {
    Wrapper();
  }
  if (!media && firstChild.classList.contains('wrapper')) {
    Unwrapper();
  }
});

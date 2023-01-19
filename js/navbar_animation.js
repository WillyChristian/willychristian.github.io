function closeMenu(menu, button, device) {
  const timelineClose = gsap.timeline({});

  timelineClose
    .to(menu, { x: 0 })
    .to($(button).parent(), { x: 0 }, 0)
    .to(button, { rotate: 180 }, 0);
}

function openMenu(menu, button) {
  const timelineOpen = gsap.timeline({});

  timelineOpen
    .to(menu, { x: `-${$(menu).outerWidth()}` })
    .to($(button).parent(), { x: 24 }, 0)
    .to($(button), { rotate: 0 }, 0);
}

/**
 * Toggle menu
 */
export default function Navbar() {
  $('.navbar__toggle i').on('click', function () {
    const menu = $(this).closest('header');

    !$(menu).hasClass('opened') ? openMenu(menu, this) : closeMenu(menu, this);
    $(menu).toggleClass('opened');
  });
}

/**
 * Helper function to close the menu when a link is clicked
 */
$('.navbar__container a').each(function () {
  $(this).click(function () {
    $('.navbar__toggle i').trigger('click');
  });
});

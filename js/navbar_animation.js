/**
 * Handle click event
 */
export default function Navbar() {

  /**
   * Handle close the menu when a link is clicked
   */
  $('.navbar__container a').each(function() {
    $(this).click(function() {
      $('.navbar__toggle i').trigger('click');
    });
  });

  /**
   * Handle the toggle function for the navbar button
   */
  $('.navbar__toggle i').on('click', function () {
    const screenWidth = window.innerWidth;
    const contentSize = $('.home__content').width();
    const menu = $(this).parent().next('nav');
    const timelineOpen = gsap.timeline({});
    const timelineClose = gsap.timeline({});

    if ($(menu).hasClass('open')) {
      $(menu).removeClass('open');
      timelineOpen
        .to(menu, { duration: 0.4, x: (screenWidth - contentSize) / 2 })
        .to(
          $(this),
          {
            duration: 0.4,
            x: (screenWidth - contentSize - 40) / 2,
            rotate: 180,
            boxShadow: '0px -10px 10px 0px hsl(0,0%,45%)'
          },
          0
        );
    } else {
      $(menu).addClass('open');
      timelineClose.to(menu, { duration: 0.4, x: 0 }).to(
        $(this),
        {
          duration: 0.4,
          x: 0,
          rotate: 0,
          boxShadow: '0px 10px 10px 0px hsl(0,0%,45%)'
        },
        0
      );
    }
  });
}

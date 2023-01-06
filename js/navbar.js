/**
 * Handle click event
 */
export default function Navbar() {
  $('.nav__list a').each(function () {
    $(this).on('click', function (e) {
      // e.preventDefault();
      const id = $(this).attr('href');

      if (id === '#home') {
        $(id).addClass('active');
        $(id).siblings().removeClass('active');
      }

      if ($(id).hasClass('active')) {
      } else {
        $(id).toggleClass('active');
        $(id).siblings().removeClass('active');
      }
    });
  });
}

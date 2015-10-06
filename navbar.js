(function ($) {
  $(document).ready(function () {
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 230) {
          $('.navbar').fadeIn();
        } else {
          $('.navbar').fadeOut();
        }
      });
      if ($(window).width() > 768) {
        $(window).scroll(function () {
          if ($(this).scrollTop() > 230) {
            $('.mobileAlert').fadeIn();
          } else {
            $('.mobileAlert').fadeOut();
          }
        });
      }
    });
  });
}(jQuery));
(function($) {
  "use strict"; // Start of use strict

  $(document).ready(function(){
  /*! Fades in page on load */

  $('body').css('display', 'none');
  $('body').fadeIn(1000);



  });

  var text = ["Welcome", "歡迎", "欢迎"];
  var counter = 0;
  var elem = document.getElementById("mainText");
  var inst = setInterval(change, 3500);

  function change() {
    $('#mainText').text(text[counter]).fadeIn(1500).fadeOut(1500);
    counter++;
    if (counter >= text.length) {
      counter = 0;
    }
  }

//   $(window).on('resize', function() {
//     if($(window).width() < 1000000) {
//         $('.text-center').addClass('navbar-brand');
//     }
// });


$(document).scroll(function () {
  var $nav = $("#mainNav");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});







  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });








})(jQuery); // End of use strict

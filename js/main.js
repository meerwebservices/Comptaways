// Navbar
$(document).ready(function() {
    $('.navbar-toggle').click(function(e) {
      e.stopPropagation();
      $(this).toggleClass('active');
      $('.navbar-menu').toggleClass('active');
    });
    
    $('.navbar-menu li a').click(function() {
      $('.navbar-menu li.active').removeClass('active');
      $(this).parent('li').addClass('active');
      $('.navbar-menu').removeClass('active');
      $('.navbar-toggle').removeClass('active');
    });
    
    $(document).click(function(e) {
      if (!$(e.target).is('.navbar-menu, .navbar-menu *, .navbar-toggle')) {
        $('.navbar-menu').removeClass('active');
        $('.navbar-toggle').removeClass('active');
      }
    });
    
    $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop();
      
      $('.section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
          $('.navbar-menu li.active').removeClass('active');
          $('.navbar-menu li').eq(i).addClass('active');
        }
      });
    }).scroll();
  });

  //client carousel fuction

if (jQuery('.client-review').length) {
  jQuery('.client-review').owlCarousel({
      loop: true,
      margin: 40,
      nav: true,
      dotsEach: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items:1
          },
          1440: {
              items:2
          },
          1600: {
            items:3
        },
      }
  })
}
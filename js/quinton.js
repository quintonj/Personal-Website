(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 750, "easeInOutExpo");
        return false;
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

//   // Collapse the navbar when page is scrolled
//   $(window).scroll(function() {
//     if ($("#mainNav").offset().top > 100) {
//       $("#mainNav").addClass("navbar-shrink");
//     } else {
//       $("#mainNav").removeClass("navbar-shrink");
//     }
//   });

  /** 
   *   BootStrap Modal close functions
   */

  // 1
  $('#portfolioModal1').on('show.bs.modal', function(e) {
    window.location.hash = "modal";
  });

  $(window).on('hashchange', function (event) {
      if(window.location.hash != "#portfolioModal1") {
          $('#portfolioModal1').modal('hide');
      }
  });

  // 2
  $('#portfolioModal2').on('show.bs.modal', function(e) {
    window.location.hash = "modal";
  });

  $(window).on('hashchange', function (event) {
      if(window.location.hash != "#portfolioModal2") {
          $('#portfolioModal2').modal('hide');
      }
  });

  // 3
  $('#portfolioModal3').on('show.bs.modal', function(e) {
    window.location.hash = "modal";
  });

  $(window).on('hashchange', function (event) {
      if(window.location.hash != "#portfolioModal3") {
          $('#portfolioModal3').modal('hide');
      }
  });

  // 4
  $('#portfolioModal4').on('show.bs.modal', function(e) {
    window.location.hash = "modal";
  });

  $(window).on('hashchange', function (event) {
      if(window.location.hash != "#portfolioModal4") {
          $('#portfolioModal4').modal('hide');
      }
  });

  // 5
  $('#portfolioModal5').on('show.bs.modal', function(e) {
    window.location.hash = "modal";
  });

  $(window).on('hashchange', function (event) {
      if(window.location.hash != "#portfolioModal5") {
          $('#portfolioModal5').modal('hide');
      }
  });

  // 6
  $('#portfolioModal6').on('show.bs.modal', function(e) {
    window.location.hash = "modal";
  });

  $(window).on('hashchange', function (event) {
      if(window.location.hash != "#portfolioModal6") {
          $('#portfolioModal6').modal('hide');
      }
  });

  // 7
  $('#portfolioModal7').on('show.bs.modal', function(e) {
    window.location.hash = "modal";
  });

  $(window).on('hashchange', function (event) {
      if(window.location.hash != "#portfolioModal7") {
          $('#portfolioModal7').modal('hide');
      }
  });

  $('#portfolioModal1').on('show.bs.modal', function(e) {
    window.location.hash = "modal";
  });

  $(window).on('hashchange', function (event) {
      if(window.location.hash != "#portfolioModal1") {
          $('#portfolioModal1').modal('hide');
      }
  });

  $('#portfolioModal1').on('show.bs.modal', function(e) {
    window.location.hash = "modal";
  });

  $(window).on('hashchange', function (event) {
      if(window.location.hash != "#portfolioModal1") {
          $('#portfolioModal1').modal('hide');
      }
  });

  $('#portfolioModal1').on('show.bs.modal', function(e) {
    window.location.hash = "modal";
  });

  $(window).on('hashchange', function (event) {
      if(window.location.hash != "#portfolioModal1") {
          $('#portfolioModal1').modal('hide');
      }
  });

  $('#portfolioModal1').on('show.bs.modal', function(e) {
    window.location.hash = "modal";
  });

  $(window).on('hashchange', function (event) {
      if(window.location.hash != "#portfolioModal1") {
          $('#portfolioModal1').modal('hide');
      }
  });

  $('#portfolioModal1').on('show.bs.modal', function(e) {
    window.location.hash = "modal";
  });

  $(window).on('hashchange', function (event) {
      if(window.location.hash != "#portfolioModal1") {
          $('#portfolioModal1').modal('hide');
      }
  });

  $('#portfolioModal1').on('show.bs.modal', function(e) {
    window.location.hash = "modal";
  });

  $(window).on('hashchange', function (event) {
      if(window.location.hash != "#portfolioModal1") {
          $('#portfolioModal1').modal('hide');
      }
  });

  // 8
  $('#portfolioModal8').on('show.bs.modal', function(e) {
    window.location.hash = "modal";
  });

  $(window).on('hashchange', function (event) {
      if(window.location.hash != "#portfolioModal8") {
          $('#portfolioModal8').modal('hide');
      }
  });

})(jQuery); // End of use strict

function showModal(id) {
  $(".modal").modal('hide');
  $("#" + id).modal('show');
}
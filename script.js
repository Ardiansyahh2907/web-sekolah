// Navbar (Topbar Fixed)
$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log('Clicked menu');
  $('#mainListDiv').toggleClass('show_list');
  $('#mainListDiv').fadeIn();
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $('.nav').addClass('affix');
    console.log('OK');
  } else {
    $('.nav').removeClass('affix');
  }
});

// Navbar 2
$(function () {
  var ulLi = $('nav ul > li'),
    fa = $('nav ul > li:last-of-type a .fa');

  $('nav ul').append('<ol></ol>');

  $('nav').each(function () {
    for (var i = 0; i <= ulLi.length - 3; i++) {
      $('nav ul > ol').append('<li>' + i + '</li>');
      $('nav ul > ol > li')
        .eq(i)
        .html(ulLi.eq(i + 1).html());
    }
  });

  $('nav ul > li:last-of-type').on('click', function () {
    fa.toggleClass('fa-bars');
    fa.toggleClass('fa-times');
    $(this).parent().children('ol').slideToggle(500);
  });
});

// Sambutan Kepala Sekolah
$(document).ready(function () {
  $('#testimonial-slider').owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    margin: 10,
    pagination: false,
    navigation: true,
    navigationText: ['', ''],
    autoPlay: true,
  });
});

// Visi & Misi

// Prestasi
$(function () {
  var owl = $('.owl-1');
  owl.owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    items: 1,
    smartSpeed: 1000,
    autoplay: false,
    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
  });

  var carousel_nav_a = $('.carousel-nav a');

  carousel_nav_a.each(function (slide_index) {
    var $this = $(this);
    $this.attr('data-num', slide_index);
    $this.click(function (e) {
      owl.trigger('to.owl.carousel', [slide_index, 1500]);
      e.preventDefault();
    });
  });

  owl.on('changed.owl.carousel', function (event) {
    carousel_nav_a.removeClass('active');
    $('.carousel-nav a[data-num=' + event.item.index + ']').addClass('active');
  });
});

// Prasarana
$(document).ready(function () {
  $('#tenaga-pendidik-slider').owlCarousel({
    loop: true,
    nav: true,
    //mousedrag
    items: 3,
    dots: false,
    margin: 20,
    navText: ["<i class='fas fa-angle-left'><i>", "<i class='fas fa-angle-right'><i>"],

    navContainer: '#slider-tools-1',
  });
});

//
$(function () {
  if ($('.owl-2').length > 0) {
    $('.owl-2').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      smartSpeed: 1000,
      autoplay: true,
      nav: true,
      dots: true,
      pauseOnHover: false,
      responsive: {
        600: {
          margin: 20,
          nav: true,
          items: 2,
        },
        1000: {
          margin: 20,
          stagePadding: 0,
          nav: true,
          items: 3,
        },
      },
    });
  }
});

// Login Form - Halaman 3

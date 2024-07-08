$(document).ready(function(){
  new WOW().init(),
  // $('.banner-slide').slick({
  //   infinite: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><img src="' + baseUrl + 'data/images/arrows_white.png"></div>',
  //   prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><img src="' + baseUrl + 'data/images/arrows_white.png"></div>',
  //   arrows: false,
  //   fade: true,
  //   cssEase: 'linear',
  //   dots: true,
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         arrows: false
  //       }
  //     }
  //   ]
  // }),
  $('.distributor-slide').slick({
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><img src="' + baseUrl + 'data/images/arrows_red.png"></div>',
    prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><img src="' + baseUrl + 'data/images/arrows_red.png"></div>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,    
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,    
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,    
        }
      }
    ]
  }),
  $('.nav-pills .btn').click(function() {
    console.log(this.id);
    if (this.id == 'all') {
      $('#parent > div').fadeIn(450);
    } else {
      var $el = $('.' + this.id).fadeIn(450);
      $('#parent > div').not($el).hide();
    }
    $('.nav-pills .btn').removeClass('active');
    $(this).addClass('active');
  });

  $('.distributor-slide-type2').slick({
    // centerMode: true,
    focusOnSelect: true,
    arrows: true,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><img src="' + baseUrl + 'data/images/arrows_red.png"></div>',
    prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><img src="' + baseUrl + 'data/images/arrows_red.png"></div>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,    
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,    
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,    
        }
      }
    ]
  }),
  $('.nav-pills .btn').click(function() {
    console.log(this.id);
    if (this.id == 'all') {
      $('#parent > div').fadeIn(450);
    } else {
      var $el = $('.' + this.id).fadeIn(450);
      $('#parent > div').not($el).hide();
    }
    $('.nav-pills .btn').removeClass('active');
    $(this).addClass('active');
  });

  $('#slide-sertif').owlCarousel({
      // center: true,
      items: 3,
      loop: false,
      margin: 20,
      dots: false,
      nav:true,
      navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
      responsive:{
        0: {
            items: 1,
            margin: 10,
        },
        576: {
            items: 1,
            margin: 10,
        },
        768: {
            items: 2,
            margin: 10,
        },
        992: {
            items: 3,
        }
      }
  });
  // $('#frm-contact').on('submit', function( event ){
  //   event.preventDefault();
  //   $.ajax({
  //     method: "POST",
  //     url: baseUrl + "hubungikami/send",
  //     data: $('#frm-contact').serialize()
  //   })
  //     .done(function( msg ) {
  //       if( msg == 'Success' ) {
  //         $('#modalEmail').modal('show');
  //       }
  //     });
  // });

  // $('#frm-pendaftaran').on('submit', function( event ){
  //   event.preventDefault();
  //   $.ajax({
  //     method: "POST",
  //     url: baseUrl + "agen/send",
  //     data: $('#frm-pendaftaran').serialize()
  //   })
  //     .done(function( msg ) {
  //       if( msg == 'Success' ) {
  //         $('#modalEmail').modal('show');
  //       }
  //     });
  // });
});

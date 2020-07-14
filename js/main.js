$(document).ready(function () {

  $(document).on('click', '.card__item', function () {
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
    } else {
      $(this).addClass('selected');
    }
  });

  $(".main-popup__btn").click(function () {
    $(".main-popup__graphic").slideToggle();
    $(".main-popup__btn").toggleClass('rotate')
  });
  $(".header__btn").click(function () {
    $(".header__menu").toggleClass('header__menu_active');
  });
  $(".header__lang").click(function () {
    $(".header__lang_hidden").slideToggle();
  });
  $(".header__burger").click(function () {
    $(".header__menu").toggleClass('header__menu_active');
  });

  $('.wrapper .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });


  $(".card__slider").slick({
    arrows: true,
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 426,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

});
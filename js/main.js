$(document).ready(function () {

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


  $(document).on('click', '.card__item_02', function () {
    if ($('.card__item_02').hasClass('selected')) {
      $('.card__item_02').removeClass('selected');
    } else {
      $('.card__item_02').addClass('selected');
    }
  });
  $(document).on('click', '.card__item_03', function () {
    if ($('.card__item_03').hasClass('selected')) {
      $('.card__item_03').removeClass('selected');
    } else {
      $('.card__item_03').addClass('selected');
    }
  });
  $(document).on('click', '.card__item_04', function () {
    if ($('.card__item_04').hasClass('selected')) {
      $('.card__item_04').removeClass('selected');
    } else {
      $('.card__item_04').addClass('selected');
    }
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
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 426,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

});
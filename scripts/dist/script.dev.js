"use strict";

window.onload = function () {
  $.ajax({
    type: "GET",
    url: 'back/carts.php',
    data: {
      'id': 1
    },
    success: function success(html) {
      $('.main-content').html(html);
    }
  });
  $.ajax({
    type: "GET",
    url: 'back/standart_header.php',
    success: function success(html) {
      $('.header__container').html(html);
    }
  }); //$('.box-btn-animation.active').find('.mark-active').toggle();
};

$(document).ready(function () {
  $('.button-controller-next').off();
  $('.button-controller-next').on('click.next', function () {
    var id_btn = Number($('.box-btn-animation.active').find('.btn-navigation').attr('id'));

    if (id_btn < 7) {
      $('.box-btn-animation.active').find('.mark-active').hide();
      $('.box-btn-animation.active').removeClass('active');
      $('.btn-navigation#' + (id_btn + 1)).parent().addClass('active'); //const mark = $('.box-btn-animation.active').find('.mark-active');
      //mark.is(':visible') ? 1 : mark.toggle();

      switch (id_btn + 1) {
        case 2:
          $('.btn-navigation#' + (id_btn + 1)).text('Тип издаелия');
          $('header.header').is(':visible') ? 1 : $('header.header').show();
          $.ajax({
            type: "GET",
            url: 'back/carts.php',
            data: {
              'id': id_btn + 1
            },
            success: function success(html) {
              $('.main-content').html(html);
            }
          });
          $.ajax({
            type: "GET",
            url: 'back/standart_header.php',
            success: function success(html) {
              $('.header__container').html(html);
            }
          });
          break;

        case 3:
          $('.btn-navigation#' + (id_btn + 1)).text('Модель');
          $('header.header').is(':visible') ? 1 : $('header.header').show();
          $.ajax({
            type: "GET",
            url: 'back/carts.php',
            data: {
              'id': id_btn + 1
            },
            success: function success(html) {
              $('.main-content').html(html);
            }
          });
          $.ajax({
            type: "GET",
            url: 'back/standart_header.php',
            success: function success(html) {
              $('.header__container').html(html);
            }
          });
          break;

        case 4:
          $('.btn-navigation#' + (id_btn + 1)).text('Материал');
          $('header.header').is(':visible') ? 1 : $('header.header').show();
          $.ajax({
            type: "GET",
            url: 'back/carts.php',
            data: {
              'id': id_btn + 1
            },
            success: function success(html) {
              $('.main-content').html(html);
            }
          });
          $.ajax({
            type: "GET",
            url: "back/material_header.php",
            data: "materials",
            success: function success(html) {
              $('.header__container').html(html);
            }
          });
          break;

        case 5:
          $('.btn-navigation#' + (id_btn + 1)).text('Принт');
          $('header.header').is(':visible') ? 1 : $('header.header').show();
          $.ajax({
            type: "GET",
            url: 'back/prints.php',
            success: function success(html) {
              $('.main-content').html(html);
            }
          });
          $.ajax({
            type: "GET",
            url: 'back/print_header.php',
            success: function success(html) {
              $('.header__container').html(html);
            }
          });
          break;

        case 6:
          $('.btn-navigation#' + (id_btn + 1)).text('Количество');
          $('header.header').is(':visible') ? $('header.header').hide() : 1;
          $.ajax({
            type: "GET",
            url: "back/count.php",
            success: function success(html) {
              $('.main-content').html(html);
            }
          });
          break;

        case 7:
          $('.btn-navigation#' + (id_btn + 1)).text('Услуги');
          $('header.header').is(':visible') ? $('header.header').hide() : 1;
          $.ajax({
            type: "GET",
            url: "back/services.php",
            success: function success(html) {
              $('.main-content').html(html);
            }
          });
          break;
      }

      switch (id_btn) {
        case 1:
          // смена текста кнопки
          $('.btn-navigation#' + id_btn).text('1');
          break;

        case 2:
          $('.btn-navigation#' + id_btn).text('2');
          break;

        case 3:
          $('.btn-navigation#' + id_btn).text('3');
          break;

        case 4:
          $('.btn-navigation#' + id_btn).text('4');
          break;

        case 5:
          $('.btn-navigation#' + id_btn).text('5');
          break;

        case 6:
          $('.btn-navigation#' + id_btn).text('6');
          break;

        case 7:
          $('.btn-navigation#' + id_btn).text('7');
          break;
      }
    }
  });
  $('.button-controller-back').off();
  $('.button-controller-back').on('click.back', function () {
    var id_btn = Number($('.box-btn-animation.active').find('.btn-navigation').attr('id'));

    if (id_btn > 1) {
      $('.box-btn-animation.active').find('.mark-active').hide();
      $('.box-btn-animation.active').removeClass('active');
      $('.btn-navigation#' + (id_btn - 1)).parent().addClass('active'); //const mark = $('.box-btn-animation.active').find('.mark-active');
      //mark.is(':visible') ? 1 : mark.toggle();

      switch (id_btn - 1) {
        case 1:
          $('.btn-navigation#' + (id_btn - 1)).text('Одежда');
          $('header.header').is(':visible') ? 1 : $('header.header').show();
          $.ajax({
            type: "GET",
            url: 'back/carts.php',
            data: {
              'id': id_btn - 1
            },
            success: function success(html) {
              $('.main-content').html(html);
            }
          });
          $.ajax({
            type: "GET",
            url: 'back/standart_header.php',
            success: function success(html) {
              $('.header__container').html(html);
            }
          });
          break;

        case 2:
          $('.btn-navigation#' + (id_btn - 1)).text('Тип издаелия');
          $('header.header').is(':visible') ? 1 : $('header.header').show();
          $.ajax({
            type: "GET",
            url: 'back/carts.php',
            data: {
              'id': id_btn - 1
            },
            success: function success(html) {
              $('.main-content').html(html);
            }
          });
          $.ajax({
            type: "GET",
            url: 'back/standart_header.php',
            success: function success(html) {
              $('.header__container').html(html);
            }
          });
          break;

        case 3:
          $('.btn-navigation#' + (id_btn - 1)).text('Модель');
          $('header.header').is(':visible') ? 1 : $('header.header').show();
          $.ajax({
            type: "GET",
            url: 'back/carts.php',
            data: {
              'id': id_btn - 1
            },
            success: function success(html) {
              $('.main-content').html(html);
            }
          });
          $.ajax({
            type: "GET",
            url: 'back/standart_header.php',
            success: function success(html) {
              $('.header__container').html(html);
            }
          });
          break;

        case 4:
          $('.btn-navigation#' + (id_btn - 1)).text('Материал');
          $('header.header').is(':visible') ? 1 : $('header.header').show();
          $.ajax({
            type: "GET",
            url: 'back/carts.php',
            data: {
              'id': id_btn - 1
            },
            success: function success(html) {
              $('.main-content').html(html);
            }
          });
          $.ajax({
            type: "GET",
            url: "back/material_header.php",
            data: "materials",
            success: function success(html) {
              $('.header__container').html(html);
            }
          });
          break;

        case 5:
          $('.btn-navigation#' + (id_btn - 1)).text('Принт');
          $('header.header').is(':visible') ? 1 : $('header.header').show();
          $.ajax({
            type: "GET",
            url: 'back/prints.php',
            success: function success(html) {
              $('.main-content').html(html);
            }
          });
          $.ajax({
            type: "GET",
            url: 'back/print_header.php',
            success: function success(html) {
              $('.header__container').html(html);
            }
          });
          break;

        case 6:
          $('.btn-navigation#' + (id_btn - 1)).text('Количество');
          $('header.header').is(':visible') ? $('header.header').hide() : 1;
          $.ajax({
            type: "GET",
            url: 'back/carts.php',
            data: {
              'id': id_btn - 1
            },
            success: function success(html) {
              $('.main-content').html(html);
            }
          });
          break;
      }

      switch (id_btn) {
        case 1:
          // смена текста кнопки
          $('.btn-navigation#' + id_btn).text('1');
          break;

        case 2:
          $('.btn-navigation#' + id_btn).text('2');
          break;

        case 3:
          $('.btn-navigation#' + id_btn).text('3');
          break;

        case 4:
          $('.btn-navigation#' + id_btn).text('4');
          break;

        case 5:
          $('.btn-navigation#' + id_btn).text('5');
          break;

        case 6:
          $('.btn-navigation#' + id_btn).text('6');
          break;

        case 7:
          $('.btn-navigation#' + id_btn).text('7');
          break;
      }
    }
  });
  $('.btn-navigation').off('click.top-nav');
  $('.btn-navigation').on('click.top-nav', function () {
    var id = $(this).attr('id');
    $(this).text('');

    switch (Number(id)) {
      // 1-ая кнопка в верхне навигации - Одежда, по дефолту активна
      case 1:
        $($('.btn-navigation').not($(this))).parent().removeClass('active');
        $($(this)).parent().addClass('active'); //  Кружащи элемент
        //$($('.btn-navigation').not($(this))).next().hide();
        //$(this).next().is(':visible') ? 1 : $(this).next().toggle();
        //смена названия кнопки при нажатии

        $(this).text('Одежда'); // проверка видимости хедера

        $('header.header').is(':visible') ? 1 : $('header.header').show(); // смена контента

        $.ajax({
          type: "GET",
          url: 'back/carts.php',
          data: {
            'id': id
          },
          success: function success(html) {
            $('.main-content').html(html);
          }
        }); // смена хедера

        $.ajax({
          type: "GET",
          url: 'back/standart_header.php',
          success: function success(html) {
            $('.header__container').html(html);
          }
        });
        break;

      case 2:
        $($('.btn-navigation').not($(this))).parent().removeClass('active');
        $(this).parent().addClass('active'); //$($('.btn-navigation').not($(this))).next().hide();
        //$(this).next().is(':visible') ? 1 : $(this).next().toggle();

        $(this).text('Тип издаелия');
        $('header.header').is(':visible') ? 1 : $('header.header').show();
        $.ajax({
          type: "GET",
          url: 'back/carts.php',
          data: {
            'id': id
          },
          success: function success(html) {
            $('.main-content').html(html);
          }
        });
        $.ajax({
          type: "GET",
          url: 'back/standart_header.php',
          success: function success(html) {
            $('.header__container').html(html);
          }
        });
        break;

      case 3:
        $($('.btn-navigation').not($(this))).parent().removeClass('active');
        $(this).parent().addClass('active'); //$($('.btn-navigation').not($(this))).next().hide();
        //$(this).next().is(':visible') ? 1 : $(this).next().toggle();

        $(this).text('Модель');
        $('header.header').is(':visible') ? 1 : $('header.header').show();
        $.ajax({
          type: "GET",
          url: 'back/carts.php',
          data: {
            'id': id
          },
          success: function success(html) {
            $('.main-content').html(html);
          }
        });
        $.ajax({
          type: "GET",
          url: 'back/standart_header.php',
          success: function success(html) {
            $('.header__container').html(html);
          }
        });
        break;

      case 4:
        $($('.btn-navigation').not($(this))).parent().removeClass('active');
        $(this).parent().addClass('active'); //$($('.btn-navigation').not($(this))).next().hide();
        //$(this).next().is(':visible') ? 1 : $(this).next().toggle();

        $(this).text('Материал');
        $('header.header').is(':visible') ? 1 : $('header.header').show();
        $.ajax({
          type: "GET",
          url: 'back/carts.php',
          data: {
            'id': id
          },
          success: function success(html) {
            $('.main-content').html(html);
          }
        });
        $.ajax({
          type: "GET",
          url: "back/material_header.php",
          data: {
            'id': id
          },
          success: function success(html) {
            $('.header__container').html(html);
          }
        });
        break;

      case 5:
        $($('.btn-navigation').not($(this))).parent().removeClass('active');
        $(this).parent().addClass('active'); //$($('.btn-navigation').not($(this))).next().hide();
        //$(this).next().is(':visible') ? 1 : $(this).next().toggle();

        $(this).text('Принт');
        $('header.header').is(':visible') ? 1 : $('header.header').show();
        $.ajax({
          type: "GET",
          url: 'back/prints.php',
          success: function success(html) {
            $('.main-content').html(html);
          }
        });
        $.ajax({
          type: "GET",
          url: "back/print_header.php",
          success: function success(html) {
            $('.header__container').html(html);
          }
        });
        break;

      case 6:
        $($('.btn-navigation').not($(this))).parent().removeClass('active');
        $(this).parent().addClass('active'); //$($('.btn-navigation').not($(this))).next().hide();
        //$(this).next().is(':visible') ? 1 : $(this).next().toggle();

        $(this).text('Количество');
        $('header.header').is(':visible') ? $('header.header').hide() : 1;
        $.ajax({
          type: "GET",
          url: "back/count.php",
          success: function success(html) {
            $('.main-content').html(html);
          }
        });
        break;

      case 7:
        $($('.btn-navigation').not($(this))).parent().removeClass('active');
        $(this).parent().addClass('active'); //$($('.btn-navigation').not($(this))).next().hide();
        //$(this).next().is(':visible') ? 1 : $(this).next().toggle();

        $(this).text('Услуги');
        $('header.header').is(':visible') ? $('header.header').hide() : 1;
        $.ajax({
          type: "GET",
          url: "back/services.php",
          success: function success(html) {
            $('.main-content').html(html);
          }
        });
        break;
    } // смена названия не активной кнопки


    var ids = $('.btn-navigation').not($(this));

    for (var i = 0; i < ids.length; i++) {
      var identificator = Number($(ids[i]).attr('id'));

      switch (identificator) {
        case 1:
          $(ids[i]).text('1');
          break;

        case 2:
          $(ids[i]).text('2');
          break;

        case 3:
          $(ids[i]).text('3');
          break;

        case 4:
          $(ids[i]).text('4');
          break;

        case 5:
          $(ids[i]).text('5');
          break;

        case 6:
          $(ids[i]).text('6');
          break;

        case 7:
          $(ids[i]).text('7');
          break;
      }
    }
  }); // Изменение цены на кредитную при наведении

  $('.cart').hover(function () {
    var text = $(this).find('.prise').text();
    $(this).find('.prise').text(text === '22 980 руб' ? 'от 3 500 руб/м' : '22 980 руб');
  });
  $('.cart').on('click.cart', function () {
    $(".popup__bg").addClass('active');
    $(".popup").addClass('active');
    $("body").css('overflow', 'hidden');
  });
  $(".close-popup").on('click', function () {
    $(".popup__bg").removeClass('active');
    $(".popup").removeClass('active');
    $('body').css('overflow', 'auto');
  });
});
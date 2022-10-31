"use strict";

$(function () {
  $('a.add').on('click.filter-change', function (e) {
    e.preventDefault();
    $('div.add-for-cloth').not($(this).parent()).removeClass('active');
    $(this).parent().toggleClass('active');
    $('.additional-filter').show();
    var selected = $(this).parent().attr('id');

    switch (selected) {
      case 'add-picture':
        $('.additional-filter-container').not($('.additional-filter-container.add-picture')).hide();
        $('.additional-filter-container.add-picture').toggle();
        $('.additional-filter-container.add-picture').is(':hidden') ? $('.additional-filter').hide() : 1;
        break;

      case 'add-text':
        $('.additional-filter-container').not($('.additional-filter-container.add-text')).hide();
        $('.additional-filter-container.add-text').toggle();
        $('.additional-filter-container.add-text').is(':hidden') ? $('.additional-filter').hide() : 1;
        break;

      case 'add-figure':
        $('.additional-filter-container').not($('.additional-filter-container.add-figure')).hide();
        $('.additional-filter-container.add-figure').toggle();
        $('.additional-filter-container.add-figure').is(':hidden') ? $('.additional-filter').hide() : 1;
        break;

      case 'add-furn':
        $('.additional-filter-container').not($('.additional-filter-container.add-furn')).hide();
        $('.additional-filter-container.add-furn').toggle();
        $('.additional-filter-container.add-furn').is(':hidden') ? $('.additional-filter').hide() : 1;
        break;
    }
  });
  $('a.type-print').on('click.type-print-change', function (e) {
    e.preventDefault();
    $('div.type-print-change').not($(this).parent()).removeClass('active');
    $(this).parent().addClass('active');
  });
  $('a.additional-add').off();
  $('a.additional-add').on('click.additional-picture-change', function (e) {
    e.preventDefault();
    $('div.additional-add-for-cloth').not($(this).parent()).removeClass('active');
    $(this).parent().toggleClass('active');
    $('.additional-filter').show();
    var selected = $(this).parent().attr('id');

    switch (selected) {
      case 'filter-picture-animals':
        $.ajax({
          type: "GET",
          url: "animals.php",
          data: {
            'id': 'animals'
          },
          success: function success(html) {
            $('.view-cloth').html(html);
          }
        });
        break;

      case 'filter-picture-cars':
        $.ajax({
          type: "GET",
          url: "cars.php",
          data: {
            'id': 'cars'
          },
          success: function success(html) {
            $('.view-cloth').html(html);
          }
        });
        break;

      case 'filter-picture-footbal':
        $.ajax({
          type: "GET",
          url: "footbal.php",
          data: {
            'id': 'footbal'
          },
          success: function success(html) {
            $('.view-cloth').html(html);
          }
        });
        break;

      case 'filter-picture-children':
        $.ajax({
          type: "GET",
          url: "children.php",
          data: {
            'id': 'children'
          },
          success: function success(html) {
            $('.view-cloth').html(html);
          }
        });
        break;

      case 'filter-picture-games':
        $.ajax({
          type: "GET",
          url: "games.php",
          data: {
            'id': 'games'
          },
          success: function success(html) {
            $('.view-cloth').html(html);
          }
        });
        break;

      case 'filter-picture-names':
        $.ajax({
          type: "GET",
          url: "names.php",
          data: {
            'id': 'names'
          },
          success: function success(html) {
            $('.view-cloth').html(html);
          }
        });
        break;
    }
  });
  $('.button-view').parent().on('click', function () {
    $($('.button-view').not($(this).find($('.button-view')))).parent().removeClass('active').addClass('hoverable');
    $(this).removeClass('hoverable');
    $(this).addClass('active');
  });
});
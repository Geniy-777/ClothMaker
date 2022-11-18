
$(".close-popup").on('click', function () {
  $(".popup__bg").removeClass('active');
  $(".popup").removeClass('active');
  $('body').css('overflow', 'auto')
});
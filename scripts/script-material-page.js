

$('a.radio-btn-standart.density').on('click.density', function(e) {
  e.preventDefault();
  $('a.radio-btn-standart.density').not($(this)).parent().removeClass('active');
  $(this).parent().toggleClass('active');
});

$('a.radio-btn-standart.type-cloth').on('click.type-cloth', function(e) {
  e.preventDefault();
  $('a.radio-btn-standart.type-cloth').not($(this)).parent().removeClass('active');
  $(this).parent().toggleClass('active');
});

$('a.radio-btn-standart.function-cloth').on('click.function-cloth', function(e) {
  e.preventDefault();
  $('a.radio-btn-standart.function-cloth').not($(this)).parent().removeClass('active');
  $(this).parent().toggleClass('active');
});

$('a.radio-btn-standart.properties-cloth').on('click.properties-cloth', function(e) {
  e.preventDefault();
  $('a.radio-btn-standart.properties-cloth').not($(this)).parent().removeClass('active');
  $(this).parent().toggleClass('active');
});
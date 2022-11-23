
// test_arr.push(1)
// console.log(test_arr);

$(".close-popup").on('click', function () {
  $(".popup__bg").removeClass('active');
  $(".popup").removeClass('active');
  $('body').css('overflow', 'auto')
});

$('.select-cart').on("click",function(e){
  e.preventDefault()
  // $(".selected_items_container").hasClass($(".popup__container").attr("id")) 
  // ? 1
  // : $(".selected_items_container").addClass($(".popup__container").attr("id"))

  $("#selected_items_container").addClass($(".popup__container").attr("id"))

  $(".popup__bg").removeClass('active');
  $(".popup").removeClass('active');
  $('body').css('overflow', 'auto')
})
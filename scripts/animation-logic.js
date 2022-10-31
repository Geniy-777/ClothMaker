var siteW = $(".main-scale-container").width();
var siteH = $(".main-scale-container").height();

// $("p").css({ lineHeight: siteH + 'px' }); // dirty dirty

TweenMax.set(".main-scale-container", {
  perspective: 5000
});
TweenMax.set(".main-flip-container", {
  transformStyle: "preserve-3d",
  transformOrigin: '-0% 50%'
});
TweenMax.set("#new-content", {
  rotationY: 90,
  z: -siteW / 2,
  x: siteW / 2
});


function animateTranslate(isRotate) {
  var tlFlip = new TimelineMax();
  tlFlip
    .to('.main-scale-container', .2, {
      scale: 0.8,
      ease: Power2.easeInOut
    }, "start")
    .to('.main-flip-container', .3, {
      rotationY: isRotate?-90:0,
      z: isRotate?-$(".main-scale-container").width():0,
      ease: Power2.easeInOut
    }, "start+=0.7")
    .to('.main-scale-container', .2, {
      scale: 1,
      ease: Power2.easeInOut
    }, "start+=1.2");
}
var siteW = $(".main-scale-container").width();
var siteH = $(".main-scale-container").height();


TweenMax.set(".main-scale-container", {
  perspective: 5000
});
TweenMax.set(".inner-container", {
  transformStyle: "preserve-3d",
  transformOrigin: '-0% 50%'
});
TweenMax.set("#new-content", {
  transformStyle: "preserve-3d",
  transformOrigin: '50% 0% 0',
  rotationY: 90,
  z: -siteW / 2,
  x: siteW / 2
});

TweenMax.set(".header__container", {
  perspective: 5000
});
TweenMax.set(".inner__content", {
  transformStyle: "preserve-3d",
  transformOrigin: '-0% 50%'
});
TweenMax.set("#new-header-content", {
  transformStyle: "preserve-3d",
  transformOrigin: '0% 0% 0',
  rotationY: 90,
  z: -$(".header__container").width() / 2,
  x: $(".header__container").width() / 2
});


function animateTranslateContent(isRotate) {
  var tlFlip = new TimelineMax();
  tlFlip
    .to('.main-scale-container', .5, {
      scale: 0.8,
      ease: Power2.easeInOut
    }, "start")
    .to('.inner-container', .3, {
      rotationY: isRotate?-90:0,
      z: isRotate?-$(".main-scale-container").width()*2:0,
      ease: Power2.easeInOut
    }, "start+=0.7")
    .to('#new-content', .3 , {
      rotationY: isRotate?0:90,
      z: isRotate?0:-$(".main-scale-container").width(),
      x: isRotate?0:-$(".main-scale-container") / 2,
      ease: Power2.easeInOut
    }, "start+=0.7")
    .to('.main-scale-container', .5, {
      scale: 1,
      ease: Power2.easeInOut
    }, "start+=1.2");
}

function animateTranslateHeader(isRotate) {
  var tlFlip = new TimelineMax();
  isRotate?$("#new-header-content").show():$(".inner__content").show();
  tlFlip
    .to('.header__container', .5, {
      scale: 0.8,
      ease: Power2.easeInOut
    }, "start")
    .to('.header__page-content.inner__content', .3, {
      rotationY: isRotate?-90:0,
      z: isRotate?$(".header__container").width():0,
      ease: Power2.easeInOut
    }, "start+=0.6")
    .to('#new-header-content', .35 , {
      rotationY: isRotate?0:90,
      z: isRotate?0:-$(".header__container").width()/2,
      x: isRotate?0:-$(".header__container").width() /2,
      ease: Power2.easeInOut
    }, "start+=0.7")
    .to('.header__container', .5, {
      scale: 1,
      ease: Power2.easeInOut
    }, "start+=1.2");

    setTimeout(() => {
      !isRotate?$("#new-header-content").hide():$(".inner__content").hide();
    }, 1700);
}
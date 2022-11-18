//console.log(gsap)

gsap.config({
  nullTargetWarn: false,
});

const colors = gsap.to('p.loader__title', {
  paused: true,
  duration: 10,
  repeat: -1,
  '--hue': 360,
})

const doRandom = () => {
  gsap.timeline()
    .to('p.loader__title', {
      duration: 0.1,
      opacity: function () {
        return gsap.utils.random(.90, .95)
      },
      delay: function () {
        return gsap.utils.random(.1, 2)
      },
    }).to('p.loader__title', {
      duration: 0.1,
      opacity: 1,
      onComplete: function () {
        doRandom()
      }
    })
}

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!mediaQuery || !mediaQuery.matches) {
  colors.play();
  doRandom();
}


//let result = ''

/*
document.getElementById('+').addEventListener("click", function () {
  result += this.innerText
  console.error(result)
})*/

// const buttons = document.querySelectorAll('.btn-operation')

// for (let i = 0; i < buttons.length; i++) {
//   const btn = buttons[i];
//   btn.addEventListener("click", function(){
//     result += this.innerText
//     console.log(result)
//   })
// }
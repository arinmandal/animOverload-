// gsap.from("h1", {
//   y: -50,
//   duration: 1,
//   delay: 1,
//   color: 'crimson',
//   opacity:0,
// })


gsap.from(".page1 .box", {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate: 360,
})
gsap.from(".page2 .box", {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate: 360,
  // scrollTrigger: ".page2 .box",

  scrollTrigger: {
    trigger: ".page2 .box",
    scroller: "body",
    markers: true,
    start: "top 30%",
    end: "top 10%",
    // scrub: true,
    // for smooth
    scrub: 2,
  }
})
// gsap.from(".page3 .box", {
//   scale: 0,
//   x: 120,
//   delay: 1,
//   duration: 1,
//   rotate: 180,
//   // scrollTrigger: ".page3 .box",
//   scrollTrigger: {
//     trigger: ".page3 .box",
//     scroller: "body",
//     markers: true,
//     start:"top 50%"
//   }
// })
var timeLine = gsap.timeline();

timeLine.from(".nav h1, .nav h4, .nav button", {
  // y: 50,
  opacity: 0,
  duration: 0.5,
  delay: 1,
  stagger: 0.3,
})

timeLine.from(".left h1", {
  x: -800,
  opacity: 0.5,
  // delay: 1,
  duration: 1,
  stagger: 0.3,
})

timeLine.from(".right img", {
  scale: 1,
  duration: 1,
  opacity: 0,
})

timeLine.from(".page2 .box", {
  scale: 0,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page2 .box",
    scroller: "body",
  }
})
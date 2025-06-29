var timeline = gsap.timeline();

timeline.from("nav img, nav li, nav button", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
})


timeline.from("main h1", {
  y: 100,
  duration: 1,
  opacity: 0,
  stagger: 0.3,

})

timeline.from("main > img", {
  scale: 0,
  opacity: 0,
  stagger: 0.3,
})

// to (initial to final position)
// from (final to initial position)
// gsap.to(".box", {
//   x: 700,
//   y:300,
//   duration:2,
//   dealy: 1,
//   backgroundColor: "blue",
//   rotate: 360,
//   scale: 0.5,
// })

// gsap.from(".box", {
//   x: 700,
//   y:300,
//   duration:2,
//   dealy: 1,
//   backgroundColor: "blue",
//   rotate: 360,
//   scale: 0.5,
// })

// gsap.to("h1", {
//   x:500,
//   color: "red",
//   duration: 2,
//   delay: 1,
//   // scale:2,
// })
// gsap.to("h2", {
//   x:500,
//   duration: 2,
//   delay: 3,
//   color: "crimson",
//   // rotate: 360,
//   repeat: 2,
//   yoyo: true,
//   // scale:0.5,

// })

// gsap.to("p", {
//   x: 500,
//   duration: 2,
//   delay: 4,
//   color: "green",
//   stagger: 0.1,
//   repeat:2,
// })

let time = gsap.timeline();

time.to("h1", {
  x: 500,
  duration: 1
})

time.to("h2", {
  x: 500,
  y: 300,
  duration: 1,
  rotate: 360,
  color: "orange"
})

time.to("p", {
  x: 400,
  // y: 400,
  duration: 1,
  color: "green",
})
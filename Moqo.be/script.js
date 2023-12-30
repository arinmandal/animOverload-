gsap.to(".page1 h1", {
  transform: "translateX(-100%)",
  fontWeight: "100",
  scrollTrigger: {
    trigger: ".page1",
    scroller: "body",
    start: "top 0",
    end: "top -200%",
    scrub: 2,
    pin: true,
    // markers: true,
  }
})

gsap.from(".page3 h1", {
  transform: "translateX(-50%)",
  fontWeight: "100px",
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    start: "top 150",
    end: "top 150vh",
    scrub: 4,
    pin: true,
    markers: true,
    color: "skyblue",
  }
})

gsap.to(".page2 h1", {
  transform: "translateY(150%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    start: "top 0",
    end: "100vh",
    pin: true,
    scrub: 4,
    // markers: true,
  }
})
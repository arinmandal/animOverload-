## GSAP - GreenSock Animation Platform

### gsap.to()
The most common type of animation is a to() tween because it allows you to define the destination values (and most people think in terms of animating to certain values):
```
// rotate and move elements with a class of "box"
// ("x" is a shortcut for a translateX() transform) over the course of 1 second.
gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
```
https://codepen.io/GreenSock/pen/wvwEOZL

### gsap.from()

Think of a gsap.from() like a backwards tween where you define where the values should START, and then it animates to the current state which is perfect for animating objects onto the screen because you can set them up the way you want them to look at the end and then animate in from elsewhere. For example:

```
// animate ".class" from an opacity of 0 and a y position of 100 (like transform: translateY(100px))
// to the current values (an opacity of 1 and y position of 0).
gsap.from(".class", { opacity: 0, y: 100, duration: 1 });
```
https://codepen.io/GreenSock/pen/XWrGqvX

### Staggers

```
gsap.to(".box", {
  y: 100,
  stagger: 0.1, // 0.1 seconds between when each ".box" element starts animating
});
```
https://codepen.io/GreenSock/pen/WNbvZRX

A value of stagger: 0.1 would cause there to be 0.1 second between the start times of each tween. A negative value would do the same but backwards so that the last element begins first.

### Timeline
A Timeline is a powerful sequencing tool that acts as a container for tweens and other timelines, making it simple to control them as a whole and precisely manage their timing. Without Timelines, building complex sequences would be far more cumbersome because you'd need to use a delay for every animation. For example:
https://gsap.com/docs/v3/GSAP/Timeline
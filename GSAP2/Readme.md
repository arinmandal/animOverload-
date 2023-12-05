## ScrollTrigger

ScrollTrigger enables anyone to create jaw-dropping scroll-based animations with minimal code. Infinitely flexible. Scrub, pin, snap, or just trigger anything scroll-related, even if it has nothing to do with animation.

## ScrollTrigger Property

## trigger

String | Element - The element (or selector text for the element) whose position in the normal document flow is used to calculate where the ScrollTrigger starts.

`trigger: ".page3 .box",` trigger the elements.

## scroller

String | Element - By default, the scroller is the viewport itself, but if you'd like to add a ScrollTrigger to a scrollable `<div>`, for example, just define that as the scroller. You can use selector text like "#elementID" or the element itself.

```
scroller:"body",

```

## markers 

Object | Boolean - Adds markers that are helpful during development/troubleshooting. markers: true adds them with the defaults (startColor: "green", endColor: "red", fontSize: "16px", fontWeight: "normal", indent: 0) but you can customize them by using an object like


## scrub 
Boolean | Number - Links the progress of the animation directly to the scrollbar so it acts like a scrubber. You can apply smoothing so that it takes a little time for the playhead to catch up with the scrollbar's position! It can be any of the following
- Boolean - scrub: true links the animation's progress directly to the ScrollTrigger's progress.
- Number - The amount of time (in seconds) that the playhead should take to "catch up", so scrub: 0.5 would cause the animation's playhead to take 0.5 seconds to catch up with the scrollbar's position. It's great for smoothing things out.
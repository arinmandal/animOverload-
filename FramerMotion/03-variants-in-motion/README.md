# 03-Variants in Motion

This example demonstrates how to use **staggering variants** with [Framer Motion](https://www.framer.com/motion/) in React. Staggering variants allow you to animate a list of items with a delay between each item's animation, creating a smooth and visually appealing effect.

## What are Staggering Variants?

Staggering variants use the `staggerChildren` property in a parent variant's `transition` object. When the parent animates, its children animate one after another, based on the stagger delay you set.

**Example:**

```js
const parentVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2, // 0.2s delay between each child
    },
  },
};
```

## How It Works in This Project

- The dashboard component displays a toggle button.
- When toggled, a list of items appears with a staggered animation.
- Each item animates in sequence using Framer Motion's variants and `staggerChildren`.

## Sample Usage

```jsx
<motion.ul variants={parentVariants} initial='hidden' animate='visible'>
  {items.map(item => (
    <motion.li variants={childVariants} key={item}>
      {item}
    </motion.li>
  ))}
</motion.ul>
```

---

**Explore the code to see how staggered variants can enhance your UI animations!**

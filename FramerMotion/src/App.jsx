import React from 'react'
import { motion } from "motion/react"
import './App.css'
const App = () => {
  return (
    <>
      <motion.img
        animate={{ x: 1000 }}
        transition={{
          delay: 1,
          duration: 5,
          ease: "anticipate",
          // repeat: Infinity
        }}
        src="https://pngimg.com/d/tom_and_jerry_PNG29.png" alt="" />
    </>
  )
}

export default App
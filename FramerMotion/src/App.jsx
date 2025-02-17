import React from 'react'
import { motion } from "motion/react"
import './App.css'
const App = () => {
  return (
    <>
      {/* <motion.img
        animate={{ x: 1000 }}
        transition={{
          delay: 1,
          duration: 5,
          ease: "anticipate",
          // repeat: Infinity
        }}
        src="https://pngimg.com/d/tom_and_jerry_PNG29.png" alt="" /> */}

      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 700, 700, 0, 0],
          y: [0, 0, 500, 500, 0]
        }}

        transition={{
          delay: 1,
          duration: 5,

        }}
        className="box">

      </motion.div>
    </>
  )
}

export default App
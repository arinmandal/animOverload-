import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const items = ["Item One", "Item Two", "Item Three", "Item Four"];

const Dashboard = () => {
  const [showList, setShowList] = useState(false);

  const ShowUL = {
    open: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      width: "0%",
      opacity: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const ShowLI = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <div className='bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Dashboard</h1>
      <button
        className='px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition mb-6 w-full'
        onClick={() => setShowList(prev => !prev)}
      >
        {showList ? "Hide List" : "Show List"}
      </button>
      <AnimatePresence>
        {showList && (
          <motion.ul
            variants={ShowUL}
            initial='closed'
            animate='open'
            exit='closed'
            className='space-y-4'
          >
            {items.map(item => (
              <motion.li
                variants={ShowLI}
                key={item}
                className='p-4 bg-gray-100 rounded shadow text-lg'
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;

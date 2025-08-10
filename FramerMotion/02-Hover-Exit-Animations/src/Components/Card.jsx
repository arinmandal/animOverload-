import {
  TbX,
  TbMessage,
  TbHours24,
  TbView360Number,
  TbCube3dSphere,
  TbCirclePlus,
} from "react-icons/tb";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className='w-72 min-h-[30rem] h-25rem bg-white p-6 rounded-xl flex flex-col shadow-md'
          >
            <h2 className='font-semibold text-sm mb-2.5'>
              Aceternity UI Components
            </h2>
            <p className='text-neutral-400 text-sm tracking-tight leading-3.5'>
              A collection of UI components for your projects, get on with it.
            </p>

            <div className='flex items-center justify-center'>
              <button
                onClick={() => setOpen(false)}
                className='flex justify-center items-center gap-2 shadow-md px-2 py-1 rounded-md text-sm mt-4 cursor-pointer'
              >
                <img
                  src='logo.png'
                  alt='logo'
                  height={30}
                  width={30}
                  className='h-4 w-4'
                />
                Aceternity
                <TbX className='text-neutral-400 h-3 w-3' />
              </button>
            </div>

            <div className='bg-gray-100 flex-1 mt-4 border border-dashed border-neutral-200 rounded-lg relative'>
              {/* Motion Div */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className='absolute bg-white inset-0 w-full h-full rounded-lg divide-y divide-neutral-200 border border-neutral-400'
              >
                <div className='flex gap-2 p-4 '>
                  <div className='h-7 w-7 rounded-md bg-white shadow-md flex items-center justify-center'>
                    <TbMessage className='h-4 w-4 text-neutral-600' />
                  </div>

                  <div className='flex flex-col '>
                    <p className='text-[12px] font-bold text-neutral-600'>
                      Aceternity UI Components
                    </p>
                    <p className='text-[8px] text-neutral-400'>
                      Collection of UI Components
                    </p>
                  </div>
                </div>
                <div className='flex gap-2 p-4 '>
                  <div className='h-7 w-7 rounded-md bg-white shadow-md flex items-center justify-center'>
                    <TbHours24 className='h-4 w-4 text-neutral-600' />
                  </div>

                  <div className='flex flex-col '>
                    <p className='text-[12px] font-bold text-neutral-600'>
                      24 hours turnaround
                    </p>
                    <p className='text-[10px] font-semibold text-neutral-400'>
                      Super fast delivery at wrap speed.
                    </p>
                  </div>
                </div>
                <div className='flex gap-2 p-4 '>
                  <div className='h-7 w-7 rounded-md bg-white shadow-md flex items-center justify-center'>
                    <TbView360Number className='h-4 w-4 text-neutral-600' />
                  </div>

                  <div className='flex flex-col '>
                    <p className='text-[12px] font-bold text-neutral-600'>
                      360 Days all around
                    </p>
                    <p className='text-[8px] text-neutral-400'>
                      We're here to help you 24/7.
                    </p>
                  </div>
                </div>
                <div className='flex gap-2 p-4 '>
                  <div className='h-7 w-7 rounded-md bg-white shadow-md flex items-center justify-center'>
                    <TbCube3dSphere className='h-4 w-4 text-neutral-600' />
                  </div>

                  <div className='flex flex-col '>
                    <p className='text-[12px] font-bold text-neutral-600'>
                      Some other Components
                    </p>
                    <p className='text-[8px] text-neutral-400'>
                      Collection of UI Components
                    </p>
                  </div>
                </div>

                <div className='flex gap-2 p-4 items-center justify-center'>
                  <div className='h-7 w-7 rounded-md bg-white shadow-md flex items-center justify-center'>
                    <TbCirclePlus className='h-4 w-4 text-neutral-600' />
                  </div>

                  <div className='flex flex-col '>
                    <p className='text-[12px] font-bold text-neutral-600'>
                      Create Project
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Motion Divs end */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;

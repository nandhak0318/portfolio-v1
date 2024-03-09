"use client"
import  { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion' ;
import { useEffect } from 'react';

export default function Cursor(props:any) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = {
    damping: 35,
    stiffness: 700,
    mass: 1
  };
  // const cursorXSpring = useSpring(cursorX, springConfig);
  // const cursorYSpring = useSpring(cursorY, springConfig);
  const cursorXSpring = cursorX
  const cursorYSpring = cursorY
  useEffect(() => {
    const moveCursor = (e:any) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, );

  return (
    <motion.div

      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      className="fixed z-[99999] w-0 h-0 bg-pale-pink">
      {!props.hideCursor == true ?
        <motion.div layoutId="cursor" className=" cursor absolute w-4 h-4 -top-2 -left-2 bg-transparent pointer-events-none rounded-full mix-blend-multiply">
        </motion.div>
        :
        null
      }
    </motion.div>
  )
}
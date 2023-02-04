import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useAnimation,
  motion,
} from "framer-motion"
import { useInView } from "react-intersection-observer"

function Animated(props: any) {
  const [ref, inView] = useInView()
  const controls = useAnimation()
  const squareVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  // const MotionComponent = motion(props.element ?? "div")

  return (
    <motion.div
      ref={ref}
      {...props}
      initial={{ opacity: 0 }}
      animate={controls}
      variants={squareVariants}
    >
      {props.children}
    </motion.div>
  )
}

export default Animated

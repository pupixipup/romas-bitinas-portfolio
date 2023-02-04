import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion"

function Animated(props: any) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })
  console.log(scrollYProgress)
  const [visible, setVisible] = useState(false)

  useLayoutEffect(() => {
    console.log(scrollYProgress.get())
    if (scrollYProgress.get() > 0.05) {
      setVisible(true)
    }
  }, [scrollYProgress])
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1) {
      setVisible(true)
    }
  })
  const MotionComponent = motion(props.element ?? "div")

  const copiedProps = { ...props }
  delete copiedProps.element

  return (
    <AnimatePresence>
      {visible && (
        <MotionComponent
          ref={ref}
          {...copiedProps}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: props.l ?? 1 }}
        >
          {props.children}
        </MotionComponent>
      )}
    </AnimatePresence>
  )
}

export default Animated

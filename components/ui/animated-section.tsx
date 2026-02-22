"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

type Direction = "up" | "left" | "right"

interface AnimatedSectionProps {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
}

const variants = {
  up: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
}

export function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

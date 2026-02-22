"use client"

import { motion } from "framer-motion"

export function HoneycombPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none honeycomb-pattern opacity-40 ${className}`}
      aria-hidden="true"
    />
  )
}

export function WaveDivider({
  className = "",
  flip = false,
}: {
  className?: string
  flip?: boolean
}) {
  return (
    <div
      className={`absolute left-0 right-0 overflow-hidden leading-[0] ${flip ? "top-0 rotate-180" : "bottom-0"} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[40px] md:h-[60px]"
      >
        <path
          d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
          className="fill-background"
        />
      </svg>
    </div>
  )
}

export function FloatingHexagons({ className = "" }: { className?: string }) {
  const hexagons = [
    { size: 60, x: "10%", y: "20%", delay: 0, opacity: 0.04 },
    { size: 80, x: "80%", y: "15%", delay: 0.5, opacity: 0.03 },
    { size: 40, x: "70%", y: "60%", delay: 1, opacity: 0.05 },
    { size: 50, x: "20%", y: "70%", delay: 1.5, opacity: 0.03 },
    { size: 35, x: "90%", y: "45%", delay: 0.8, opacity: 0.04 },
  ]

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {hexagons.map((hex, i) => (
        <motion.svg
          key={i}
          width={hex.size}
          height={hex.size}
          viewBox="0 0 100 100"
          className="absolute"
          style={{ left: hex.x, top: hex.y, opacity: hex.opacity }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            delay: hex.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <polygon
            points="50,3 93,25 93,75 50,97 7,75 7,25"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
          />
        </motion.svg>
      ))}
    </div>
  )
}

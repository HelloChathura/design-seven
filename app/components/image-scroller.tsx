"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function LargeImageScroller() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const images = [
    //"/home_banner_1.jpg",
    "/home_banner_2.jpg",
  ]

  const handleDragEnd = () => {
    const currentX = x.get()
    const nearestMultiple = Math.round(currentX / carousel.current!.offsetWidth) * carousel.current!.offsetWidth
    controls.start({ x: nearestMultiple, transition: { type: "spring", stiffness: 300, damping: 30 } })
  }

  const handleNavigation = (direction: "left" | "right") => {
    const currentX = x.get()
    const newX = direction === "left" 
      ? Math.min(currentX + carousel.current!.offsetWidth, 0)
      : Math.max(currentX - carousel.current!.offsetWidth, -width)
    controls.start({ x: newX, transition: { type: "spring", stiffness: 300, damping: 30 } })
  }

  return (
    <div className="relative w-full overflow-hidden bg-gray-900">
  <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing">
    <motion.div
      drag="x"
      dragConstraints={{ right: 0, left: -width }}
      className="flex"
      style={{ x }}
      animate={controls}
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: "grabbing" }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="min-w-full h-[calc(100vh-4rem)] relative"
        >
          <img
            src={image}
            alt={`Scrollable image ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-black text-4xl">
              A Leader in Architectural Documentation
            </h2>
            <p className="text-black text-lg mt-2 max-w-2xl">
              Design Seven has successfully completed architectural projects of
              various scales, from small to large, utilizing BIM and CAD, all
              produced in accordance with client-required standards.
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
</div>

  )
}

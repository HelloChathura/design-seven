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
    "/home_banner_1.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
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
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-4xl font-bold">World Leader in Interior Design & Documentation</h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <button
        onClick={() => handleNavigation("left")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => handleNavigation("right")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}
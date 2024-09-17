"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

interface CardContent {
    imageSrc: string; // Path for the image (JPG/PNG/SVG)
    imageText: string;
    title: string;
    description: string;
    isSvg?: boolean; // Add a flag to indicate if the image is an SVG
  }

interface FlippingCardProps {
  front: CardContent;
  back: CardContent;
}

const FlippingCard = ({ front, back }: FlippingCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    return (
      <div
        className="relative w-full h-80 cursor-pointer"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          className="absolute w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of the card */}
          <Card className="absolute w-full h-full backface-hidden overflow-hidden">
            <CardContent className="p-0 h-full">
              {front.isSvg ? (
                <img
                  src={front.imageSrc}
                  alt={front.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={front.imageSrc}
                  alt={front.title}
                  width={240}
                  height={320}
                  quality={100}
                  className="w-full h-full object-cover"

                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {front.title}
                </h3>
                <p className="text-sm text-white">{front.description}</p>
              </div>
            </CardContent>
          </Card>
  
          {/* Back of the card */}
          <Card className="absolute w-full h-full backface-hidden overflow-hidden [transform:rotateY(180deg)]">
            <CardContent className="p-0 h-full">
              {back.isSvg ? (
                <img
                  src={back.imageSrc}
                  alt={back.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={back.imageSrc}
                  alt={back.title}
                  width={240}
                  height={320}
                  quality={100}
                  className="w-full h-full object-cover"

                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-center">
                {/* <h3 className="text-xl font-bold text-white mb-2">
                  {back.title}
                </h3> */}
                <p className="text-sm text-white">{back.description}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
}

    export default function Component() {
        const sectors = [
          {
            front: {
              imageSrc: "./corporate_commercials_front.jpg", // SVG file
              imageText: "Web Dev Front",
              title: "CORPORATE / COMMERCIALS",
              description: "",
              isSvg: true, // SVG flag
            },
            back: {
              imageSrc: "./corporate_commercials_back.jpg", // Regular image
              imageText: "Web Dev Back",
              title: "Our Web Solutions",
              description:
                "Design Seven has completed 100+ corporate interior projects worldwide",
              isSvg: true, // Not an SVG
            },
            
          },
          {
            front: {
              imageSrc: "./restaurant_bar_front.jpg", // SVG file
              imageText: "RESTAURANTS & BARS",
              title: "RESTAURANTS & BARS",
             description: "",
              isSvg: true, // SVG flag
            },
            back: {
              imageSrc: "./restaurant_bar_back.jpg", // Regular image
              imageText: "Web Dev Back",
              title: "Our Web Solutions",
              description:
                "Design Seven has completed 100+ restaurants & Bars Worldwide",
              isSvg: true, // Not an SVG
            },
            
          },
          {
            front: {
              imageSrc: "./apartment_front.jpg", // SVG file
              imageText: "Web Dev Front",
              title: "RESIDENTIAL",
              description: "",
              isSvg: true, // SVG flag
            },
            back: {
              imageSrc: "./apartment_back.jpg", // Regular image
              imageText: "Web Dev Back",
              title: "RESTAURANTS & BARS",
               description:
                 "Creating responsive and interactive websites using cutting-edge technologies.",
              isSvg: true, // Not an SVG
            },
            
          },
          {
            front: {
              imageSrc: "./mixed_front.jpg", // SVG file
              imageText: "Web Dev Front",
              title: "MIXED - USE",
              description: "",
              isSvg: true, // SVG flag
            },
            back: {
              imageSrc: "./mixed_back.jpg", // Regular image
              imageText: "Web Dev Back",
              title: "Our Web Solutions",
              description:
                "Creating responsive and interactive websites using cutting-edge technologies.",
              isSvg: true, // Not an SVG
            },
            
          },
          {
            front: {
              imageSrc: "./industrial_front.jpg", // SVG file
              imageText: "Web Dev Front",
              title: "INDUSTRIAL",
              description: "",
              isSvg: true, // SVG flag
            },
            back: {
              imageSrc: "./industrial_back.jpg", // Regular image
              imageText: "Web Dev Back",
              title: "Our Web Solutions",
              description:
                "Creating responsive and interactive websites using cutting-edge technologies.",
              isSvg: true, // Not an SVG
            },
            
          },
          {
            front: {
              imageSrc: "./healthcare_front.jpg", // SVG file
              imageText: "Web Dev Front",
              title: "HEALTHCARE",
              description: "",
              isSvg: true, // SVG flag
            },
            back: {
              imageSrc: "./healthcare_back.jpg", // Regular image
              imageText: "Web Dev Back",
              title: "Our Web Solutions",
              description:
                "Creating responsive and interactive websites using cutting-edge technologies.",
              isSvg: true, // Not an SVG
            },
            
          },
        ];
      
        return (
          <section className="py-12 bg-gray-100">
            <div className="w-[70%] mx-auto">
              <h2 className="text-3xl text-center mb-8">Sectors of Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectors.map((sector, index) => (
                  <FlippingCard key={index} front={sector.front} back={sector.back} />
                ))}
              </div>
            </div>
          </section>
        );
      }
    

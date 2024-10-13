"use client"

import { Card, CardContent } from "./ui/card"
import Image from "next/image"

interface CardContent {
  imageSrc: string; // Path for the image (JPG/PNG/SVG)
  imageText: string;
  title: string;
  isSvg?: boolean; // Add a flag to indicate if the image is an SVG
}

interface StaticCardProps {
  content: CardContent;
}

const StaticCard = ({ content }: StaticCardProps) => {
  return (
    <Card className="relative w-full h-80 overflow-hidden">
      <CardContent className="p-0 h-full flex flex-col justify-center items-center">
        {content.isSvg ? (
          <img
            src={content.imageSrc}
            alt={content.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={content.imageSrc}
            alt={content.title}
            width={240}
            height={320}
            quality={100}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-center">
          <h3 className="text-2xl font-bold text-white">{content.title}</h3> {/* Font size increased */}
        </div>
      </CardContent>
    </Card>
  );
};

export default function Component() {
  const sectors = [
    {
      content: {
        imageSrc: "./corporate_commercials_front.jpg",
        imageText: "Web Dev Front",
        title: "CORPORATE / COMMERCIALS",
        isSvg: true,
      },
    },
    {
      content: {
        imageSrc: "./restaurant_bar_front.jpg",
        imageText: "RESTAURANTS & BARS",
        title: "RESTAURANTS & BARS",
        isSvg: true,
      },
    },
    {
      content: {
        imageSrc: "./apartment_front.jpg",
        imageText: "Web Dev Front",
        title: "RESIDENTIAL",
        isSvg: true,
      },
    },
    {
      content: {
        imageSrc: "./mixed_front.jpg",
        imageText: "Web Dev Front",
        title: "MIXED - USE",
        isSvg: true,
      },
    },
    {
      content: {
        imageSrc: "./industrial_front.jpg",
        imageText: "Web Dev Front",
        title: "INDUSTRIAL",
        isSvg: true,
      },
    },
    {
      content: {
        imageSrc: "./healthcare_front.jpg",
        imageText: "Web Dev Front",
        title: "HEALTHCARE",
        isSvg: true,
      },
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="w-[70%] mx-auto">
        <h2 className="text-4xl text-center mb-8">Sectors of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <StaticCard key={index} content={sector.content} />
          ))}
        </div>
      </div>
    </section>
  );
}

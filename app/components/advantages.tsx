"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Star, Shield, Rocket, Compass, Heart, Sun, Moon, Clock } from "lucide-react";

interface Advantage {
  title: string;
  description: string;
  hoverText: string;
  icon: React.ComponentType<{ className?: string }>;
}

const advantages: Advantage[] = [
  { title: "COST & TIME", description: "DESIGN SEVEN offers cost-effective services to clients along with the best value. ", hoverText: "Clients effectively save 40-45% on cost as compared to in-house production.", icon: Clock },
  { title: "EXPERIENCE", description: "Leadership and team have completed many small to large scale projects in many states", hoverText: "Leadership and team have completed many small to large scale projects in many states", icon: Star },
  { title: "FLEXIBILITY", description: "Experienced team has the flexibility of ramping team up/down.", hoverText: "Experienced team has the flexibility of ramping team up/down based on project requirements.", icon: Shield },
  { title: "BIM EXPERTISE", description: "Design Seven is a team is well experienced in BIM. ", hoverText: "Design Seven is a team is well experienced in BIM. The team has completed many projects across the States in Revit.", icon: Rocket },
  { title: "STANDARDS", description: "DESIGN SEVEN team is able to produce sets in accordance with AIA and any required.. ", hoverText: "DESIGN SEVEN team is able to produce sets in accordance with AIA and any required client standards. ", icon: Compass },
  { title: "INFARSTRUCTURE", description: "The Organization is equipped with Data Integrity & Security, Global Connectivity..", hoverText: "The Organization is equipped with Data Integrity & Security, Global Connectivity, latest Hardware/Software, Cloud & Remote connectivity.", icon: Heart },
  { title: "PROCESS EXCELLENCE", description: "DESIGN SEVEN delivers unmatched business value through process..", hoverText: "DESIGN SEVEN delivers unmatched business value through process excellence & quality frameworks.", icon: Sun },
  { title: "REPEAT CLIENTEL", description: "DESIGN SEVEN focuses on surpassing client expectations and..", hoverText: "building long-term relationships. This is reflected in the fact that DESIGN SEVEN has a near-100% client retention rate with clients associated.", icon: Moon },
];

interface AdvantageCardProps {
  advantage: Advantage;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ advantage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = advantage.icon;

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full w-full">
        <CardContent className="p-10 h-full flex flex-col items-center justify-center text-center">
          <motion.div
            className="relative flex flex-col items-center justify-center"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <IconComponent className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-2xl font-semibold mb-2">
              {advantage.title}
            </h3>
            <p className="text-lg text-gray-600">{advantage.description}</p>
          </motion.div>
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg text-blue-600 px-4">{advantage.hoverText}</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default function Component() {
  const [text, setText] = useState("");
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const completeText = "DESIGN SEVEN";
  const typingSpeed = 100;
  const blinkingSpeed = 500;
  const pauseBeforeReset = 1000;

  useEffect(() => {
    if (index < completeText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + completeText[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setText("");
        setIndex(0);
      }, pauseBeforeReset);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, completeText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, blinkingSpeed);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto w-[80%] text-center">
        <motion.h2
          className="text-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {text}
          {isCursorVisible && <span className="text-black-600">|</span>}
          <span className="text-black-600"> Prime Advantage</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <AdvantageCard advantage={advantage} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

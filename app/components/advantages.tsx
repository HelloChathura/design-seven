"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Star, Shield, Rocket, Compass, Heart, Sun, Moon, Clock } from "lucide-react";

interface Advantage {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const advantages: Advantage[] = [
  { title: "COST & TIME", description: "Design Seven provides cost-effective services to clients, delivering exceptional value. Clients can save 40-45% compared to in-house production costs.",  icon: Clock },
  { title: "EXPERIENCE", description: "The leadership and team have successfully completed numerous small to large-scale projects across various States.",  icon: Star },
  { title: "FLEXIBILITY", description: "Our experienced team has the flexibility to scale up or down in response to project requirements.",  icon: Shield },
  { title: "BIM EXPERTISE", description: "Our team has extensive experience in BIM and has successfully completed numerous projects across the United States using Revit.", icon: Rocket },
  { title: "STANDARDS", description: "Design Seven team is capable of producing documentation sets that comply with AIA standards as well as any specific requirements set by our clients.",  icon: Compass },
  { title: "INFRASTRUCTURE", description: "The organization is equipped with robust data integrity and security measures, global connectivity, the latest hardware and software, as well as cloud and remote connectivity solutions.", icon: Heart },
  { title: "PROCESS EXCELLENCE", description: "Design Seven delivers exceptional business value by leveraging process excellence and quality frameworks.", icon: Sun },
  { title: "REPEAT CLIENTELE", description: "Design Seven is dedicated to exceeding client expectations and fostering long-term relationships. This commitment is evident in Design Seven’s nearly 100% client retention rate, with many clients having partnered with us for several years.",  icon: Moon },
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
            className={`relative flex flex-col items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-100"
            }`}
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
              className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
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
  const typingSpeed = 600;
  const blinkingSpeed = 1000;
  const pauseBeforeReset = 2000;

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
  initial={{ opacity: 0, y: 100 }} 
  animate={{ opacity: 1, y: 0 }}  
  transition={{ duration: 1}}  
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
              transition={{ delay: index * 0.1, duration: 2.5 }}
            >
              <AdvantageCard advantage={advantage} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

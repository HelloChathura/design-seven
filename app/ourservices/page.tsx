
import { Lightbulb, Target, Heart } from "lucide-react"

//SEO
export const metadata = {
    title: "Design Seven - Our Services",
    keywords: [
      "Design Seven",
      "Design 7",
      "Design",
      "Architecturing",
      "Interior Design",
      "BMI Consultancy",
    ],
    author: "Design Seven",
    description:
      "Design Seven has established itself as a BIM consultancy and Design Documentation Services for the Architectural, Interior Design industries.",
  };  

  export default function About() {

    return (
      <div className="bg-gray-100 min-h-screen">
        
        <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/structure-image.jpeg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h1 className="text-3xl md:text-4xl mb-4">About Design Seven</h1>
              <p className="text-xl md:text-xl max-w-3xl mx-auto leading-relaxed">
                Design Seven, established in 2022, serves as an extension of clients&apos; studios, offering BIM
                Consultancy &amp; Documentation Services for Architecture projects. With a strong focus on
                industry-specific expertise, Design Seven efficiently manages projects requiring minimal client
                involvement.
              </p>
            </div>
          </div>
        </div>
  
        <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
            title: "Vision",
            description: "To be a leading integrated service provider in the architecture sector by leveraging BIM and technology management, consistently delivering exceptional value to our stakeholders."
          },
          {
            icon: <Target className="w-8 h-8 text-green-500" />,
            title: "Mission",
            description: "DESIGN SEVEN aspires to be the leading choice for all stakeholders, reshaping design supporin the construction industry with a technology-focused and innovative approach. We emphasize automation and process optimization to deliver agile and efficient solutions to our clients."
          },
          {
            icon: <Heart className="w-8 h-8 text-red-500" />,
            title: "Core Values",
            description: "DESIGN SEVEN’S core value is rooted in a commitment to quality and process optimization.This dedication has enabled us to maintain a leading position in design documentation, whileour emphasis on innovation has established us as a &quot;Partner in Growth&quot; for our clients."
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              {item.icon}
              <h2 className="text-xl font-semibold ml-2">{item.title}</h2>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
      </div>
    )
  }
  
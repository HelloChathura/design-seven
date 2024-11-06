import { Lightbulb, Target, Heart } from "lucide-react";
import { Card } from "../components/ui/card";

//SEO
export const metadata = {
  title: "Design Seven - Our Services",
  keywords: [
    "Design Seven",
    "Design 7",
    "Design",
    "Studio",
    "Design Seven Studio",
    "Architecturing",
    "Interior Design",
    "BMI Consultancy",
    "BMI Services",
    "Bentonville",
    "United States",
    "Canada"
  ],
  author: "Design Seven",
  description:
    "Design Seven has established itself as a BIM consultancy and Design Documentation Services for the Architectural, Interior Design industries.",
};

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div
        className="relative h-[650px] bg-cover bg-center "
        style={{ backgroundImage: "url('/our_services.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-3xl md:text-4xl mb-4">About Design Seven</h1>
            <p className="text-xl md:text-xl max-w-3xl mx-auto leading-relaxed">
              Design Seven, established in 2022, serves as an extension of
              clients&apos; studios, offering BIM Consultancy &amp; Documentation
              Services for Architecture projects. With a strong focus on
              industry-specific expertise, Design Seven efficiently manages
              projects requiring minimal client involvement.
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
              description:
                "To be a leading integrated service provider in the architecture sector by leveraging BIM and technology management, consistently delivering exceptional value to our stakeholders.",
            },
            {
              icon: <Target className="w-8 h-8 text-green-500" />,
              title: "Mission",
              description:
                "DESIGN SEVEN aspires to be the leading choice for all stakeholders, reshaping design support in the construction industry with a technology-focused and innovative approach. We emphasize automation and process optimization to deliver agile and efficient solutions to our clients.",
            },
            {
              icon: <Heart className="w-8 h-8 text-red-500" />,
              title: "Core Values",
              description:
                "DESIGN SEVEN’S core value is rooted in a commitment to quality and process optimization. This dedication has enabled us to maintain a leading position in design documentation, while our emphasis on innovation has established us as a Partner in Growth for our clients.",
            },
          ].map((item) => (
            <div
              key={item.title}
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

        <div className="max-w-9xl mx-auto mt-2">
          <Card className="shadow-lg rounded-xl transition-all duration-500 hover:shadow-2xl">
            <div className="p-8">
              <h2 className="text-2xl mb-8 text-center">TECHNICAL EXPERTISE</h2>
              <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
                {[
                  { name: "AutoCad", src: "./autocad.png" },
                  { name: "Lumion", src: "./lumion.png" },
                  { name: "Revit", src: "./revit.png" },
                ].map((logo) => (
                  <div
                    key={logo.name}
                    className="transition-all duration-300 hover:transform hover:scale-105 hover:filter hover:brightness-75"
                  >
                    <img src={logo.src} alt={logo.name} width={60} height={60} />
                  </div>
                ))}
              </div>
              <p className="text-center text-black max-w-7xl mx-auto">
              Design Seven is a dynamic company, recognized for our integrated software ecosystem that provides comprehensive 
              documentation and visualization services. Our expertise spans various platforms, including Revit, AutoCAD, and Lumion.
               Our team of seasoned professionals possesses exceptional technical skills in these applications, 
               allowing us to maximize their potential for our clients. With extensive experience and a commitment to excellence,
                we bring intricate designs to life and transform concepts into immersive realities, 
                all while adhering to international standards required by our clients.
              </p>
            </div>
          </Card>
        </div>

        <div className="max-w-9xl mx-auto mt-2">
          <Card className="shadow-lg rounded-xl transition-all duration-500 hover:shadow-2xl">
            <div className="p-8">
              <h2 className="text-2xl mb-8 text-center">STATES WE CURRENTLY SERVE</h2>
              <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
                {[
                  { name: "serve", src: "./states-we-serve.png" },
                ].map((logo) => (
                  <div
                    key={logo.name}
                    className="transition-all duration-300 hover:transform hover:scale-105 hover:filter hover:brightness-75"
                  >
                    <img src={logo.src} alt={logo.name} width={700} height={600} />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

import { Lightbulb, Target, Heart } from "lucide-react";
import { Card } from "../components/ui/card";
import type { Metadata } from 'next'
import dynamic from 'next/dynamic';

const ContactUs = dynamic(() => import('../components/contact-us'), { ssr: false });


//SEO
export const metadata: Metadata = {
    title: "Design Seven - Contact Us",
    keywords: [
      "Design Seven",
      "Design 7",
      "Design",
      "Architecturing",
      "Interior Design",
      "BMI Consultancy",
    ],
    authors: [{ name: "Design Seven" }],
    description:
      "Design Seven has established itself as a BIM consultancy and Design Documentation Services for the Architectural, Interior Design industries.",
  }; 

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/contact-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-3xl md:text-4xl mb-4">Contact Us</h1>
            <p className="text-xl md:text-xl max-w-3xl mx-auto leading-relaxed">
              Contact Us
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">


        <div className="max-w-9xl mx-auto mt-2">
        <ContactUs showBackgroundImage={false} />
          {/* <Card className="shadow-lg rounded-xl transition-all duration-500 hover:shadow-2xl">
            <div className="p-8">
              <h2 className="text-2xl mb-8 text-center">Contact Us</h2>
              <ContactUs showBackgroundImage={false} />
            </div>
          </Card> */}
        </div>

      </div>
    </div>
  );
}


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
    authors: [{ name: "Design Seven" }],
    description:
      "Design Seven has established itself as a BIM consultancy and Design Documentation Services for the Architectural, Interior Design industries.",
  }; 

export default function About() {
  return (
    <div>
      <div className="flex">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.3132105800846!2d-94.21596432471813!3d36.35319159277076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c9100d30eaffb3%3A0x50926ec7fa726e0e!2s1713%20SW%20Commerce%20Dr%2C%20Bentonville%2C%20AR%2072712%2C%20USA!5e0!3m2!1sen!2slk!4v1727892229649!5m2!1sen!2slk"
      width="100%"
      height="650"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
      </div>

      <div className="container mx-auto px-4 py-8">


        <div className="max-w-9xl mx-auto mt-2">
        <ContactUs showBackgroundImage={false} showMap={false} />
        </div>

      </div>
    </div>
  );
}

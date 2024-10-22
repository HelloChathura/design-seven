import ImageScroller from "./components/image-scroller";
import ContactUs from "./components/contact-us";
import About from "./components/about";
import FlippingCard from "./components/flipping-cards";
import AdvantagesCard from "./components/advantages";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Design Seven-A Leader in Design Documentation & BMI Services",
  keywords: [
    "Design Seven",
    "Design 7",
    "Design",
    "Architecturing",
    "Interior Design",
    "BMI Consultancy",
    "BMI Services",
  ],
  authors: [{ name: "Design Seven" }],
  description:
    "Design Seven has established itself as a BIM consultancy and Design Documentation Services for the Architectural, Interior Design industries.",
};

export default function Home() {
  return (
    <>
      <h1>Design Seven: Leading the Way in Design Documentation & BIM Services</h1>
      <ImageScroller />
      <About />
      <FlippingCard />
      <AdvantagesCard />
      <ContactUs showBackgroundImage={true} />
    </>
  );
}
//
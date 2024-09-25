
import ImageScroller from "./components/image-scroller";
import ContactUs from "./components/contact-us";
import About from "./components/about";
import FlippingCard from "./components/flipping-cards"
import AdvantagesCard from "./components/advantages"

export const metadata = {
  title: "Design Seven - Home",
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

export default function Home() {
  return (
   <>
<ImageScroller/>
<About/>
<FlippingCard/>
<AdvantagesCard />
<ContactUs/>
   </>
  );
}

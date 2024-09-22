
import ImageScroller from "./components/image-scroller";
import ContactUs from "./components/contact-us";
import About from "./components/about";
import FlippingCard from "./components/flipping-cards"
import AdvantagesCard from "./components/advantages"

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
